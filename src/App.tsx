import { trackDiscoveryPath, trackResultsView, trackGuidedFlow } from './lib/analytics';
import { APP_VERSION } from './lib/version';
import { useState, useEffect, useRef } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FilterByName } from './components/FilterByName';
import { FilterByTaste } from './components/FilterByTaste';
import { FilterByRegion } from './components/FilterByRegion';
import { FilterByAnimal } from './components/FilterByAnimal';
import { WhatAreYouMaking } from './components/WhatAreYouMaking';
import { SubstituteSearch } from './components/SubstituteSearch';
import { PlannedFood } from './components/PlannedFood';
import { ResultsView } from './components/ResultsView';
import { CheeseAdmin } from './components/CheeseAdmin';
import { Cheese } from './types/cheese';
import { fetchCheeses } from './lib/api';
import { advancedCheeseSearch, findCheesesByRegion } from './lib/queries';
import { Toaster } from './components/ui/sonner';
import { updateSEOMetaTags } from './lib/seo';

type Screen = 'welcome' | 'name' | 'taste' | 'region' | 'animal' | 'results' | 'usage-selection' | 'dish-details' | 'substitute-search';

export default function App() {
  // Check for admin mode via URL parameter
  const isAdminMode = typeof window !== 'undefined' && 
    new URLSearchParams(window.location.search).get('admin') === 'cheese';
  
  // If admin mode, render admin panel
  if (isAdminMode) {
    return <CheeseAdmin />;
  }
  
  // Log app version on startup
  useEffect(() => {
    console.log(`🧀 Cheese Finder v${APP_VERSION}`);
  }, []);
  
  const [screen, setScreen] = useState<Screen>('welcome');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentTrack, setCurrentTrack] = useState<'name' | 'taste' | 'region' | 'animal' | null>(null);
  const [allCheeses, setAllCheeses] = useState<Cheese[]>([]);
  const [filteredCheeses, setFilteredCheeses] = useState<Cheese[]>([]);
  const [filterDescription, setFilterDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Store animal filters and use case temporarily
  const [pendingAnimalFilters, setPendingAnimalFilters] = useState<{
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  } | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [isGuidedFlow, setIsGuidedFlow] = useState(false);
  
  // Store substitute search error state
  const [substituteErrorState, setSubstituteErrorState] = useState<{
    targetCheese: Cheese;
    initialTolerance: number;
  } | null>(null);
  
  // Store substitute search metadata for results display
  const [substituteMetadata, setSubstituteMetadata] = useState<{
    cheeseName: string;
    tolerance: number;
    targetCheese?: Cheese;
  } | null>(null);

  
  useEffect(() => {
    loadCheeses();
  }, []);
  

// Scroll whenever screen changes
useEffect(() => {
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };
  
  // Immediate scroll
  scrollToTop();
  
  // Keep scrolling for a while to override browser restoration
  requestAnimationFrame(scrollToTop);
  setTimeout(scrollToTop, 0);
  setTimeout(scrollToTop, 10);
  setTimeout(scrollToTop, 50);
  setTimeout(scrollToTop, 100);
  setTimeout(scrollToTop, 200);
  setTimeout(scrollToTop, 300);
  setTimeout(scrollToTop, 500);
}, [screen]);

  const loadCheeses = async () => {
    setIsLoading(true);
    const cheeses = await fetchCheeses();
    setAllCheeses(cheeses);
    setIsLoading(false);
  };

  const handleModeSelect = (mode: 'name' | 'taste' | 'region' | 'animal') => {
    setCurrentTrack(mode);
    setScreen(mode);
    trackDiscoveryPath(mode); // Track which discovery path user selected

  };

// ------------------------ new granular labeling

const handleApplyTasteFilters = (filters: {
  firmness: number;
  funkiness: number;
  meltability: number;
  inclusions: string[];
}) => {
  // Use the new relational database query system
  const filtered = advancedCheeseSearch({
    firmness: filters.firmness,
    funkiness: filters.funkiness,
    meltability: filters.meltability,
    inclusions: filters.inclusions.length > 0 ? filters.inclusions : undefined,
    tolerance: 35,
  });

  setFilteredCheeses(filtered);
  
  // Updated labels for 9-level system
  const getBodyLabel = (value: number): string => {
    if (value <= 11) return 'drippy!';
    if (value <= 22) return 'creamy';
    if (value <= 33) return 'spreadable';
    if (value <= 44) return 'soft';
    if (value <= 55) return 'semi-soft';
    if (value <= 66) return 'semi-firm';
    if (value <= 77) return 'firm';
    if (value <= 88) return 'hard';
    return 'solid!';
  };

  const getBouquetLabel = (value: number): string => {
    if (value <= 11) return 'delicate!';
    if (value <= 22) return 'polite';
    if (value <= 33) return 'subtle';
    if (value <= 44) return 'moderate';
    if (value <= 55) return 'balanced';
    if (value <= 66) return 'aromatic';
    if (value <= 77) return 'strong';
    if (value <= 88) return 'funky';
    return 'angry!';
  };

  const getStabilityLabel = (value: number): string => {
    if (value <= 11) return 'stubborn!';
    if (value <= 22) return 'softens';
    if (value <= 33) return 'holds shape';
    if (value <= 44) return 'melts firm';
    if (value <= 55) return 'stretchy';
    if (value <= 66) return 'flows smooth';
    if (value <= 77) return 'creamy';
    if (value <= 88) return 'gooey';
    return 'puddles!';
  };
  
  let description = `${getBodyLabel(filters.firmness)}, ${getBouquetLabel(filters.funkiness)}, ${getStabilityLabel(filters.meltability)}`;
  if (filters.inclusions.length > 0) {
    description += ` with ${filters.inclusions.join(', ')}`;
  }
  
  setFilterDescription(description);
  setScreen('results');
};
  
// ------------------------ end new granular labeling

  const handleSelectRegion = (region: string) => {
    // Use the new relational database query system
    const filtered = findCheesesByRegion(region);
    
    setFilteredCheeses(filtered);
    setFilterDescription(`Cheeses from ${region}`);
    setScreen('results');

  };

  const handleApplyAnimalFilters = (filters: {
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  }) => {
    // No longer used - we only use handleShowAnimalResults
    handleShowAnimalResults(filters);
  };

  const handleSelectUsage = (usage: 'snacking' | 'appetizer-dessert' | 'entree' | 'cooking' | 'combination') => {
    trackGuidedFlow(usage); // Track guided flow usage selection
    // For straightforward uses, go directly to results
    if (usage === 'snacking' || usage === 'appetizer-dessert' || usage === 'combination') {
      handleGuidedResults(usage);
    } else {
      // For complex uses (entree, cooking), go to dish details page
      setSelectedUseCase(usage);
      setScreen('dish-details');
    }
  };

  const handleShowAnimalResults = (filters: {
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  }) => {
    // Apply animal filters and show results immediately
    let filtered = allCheeses;

    // Filter by milk types and/or A2 requirement
    if (filters.requireA2 || filters.milkTypes.length > 0) {
      filtered = filtered.filter(cheese => {
        const matchesA2 = filters.requireA2 && cheese.isA2 === true;
        const matchesMilkType = filters.milkTypes.length > 0 && 
          filters.milkTypes.some(type =>
            cheese.milk.some(m => m.toLowerCase() === type.toLowerCase())
          );
        return matchesA2 || matchesMilkType;
      });
    } else {
      // Only if no specific milk types selected, exclude regular cow milk
      filtered = filtered.filter(cheese => {
        const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
        const isA2Cow = cheese.isA2 === true;
        // Exclude if it has cow milk and is NOT A2
        return !hasCowMilk || isA2Cow;
      });
    }

    // Filter out cheeses with inclusions
    console.log('=== INCLUSIONS FILTER DEBUG ===');
    console.log('avoidInclusions:', filters.avoidInclusions);
    console.log('Before inclusions filter:', filtered.length);
    
    // Count how many have inclusions vs not
    const withInclusions = filtered.filter(c => c.inclusions && c.inclusions.length > 0);
    const withoutInclusions = filtered.filter(c => !c.inclusions || c.inclusions.length === 0);
    console.log(`Cheeses WITH inclusions: ${withInclusions.length}`);
    console.log(`Cheeses WITHOUT inclusions: ${withoutInclusions.length}`);
    console.log('Sample cheeses WITH inclusions:', withInclusions.slice(0, 5).map(c => ({ name: c.name, inclusions: c.inclusions })));
    
    if (filters.avoidInclusions) {
      filtered = filtered.filter(
        cheese => !cheese.inclusions || cheese.inclusions.length === 0
      );
      console.log('After inclusions filter:', filtered.length);
    } else {
      console.log('Skipping inclusions filter (showing all cheeses including those with inclusions)');
    }
    console.log('=== END DEBUG ===');

    // Filter for lower lactose
    if (filters.lowLactose) {
      filtered = filtered.filter(cheese => (cheese.firmness || 50) > 65);
    }

    setFilteredCheeses(filtered);

    // Build description
    const animalParts = [];
    if (filters.milkTypes.length > 0) {
      animalParts.push(`${filters.milkTypes.join(', ')} milk`);
    }
    if (filters.lowLactose) {
      animalParts.push('lower lactose');
    }
    if (filters.avoidInclusions) {
      animalParts.push('no added ingredients');
    }
    
    let description = 'All cheeses';
    if (animalParts.length > 0) {
      description += ` (${animalParts.join(', ')})`;
    }
    
    setFilterDescription(description);
    setScreen('results');

  };

  const handleGuideMe = () => {
    // Navigate to usage selection page
    setIsGuidedFlow(true);
    setScreen('usage-selection');
  };

  const handleDishDetails = (dishText: string) => {
    // Process dish details and show results
    handleGuidedResults(selectedUseCase || 'cooking', dishText);
  };

  const handleGuidedResults = (usage: string, dishText?: string) => {
    // Filter for Beast track only (non-A1 cow milk)
    let filtered = allCheeses.filter(cheese => {
      const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
      const isA2Cow = cheese.isA2 === true;
      // Exclude if it has cow milk and is NOT A2
      return !hasCowMilk || isA2Cow;
    });

    // Hardcoded traditional cheese mappings for each usage
    const traditionalCheeses: Record<string, string[]> = {
      'snacking': ['cheddar', 'gouda', 'brie', 'manchego', 'gruyere'],
      'appetizer-dessert': ['brie', 'camembert', 'gorgonzola', 'stilton', 'mascarpone'],
      'combination': ['mozzarella', 'cheddar', 'feta', 'cotija', 'queso fresco', 'parmesan'],
    };

    // For straightforward uses, filter by similar characteristics to traditional cheeses
    if (usage === 'snacking' || usage === 'appetizer-dessert' || usage === 'combination') {
      const traditional = traditionalCheeses[usage] || [];
      
      // Find characteristics of traditional cheeses in our database
      const traditionalInDb = allCheeses.filter(c => 
        traditional.some(t => c.name.toLowerCase().includes(t.toLowerCase()))
      );

      if (traditionalInDb.length > 0) {
        // Get average characteristics
        const avgFirmness = traditionalInDb.reduce((sum, c) => sum + (c.firmness || 50), 0) / traditionalInDb.length;
        const avgMeltability = traditionalInDb.reduce((sum, c) => sum + (c.meltability || 50), 0) / traditionalInDb.length;
        
        // Filter Beast track cheeses by similar characteristics
        filtered = filtered.filter(cheese => {
          const firmnessMatch = Math.abs((cheese.firmness || 50) - avgFirmness) < 30;
          const meltMatch = Math.abs((cheese.meltability || 50) - avgMeltability) < 30;
          return firmnessMatch || meltMatch;
        });
      }
    }

    // For dish-specific requests, use simple keyword matching with fallback
    if (dishText) {
      const searchTerm = dishText.toLowerCase();
      
      // Simple dish-based filtering
      if (searchTerm.includes('pizza') || searchTerm.includes('melt')) {
        filtered = filtered.filter(c => (c.meltability || 0) >= 70);
      } else if (searchTerm.includes('salad') || searchTerm.includes('taco')) {
        filtered = filtered.filter(c => (c.firmness || 0) >= 50);
      } else if (searchTerm.includes('dessert') || searchTerm.includes('sweet')) {
        filtered = filtered.filter(c => 
          c.flavor?.some(f => f.toLowerCase().includes('sweet') || f.toLowerCase().includes('mild'))
        );
      }
      
      // If filtering resulted in no cheeses, show all Beast track cheeses as fallback
      if (filtered.length === 0) {
        filtered = allCheeses.filter(cheese => {
          const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
          const isA2Cow = cheese.isA2 === true;
          return !hasCowMilk || isA2Cow;
        });
      }
    }

    setFilteredCheeses(filtered);

    // Build description
    const usageLabels: Record<string, string> = {
      'snacking': 'snacking',
      'appetizer-dessert': 'appetizers and desserts',
      'entree': 'main dishes',
      'cooking': 'cooking',
      'combination': 'combination dishes',
    };

    let description = dishText 
      ? `Cheeses for ${dishText}`
      : `Non-cow cheeses for ${usageLabels[usage] || usage}`;
    
    setFilterDescription(description);
    setScreen('results');
  };

  const handleSkipRefinement = () => {
    // Skip refinement and go straight to results with all matching animal cheeses
    if (!pendingAnimalFilters) {
      setScreen('welcome');
      return;
    }

    // Use 'all' as the use case to skip use case filtering
    setSelectedUseCase('all');
    
    // Call refinement with no text to apply only animal filters
    const filters = pendingAnimalFilters;
    let filtered = allCheeses;

    // Filter by milk types and/or A2 requirement
    if (filters.requireA2 || filters.milkTypes.length > 0) {
      filtered = filtered.filter(cheese => {
        const matchesA2 = filters.requireA2 && cheese.isA2 === true;
        const matchesMilkType = filters.milkTypes.length > 0 && 
          filters.milkTypes.some(type =>
            cheese.milk.some(m => m.toLowerCase() === type.toLowerCase())
          );
        return matchesA2 || matchesMilkType;
      });
    } else {
      // Only if no specific milk types selected, exclude regular cow milk
      filtered = filtered.filter(cheese => {
        const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
        const isA2Cow = cheese.isA2 === true;
        // Exclude if it has cow milk and is NOT A2
        return !hasCowMilk || isA2Cow;
      });
    }

    // Filter out cheeses with inclusions
    if (filters.avoidInclusions) {
      filtered = filtered.filter(
        cheese => !cheese.inclusions || cheese.inclusions.length === 0
      );
    }

    // Filter for lower lactose
    if (filters.lowLactose) {
      filtered = filtered.filter(cheese => (cheese.firmness || 50) > 65);
    }

    setFilteredCheeses(filtered);

    // Build description
    const animalParts = [];
    if (filters.milkTypes.length > 0) {
      animalParts.push(`${filters.milkTypes.join(', ')} milk`);
    }
    if (filters.lowLactose) {
      animalParts.push('lower lactose');
    }
    if (filters.avoidInclusions) {
      animalParts.push('no added ingredients');
    }
    
    let description = 'All cheeses';
    if (animalParts.length > 0) {
      description += ` (${animalParts.join(', ')})`;
    }
    
    setFilterDescription(description);
    setScreen('results');
  };

  const handleRefinementContinue = (refinementText?: string) => {
    if (!selectedUseCase || !pendingAnimalFilters) {
      setScreen('welcome');
      return;
    }

    const useCase = selectedUseCase;
    const filters = pendingAnimalFilters;

    // Start with all cheeses
    let filtered = allCheeses;
    console.log('Starting with', filtered.length, 'cheeses');

    // Filter by milk types and/or A2 requirement
    if (filters.requireA2 || filters.milkTypes.length > 0) {
      filtered = filtered.filter(cheese => {
        // Check if cheese matches A2 requirement
        const matchesA2 = filters.requireA2 && cheese.isA2 === true;
        
        // Check if cheese matches any of the selected milk types
        const matchesMilkType = filters.milkTypes.length > 0 && 
          filters.milkTypes.some(type =>
            cheese.milk.some(m => m.toLowerCase() === type.toLowerCase())
          );
        
        // Return true if cheese matches A2 OR any selected milk type
        return matchesA2 || matchesMilkType;
      });
      console.log('After milk/A2 filter:', filtered.length, 'cheeses');
    } else {
      // Only if no specific milk types selected, exclude regular cow milk
      filtered = filtered.filter(cheese => {
        const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
        const isA2Cow = cheese.isA2 === true;
        // Exclude if it has cow milk and is NOT A2
        return !hasCowMilk || isA2Cow;
      });
      console.log('After excluding regular cow milk:', filtered.length, 'cheeses');
    }

    // Filter out cheeses with inclusions
    if (filters.avoidInclusions) {
      filtered = filtered.filter(
        cheese => !cheese.inclusions || cheese.inclusions.length === 0
      );
    }

    // Filter for lower lactose (hard cheeses, firmness > 65)
    if (filters.lowLactose) {
      filtered = filtered.filter(cheese => (cheese.firmness || 50) > 65);
    }

    // Filter by use case (skip if 'all' is selected)
    const useCaseMap: { [key: string]: string[] } = {
      snacking: ['snacking', 'dessert'],
      appetizer: ['appetizer', 'dessert'],
      entree: ['fondue', 'cooking'],
      cooking: ['cooking', 'baking'],
      topping: ['seasoning', 'salad', 'cooking'],
      all: [], // Don't filter by use case when 'all' is selected
    };

    const relevantUses = useCaseMap[useCase] || [];
    console.log('Filtering by use case:', useCase, '→', relevantUses);
    if (relevantUses.length > 0) {
      filtered = filtered.filter(cheese =>
        cheese.uses?.some(use =>
          relevantUses.some(relevantUse =>
            use.toLowerCase() === relevantUse.toLowerCase()
          )
        )
      );
      console.log('After use case filter:', filtered.length, 'cheeses');
      console.log('Filtered cheeses:', filtered.map(c => `${c.name} (${c.milk.join(',')}, uses: ${c.uses?.join(',')})`));
    }

    // Apply text refinement if provided - context-aware based on use case
    if (refinementText) {
      const searchTerm = refinementText.toLowerCase();
      
      // Special handling for common dishes that require specific cheese attributes
      if (useCase === 'cooking' || useCase === 'entree') {
        // Dishes that need good melting/gratinating
        if (searchTerm.includes('onion soup') || searchTerm.includes('french onion')) {
          console.log('Applying onion soup filter (meltability >= 65, firmness >= 50)');
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 65 && // Good melting
            (cheese.firmness || 50) >= 50 // Semi-firm to hard for structure
          );
          console.log('After onion soup filter:', filtered.length, 'cheeses');
          console.log('Final cheeses:', filtered.map(c => `${c.name} (firmness: ${c.firmness}, meltability: ${c.meltability})`));
        }
        // Au gratin dishes (potatoes, etc.) - need good melting and browning
        else if (searchTerm.includes('gratin') || searchTerm.includes('potato')) {
          console.log('Applying gratin filter (meltability >= 65, firmness >= 45)');
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 65 && // Good melting for creamy texture
            (cheese.firmness || 50) >= 45 // Semi-firm for structure and browning
          );
          console.log('After gratin filter:', filtered.length, 'cheeses');
          console.log('Final cheeses:', filtered.map(c => `${c.name} (firmness: ${c.firmness}, meltability: ${c.meltability})`));
        }
        // Pizza needs excellent melt and stretch
        else if (searchTerm.includes('pizza')) {
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 75 &&
            (cheese.texture?.toLowerCase().includes('soft') || cheese.texture?.toLowerCase().includes('semi'))
          );
        }
        // Pasta dishes often need grating or good melting
        else if (searchTerm.includes('pasta') || searchTerm.includes('spaghetti') || searchTerm.includes('lasagna')) {
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 60 || 
            cheese.uses?.includes('seasoning')
          );
        }
        // Mac and cheese needs creamy melters
        else if (searchTerm.includes('mac') || searchTerm.includes('macaroni')) {
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 70 &&
            cheese.flavor?.some(f => f.includes('creamy') || f.includes('buttery'))
          );
        }
        // Grilled cheese needs good melting
        else if (searchTerm.includes('grilled cheese') || searchTerm.includes('sandwich')) {
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 65
          );
        }
        // Fondue needs excellent melting
        else if (searchTerm.includes('fondue')) {
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 75
          );
        }
        // Default: search in descriptions and attributes
        else {
          filtered = filtered.filter(cheese => {
            const searchableText = [
              cheese.name,
              cheese.description,
              cheese.texture,
              cheese.origin,
              ...(cheese.flavor || []),
              ...(cheese.inclusions || []),
              cheese.flavorBySource || '',
            ].join(' ').toLowerCase();
            
            return searchableText.includes(searchTerm);
          });
        }
      }
      // For other use cases, do general text search
      else {
        filtered = filtered.filter(cheese => {
          const searchableText = [
            cheese.name,
            cheese.description,
            cheese.texture,
            cheese.origin,
            ...(cheese.flavor || []),
            ...(cheese.inclusions || []),
            cheese.flavorBySource || '',
          ].join(' ').toLowerCase();
          
          return searchableText.includes(searchTerm);
        });
      }
    }

    setFilteredCheeses(filtered);

    // Build description
    const useCaseLabels: { [key: string]: string } = {
      snacking: 'cheese boards and snacking',
      appetizer: 'appetizers and wine pairings',
      entree: 'fondue and main dishes',
      cooking: 'cooking and baking',
      topping: 'toppings and garnishes',
      all: 'any use',
    };

    let description = 'Cheeses for ';
    
    // More specific description if a dish is mentioned
    if (refinementText && (useCase === 'cooking' || useCase === 'entree')) {
      const searchTerm = refinementText.toLowerCase();
      if (searchTerm.includes('onion soup') || searchTerm.includes('french onion')) {
        description += 'French onion soup';
      } else if (searchTerm.includes('gratin') || searchTerm.includes('potato')) {
        description += 'gratins and baked dishes';
      } else if (searchTerm.includes('pizza')) {
        description += 'pizza';
      } else if (searchTerm.includes('pasta') || searchTerm.includes('spaghetti')) {
        description += 'pasta dishes';
      } else if (searchTerm.includes('lasagna')) {
        description += 'lasagna';
      } else if (searchTerm.includes('mac') || searchTerm.includes('macaroni')) {
        description += 'mac and cheese';
      } else if (searchTerm.includes('grilled cheese') || searchTerm.includes('sandwich')) {
        description += 'sandwiches';
      } else if (searchTerm.includes('fondue')) {
        description += 'fondue';
      } else {
        description += useCaseLabels[useCase] || useCase;
        description += ` matching "${refinementText}"`;
      }
    } else {
      description += useCaseLabels[useCase] || useCase;
      if (refinementText) {
        description += ` matching "${refinementText}"`;
      }
    }
    
    const animalParts = [];
    if (filters.milkTypes.length > 0) {
      animalParts.push(`${filters.milkTypes.join(', ')} milk`);
    }
    if (filters.lowLactose) {
      animalParts.push('lower lactose');
    }
    if (filters.avoidInclusions) {
      animalParts.push('no added ingredients');
    }
    
    if (animalParts.length > 0) {
      description += ` (${animalParts.join(', ')})`;
    }
    
    setFilterDescription(description);
    setScreen('results');
  };

  const handleBack = () => {
    if (screen === 'results') {
      // If we came from guided flow, go back to usage selection
      if (selectedUseCase) {
        setScreen('usage-selection');
      } else if (currentTrack === 'animal') {
        setScreen('animal');
      } else if (currentTrack === 'taste') {
        setScreen('taste');
      } else if (currentTrack === 'region') {
        setScreen('region');
      } else {
        setScreen('welcome');
      }
    } else if (screen === 'usage-selection') {
      setScreen('animal');
    } else if (screen === 'dish-details') {
      setScreen('usage-selection');
    } else if (screen === 'substitute-search') {
      setScreen('usage-selection');
    } else {
      setScreen('welcome');
    }
  };

  const handleBackToAnimal = () => {
    // Clear animal filters so user starts fresh
    setPendingAnimalFilters(null);
    setSelectedUseCase(null);
    setScreen('animal');
  };

  const handleSubstituteSearch = (cheeses: Cheese[], description: string, substituteCheeseName?: string, substituteTolerance?: number, targetCheese?: Cheese) => {
    setFilteredCheeses(cheeses);
    setFilterDescription(description);
    setScreen('results');
    setSubstituteErrorState(null); // Clear error state on success
    
    // Store substitute metadata for results display
    if (substituteCheeseName !== undefined && substituteTolerance !== undefined) {
      setSubstituteMetadata({ cheeseName: substituteCheeseName, tolerance: substituteTolerance, targetCheese });
    } else {
      setSubstituteMetadata(null);
    }
    
  };

  const handleSubstituteError = (targetCheese: Cheese, initialTolerance: number) => {
    setSubstituteErrorState({ targetCheese, initialTolerance });
    setScreen('substitute-search');
  };

  const handleIncreaseRange = () => {
    if (!substituteMetadata?.targetCheese) return;
    
    const newTolerance = (substituteMetadata.tolerance || 5) + 5;
    const targetCheese = substituteMetadata.targetCheese;
    
    // Get Beast-eligible cheeses (no A1 cow milk)
    const beastCheeses = allCheeses.filter(cheese => {
      const hasCowMilk = cheese.milk.some(m => m.toLowerCase() === 'cow');
      const isA2Cow = cheese.isA2 === true;
      return !hasCowMilk || isA2Cow;
    });

    // Helper to convert availability to numeric score
    const getUbiquityScore = (availability?: string): number => {
      switch (availability) {
        case 'Ubiquitous': return 4;
        case 'Specialty': return 3;
        case 'Artisanal': return 2;
        case 'Obscure': return 1;
        default: return 0;
      }
    };

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
    const alternatives = withSimilarity
      .filter(item => item.similarity <= newTolerance)
      .sort((a, b) => getUbiquityScore(b.cheese.availability) - getUbiquityScore(a.cheese.availability))
      .map(item => item.cheese);

    if (alternatives.length > 0) {
      const description = `Found ${alternatives.length} cheese${alternatives.length > 1 ? 's' : ''} you'll love within ${newTolerance} degrees of similarity.`;
      handleSubstituteSearch(alternatives, description, targetCheese.name, newTolerance, targetCheese);
    } else {
      // Still no results - update metadata and stay on page
      setSubstituteMetadata({ cheeseName: targetCheese.name, tolerance: newTolerance, targetCheese });
    }
  };

  const handleStartOver = () => {
    // Clear all filters and return to the current track
    setPendingAnimalFilters(null);
    setSelectedUseCase(null);
    setFilteredCheeses([]);
    setFilterDescription('');
    
    // Go back to the track we came from
    if (currentTrack === 'animal') {
      setScreen('animal');
    } else if (currentTrack === 'taste') {
      setScreen('taste');
    } else if (currentTrack === 'region') {
      setScreen('region');
    } else {
      setScreen('welcome');
    }

  };

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Loading cheese database...</p>
        </div>
      </div>
    );
  }
  
  console.log('🧀 Current screen:', screen, 'Scroll:', scrollContainerRef.current?.scrollTop);

  return (

  <div 
    key={screen}
    ref={scrollContainerRef} 
    className="size-full bg-background overflow-y-auto"
  >
          <Toaster />
      {screen === 'welcome' && <WelcomeScreen onSelectMode={handleModeSelect} />}
      
      {screen === 'name' && (
        <FilterByName onBack={handleBack} />
      )}
      
      {screen === 'taste' && (
        <FilterByTaste onApplyFilters={handleApplyTasteFilters} onBack={handleBack} />
      )}
      
      {screen === 'region' && (
        <FilterByRegion onSelectRegion={handleSelectRegion} onBack={handleBack} />
      )}
      
      {screen === 'animal' && (
        <FilterByAnimal onApplyFilters={handleApplyAnimalFilters} onBack={handleBack} onShowResults={handleShowAnimalResults} onGuideMe={handleGuideMe} />
      )}
      
      {screen === 'usage-selection' && (
        <WhatAreYouMaking 
          onSelectUsage={handleSelectUsage} 
          onBack={() => setScreen('animal')} 
          onSubstituteSearch={handleSubstituteSearch}
          onSubstituteError={handleSubstituteError}
          allCheeses={allCheeses}
        />
      )}
      
      {screen === 'substitute-search' && substituteErrorState && (
        <SubstituteSearch
          targetCheese={substituteErrorState.targetCheese}
          initialTolerance={substituteErrorState.initialTolerance}
          onBack={handleBack}
          onSubstituteSearch={handleSubstituteSearch}
          allCheeses={allCheeses}
        />
      )}
      
      {screen === 'dish-details' && (
        <PlannedFood onContinue={handleDishDetails} onBack={() => setScreen('usage-selection')} />
      )}
      
      {screen === 'results' && (
        <ResultsView
          cheeses={filteredCheeses}
          onBack={handleBack}
          filterDescription={filterDescription}
          isA2Search={pendingAnimalFilters?.requireA2}
          onBackToAnimal={handleBackToAnimal}
          onStartOver={handleStartOver}
          selectedMilkTypes={pendingAnimalFilters?.milkTypes}
          isGuidedFlow={isGuidedFlow}
          onDiscoverAnother={handleStartOver}
          substituteCheeseName={substituteMetadata?.cheeseName}
          substituteTolerance={substituteMetadata?.tolerance}
          onIncreaseRange={handleIncreaseRange}
        />
      )}
    </div>
  );
}
