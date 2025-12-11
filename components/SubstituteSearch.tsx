import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import { Cheese } from '../types/cheese';

interface SubstituteSearchProps {
  targetCheese: Cheese;
  initialTolerance: number;
  onBack: () => void;
  onSubstituteSearch: (cheeses: Cheese[], description: string, substituteCheeseName?: string, substituteTolerance?: number, targetCheese?: Cheese) => void;
  allCheeses: Cheese[];
}

export function SubstituteSearch({ targetCheese, initialTolerance, onBack, onSubstituteSearch, allCheeses }: SubstituteSearchProps) {
  const [tolerance, setTolerance] = useState(initialTolerance);
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

  const findBeastAlternatives = (currentTolerance: number): Cheese[] => {
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

  const handleIncreaseRange = () => {
    const newTolerance = tolerance + 5;
    setTolerance(newTolerance);
    setIsSearching(true);

    // Search with new tolerance
    setTimeout(() => {
      const alternatives = findBeastAlternatives(newTolerance);
      
      if (alternatives.length > 0) {
        // Success - navigate to results
        const description = `Found ${alternatives.length} cheese${alternatives.length > 1 ? 's' : ''} you'll love within ${newTolerance} degrees of similarity.`;
        onSubstituteSearch(alternatives, description, targetCheese.name, newTolerance, targetCheese);
      }
      
      setIsSearching(false);
    }, 100);
  };

 {/* ------------------------ Standard page top  ------------------------ */}
 
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gold px-6 py-4"> 
        {/* Container for Back Button */}
        <div className="relative">
          <Button
            onClick={onBack}
            className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
          >
            <ChevronLeft className="h-6 w-6" />
            Back
          </Button>
        </div>
      </div>
      <div className="max-w-md mx-auto space-y-4 px-6 py-4">
        <div className="px-6 mt-2"> 
          
{/* ------------------------ CONTENT ------------------------ */}

        {tolerance < 100 ? (
          <div className="space-y-4">
            <p className="text-brown text-center">
              No alternatives for <br />{targetCheese.name} found within<br/>{tolerance} degrees of similarity.<br />Increase range?
            </p>
            <div className="flex gap-3">
              <Button
                onClick={onBack}
                className="flex-1 bg-dark-orange text-white hover:bg-dark-orange/90"
              >
                Discover Another
              </Button>
              <Button
                onClick={handleIncreaseRange}
                disabled={isSearching}
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isSearching ? 'Searching...' : 'Add 5º'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-brown text-center">
              No matches found for<br />{targetCheese.name} within<br/>100 degrees of similarity.
              <br />
              Maybe cheese is just not your thing. Have you tried nutritional yeast?
            </p>
            <Button
              onClick={onBack}
              className="w-full bg-dark-orange text-white hover:bg-dark-orange/90"
            >
              Discover Another
            </Button>
          </div>
        )}
      </div>
    </div>
    </div>

  );
}
