import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Cheese } from '../types/cheese';
import { searchCheesesByName } from '../lib/queries';

/**
 * Normalize string by removing diacritical marks (accents)
 */
function normalizeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Stricter cheese search for substitutes - only returns results if:
 * 1. It's a partial match (substring), OR
 * 2. It's a very close fuzzy match (Levenshtein distance <= 2)
 */
function findCheeseForSubstitute(query: string, allCheeses: Cheese[]): Cheese | null {
  if (!query.trim()) return null;
  
  const normalizedQuery = normalizeDiacritics(query.trim());
  
  // First try exact or partial matches
  const partialMatches = allCheeses.filter(c => 
    normalizeDiacritics(c.name).includes(normalizedQuery)
  );
  
  if (partialMatches.length > 0) {
    // Return exact match if exists
    const exactMatch = partialMatches.find(c => 
      normalizeDiacritics(c.name) === normalizedQuery
    );
    if (exactMatch) return exactMatch;
    
    // Otherwise prefer least funky (mildest) cheese
    const sortedByFunkiness = [...partialMatches].sort((a, b) => 
      (a.funkiness || 0) - (b.funkiness || 0)
    );
    return sortedByFunkiness[0];
  }
  
  // No partial match - try very close fuzzy match (max distance 2)
  // This handles typos like "epoisses" -> "époisses" 
  const searchResult = searchCheesesByName(query);
  
  if (searchResult.cheeses.length > 0 && searchResult.isFuzzyMatch) {
    // Only accept fuzzy match if it's very close (distance <= 2)
    const bestMatch = searchResult.cheeses[0];
    const normalizedBestMatch = normalizeDiacritics(bestMatch.name);
    
    // Calculate simple Levenshtein distance
    const distance = levenshteinDistance(normalizedQuery, normalizedBestMatch);
    
    if (distance <= 2) {
      return bestMatch;
    }
  }
  
  return null;
}

/**
 * Simple Levenshtein distance calculation
 */
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  return matrix[len1][len2];
}

interface WhatAreYouMakingProps {
  onSelectUsage: (usage: 'snacking' | 'appetizer-dessert' | 'entree' | 'cooking' | 'combination') => void;
  onBack: () => void;
  onSubstituteSearch: (cheeses: Cheese[], description: string, substituteCheeseName?: string, substituteTolerance?: number, targetCheese?: Cheese) => void;
  onSubstituteError: (targetCheese: Cheese, initialTolerance: number) => void;
  allCheeses: Cheese[];
}

const USAGE_OPTIONS = [
  {
    id: 'snacking' as const,
    title: 'Snacks',
    description: 'On crackers, I guess? Or maybe just use my fingers. Don\'t judge me!',
  },
  {
    id: 'appetizer-dessert' as const,
    title: 'Appetizer or Dessert',
    description: 'Paired with sips',
  },
  {
    id: 'entree' as const,
    title: 'Entrée',
    description: 'Cheese as the star of the meal',
  },
  {
    id: 'cooking' as const,
    title: 'Cooking',
    description: 'Recipes, incorporating into dishes',
  },
  {
    id: 'combination' as const,
    title: 'Combination',
    description: 'Complementing other stand-alone toppings',
  },
];

export function WhatAreYouMaking({ onSelectUsage, onBack, onSubstituteSearch, onSubstituteError, allCheeses }: WhatAreYouMakingProps) {
  const [substituteInput, setSubstituteInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const getUbiquityScore = (availability?: string): number => {
    // Convert availability to numeric score (higher = more ubiquitous)
    switch (availability) {
      case 'Ubiquitous': return 4;
      case 'Specialty': return 3;
      case 'Artisanal': return 2;
      case 'Obscure': return 1;
      default: return 0;
    }
  };

  const findBeastAlternatives = (targetCheese: Cheese, currentTolerance: number): Cheese[] => {
    // Get Beast-eligible cheeses (no A1 cow milk)
    const beastCheeses = allCheeses.filter(cheese => {
      const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
      const isA2Cow = cheese.isA2 === true;
      // Include if it doesn't have cow milk, OR if it's A2 cow
      return !hasCowMilk || isA2Cow;
    });

    // Calculate similarity for each Beast cheese
    const withSimilarity = beastCheeses.map(cheese => {
      const firmnessDiff = Math.abs((cheese.firmness || 50) - (targetCheese.firmness || 50));
      const meltabilityDiff = Math.abs((cheese.meltability || 50) - (targetCheese.meltability || 50));
      const funkinessDiff = Math.abs((cheese.funkiness || 50) - (targetCheese.funkiness || 50));
      const totalDiff = firmnessDiff + meltabilityDiff + funkinessDiff;
      
      return {
        cheese,
        similarity: totalDiff
      };
    });

    // Filter by tolerance and sort by ubiquity (descending)
    return withSimilarity
      .filter(item => item.similarity <= currentTolerance)
      .sort((a, b) => getUbiquityScore(b.cheese.availability) - getUbiquityScore(a.cheese.availability))
      .map(item => item.cheese);
  };

  const handleSubstituteSearch = () => {
    if (!substituteInput.trim()) return;

    setIsSearching(true);
    setErrorMessage('');

    // Find the cheese in database using strict search
    const targetCheese = findCheeseForSubstitute(substituteInput.trim(), allCheeses);
    
    if (!targetCheese) {
      setErrorMessage(`"${substituteInput}" not found in our database. Try another cheese name.`);
      setIsSearching(false);
      return;
    }

    // Find Beast alternatives within initial tolerance of 5
    const alternatives = findBeastAlternatives(targetCheese, 5);

    if (alternatives.length > 0) {
      // Success - navigate to results
      const description = `Found ${alternatives.length} cheese${alternatives.length > 1 ? 's' : ''} you'll love within 5 degrees of similarity.`;
      onSubstituteSearch(alternatives, description, targetCheese.name, 5, targetCheese);
      setIsSearching(false);
      // Reset for next search
      setSubstituteInput('');
    } else {
      // No matches - navigate to error resolution screen
      onSubstituteError(targetCheese, 5);
      setIsSearching(false);
      // Reset for next search
      setSubstituteInput('');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFD800' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#FFD800' }}>
        <div className="relative px-6 py-14">
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Button
              onClick={onBack}
              className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80 text-base"
            >
              <ChevronLeft className="h-6 w-6" />
              Back
            </Button>
          </div>
        </div>
        <div className="px-6 pb-4">
          <p className="text-brown text-center">What are you planning?</p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-8 px-6 py-8">
        <div className="grid gap-3">
          {USAGE_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelectUsage(option.id)}
              className="relative p-5 rounded-2xl border-2 border-orange hover:border-primary hover:bg-primary/5 active:bg-primary/10 transition-all bg-card touch-manipulation"
            >
              <div className="relative">
                <h3 className="text-[24px] text-dark-orange text-left mb-1">{option.title}</h3>
                <ChevronRight className="text-dark-orange absolute right-0" style={{ height: '3.4ex', width: '3.4ex', bottom: '1ex' }} />
              </div>
              <p className="text-sm text-muted-foreground text-left">{option.description}</p>
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="text-center">
          <h1 className="text-accent text-3xl">— or —</h1>
        </div>

        {/* Substitute Search Section */}
        <div className="space-y-4">
          <p className="text-brown text-center">I'm not sure. I just need a substitution for</p>
          
          <input
            type="text"
            placeholder="example: cheddar"
            value={substituteInput}
            onChange={(e) => setSubstituteInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubstituteSearch()}
            className="w-full p-4 pr-4 border-2 border-primary/30 rounded-2xl bg-input-background focus:outline-none focus:border-primary transition-colors placeholder:text-brown/40 text-base"
            style={{ fontFamily: 'Orienta' }}
          />

          <div className="flex justify-center">
            <Button
              onClick={handleSubstituteSearch}
              disabled={isSearching || !substituteInput.trim()}
              className="bg-dark-orange text-white hover:bg-dark-orange/90"
            >
              {isSearching ? 'Searching...' : 'Discover Alternatives'}
            </Button>
          </div>

          {/* Error Messages (only for not found in database) */}
          {errorMessage && (
            <p className="text-brown text-center">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
