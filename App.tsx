import React, { useState, useEffect, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

// --- PLACEHOLDER DEPENDENCIES START ---
// Define placeholder types
type Cheese = {
  id: string;
  name: string;
  milk: string[];
  firmness?: number;
  funkiness?: number;
  meltability?: number;
  inclusions?: string[];
  isA2?: boolean;
  availability?: 'Ubiquitous' | 'Specialty' | 'Artisanal' | 'Obscure';
  texture?: string;
  origin?: string;
  flavor?: string[];
  flavorBySource?: string;
  uses?: string[];
};

// Define placeholder constants
const APP_VERSION = '1.0.1';

// Define placeholder utility functions (stubs)
const trackDiscoveryPath = (mode: string) => console.log(`[Analytics] Tracked discovery path: ${mode}`);
const trackResultsView = (desc: string, count: number) => console.log(`[Analytics] Tracked results view: ${desc} (${count})`);
const trackGuidedFlow = (usage: string) => console.log(`[Analytics] Tracked guided flow: ${usage}`);
const updateSEOMetaTags = () => console.log('[SEO] Updated meta tags.');

// Mock database (10 example cheeses)
const MOCK_CHEESES: Cheese[] = [
  { id: '1', name: 'Goat Cheddar', milk: ['Goat'], firmness: 85, funkiness: 20, meltability: 70, inclusions: [], isA2: false, availability: 'Specialty', uses: ['snacking', 'cooking'] },
  { id: '2', name: 'Sheep Feta', milk: ['Sheep'], firmness: 55, funkiness: 40, meltability: 10, inclusions: [], isA2: false, availability: 'Ubiquitous', uses: ['salad', 'topping'] },
  { id: '3', name: 'A2 Cow Brie', milk: ['Cow'], firmness: 20, funkiness: 60, meltability: 80, inclusions: [], isA2: true, availability: 'Artisanal', uses: ['appetizer'] },
  { id: '4', name: 'Buffalo Mozzarella', milk: ['Buffalo'], firmness: 10, funkiness: 5, meltability: 95, inclusions: [], isA2: false, availability: 'Specialty', uses: ['pizza', 'cooking'] },
  { id: '5', name: 'Plain Goat Chevre', milk: ['Goat'], firmness: 15, funkiness: 30, meltability: 5, inclusions: [], isA2: false, availability: 'Ubiquitous', uses: ['snacking'] },
  { id: '6', name: 'Regular Cow Gruyere', milk: ['Cow'], firmness: 90, funkiness: 70, meltability: 90, inclusions: [], isA2: false, availability: 'Ubiquitous', uses: ['fondue', 'cooking'] },
  { id: '7', name: 'Sheep Ricotta Salata', milk: ['Sheep'], firmness: 70, funkiness: 10, meltability: 5, inclusions: ['Pepper'], isA2: false, availability: 'Artisanal', uses: ['topping'] },
  { id: '8', name: 'Non-A2 Cow Cheddar', milk: ['Cow'], firmness: 80, funkiness: 30, meltability: 75, inclusions: [], isA2: false, availability: 'Ubiquitous', uses: ['snacking', 'cooking'] },
  { id: '9', name: 'A2 Cow Gouda w/ Truffles', milk: ['Cow'], firmness: 70, funkiness: 50, meltability: 80, inclusions: ['Truffle'], isA2: true, availability: 'Obscure', uses: ['snacking', 'entree'] },
  { id: '10', name: 'Hard Swiss Cheese', milk: ['Cow'], firmness: 95, funkiness: 50, meltability: 60, inclusions: [], isA2: true, availability: 'Specialty', uses: ['seasoning'] },
];

const fetchCheeses = async (): Promise<Cheese[]> => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_CHEESES), 1000));
};

const advancedCheeseSearch = (filters: any): Cheese[] => {
  console.log('[Query] Advanced Search executed:', filters);
  // Placeholder logic to return a subset
  return MOCK_CHEESES.filter(c => (c.firmness || 0) >= filters.firmness - 30 && c.milk.some(m => m !== 'Cow'));
};

const findCheesesByRegion = (region: string): Cheese[] => {
  console.log('[Query] Region Search executed:', region);
  // Placeholder logic
  return MOCK_CHEESES.filter(c => c.origin?.toLowerCase().includes(region.toLowerCase()) || c.milk.some(m => m !== 'Cow'));
};

// Placeholder UI components (minimal JSX for rendering)
const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-150 ${className}`}
  >
    {children}
  </button>
);

const Toaster = () => <div className="fixed top-4 right-4 p-2 bg-black text-white rounded-lg">Toaster Placeholder</div>;

const NavHeader = ({ title, onBack }) => (
  <div className="flex items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
    {onBack && (
      <Button onClick={onBack} className="bg-gray-100 text-gray-700 mr-3 hover:bg-gray-200">
        &larr; Back
      </Button>
    )}
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
  </div>
);

const WelcomeScreen = ({ onSelectMode }) => (
  <div className="p-8 space-y-6">
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Welcome to Cheese Finder 🧀</h2>
    <div className="grid grid-cols-2 gap-4">
      <Button onClick={() => onSelectMode('name')} className="bg-indigo-600 text-white hover:bg-indigo-700">Find by Name</Button>
      <Button onClick={() => onSelectMode('taste')} className="bg-green-600 text-white hover:bg-green-700">Find by Taste</Button>
      <Button onClick={() => onSelectMode('region')} className="bg-yellow-600 text-white hover:bg-yellow-700">Find by Region</Button>
      <Button onClick={() => onSelectMode('animal')} className="bg-pink-600 text-white hover:bg-pink-700">Find by Milk Source</Button>
    </div>
  </div>
);

// Placeholder component stubs
const FilterByName = ({ onBack }) => (
  <div className="p-8">
    <NavHeader title="Filter by Name (Placeholder)" onBack={onBack} />
    <p className="mt-4">Search functionality would go here.</p>
  </div>
);
const FilterByTaste = ({ onApplyFilters, onBack }) => (
  <div className="p-8">
    <NavHeader title="Filter by Taste (Placeholder)" onBack={onBack} />
    <Button onClick={() => onApplyFilters({ firmness: 50, funkiness: 50, meltability: 50, inclusions: [] })} className="mt-4 bg-blue-500 text-white">Apply Sample Filters</Button>
  </div>
);
const FilterByRegion = ({ onSelectRegion, onBack }) => (
  <div className="p-8">
    <NavHeader title="Filter by Region (Placeholder)" onBack={onBack} />
    <Button onClick={() => onSelectRegion('France')} className="mt-4 bg-blue-500 text-white">Select France (Sample)</Button>
  </div>
);
const FilterByAnimal = ({ onApplyFilters, onBack, onShowResults, onGuideMe }) => (
  <div className="p-8 space-y-6">
    <NavHeader title="Filter by Animal (Placeholder)" onBack={onBack} />
    <p>Simulate finding non-Cow cheeses or special milk types.</p>
    <Button onClick={() => onShowResults({ milkTypes: ['Goat', 'Sheep'], avoidInclusions: true, lowLactose: false })} className="bg-purple-600 text-white w-full">Show Goat/Sheep Results</Button>
    <Button onClick={onGuideMe} className="bg-purple-300 text-purple-900 w-full">Guide Me By Use Case</Button>
  </div>
);

const WhatAreYouMaking = ({ onSelectUsage, onBack, onSubstituteSearch, onSubstituteError, allCheeses }) => (
  <div className="p-8 space-y-6">
    <NavHeader title="What Are You Making? (Placeholder)" onBack={onBack} />
    <Button onClick={() => onSelectUsage('snacking')} className="bg-teal-500 text-white w-full">Snacking</Button>
    <Button onClick={() => onSelectUsage('cooking')} className="bg-teal-500 text-white w-full">Cooking (Go to Dish Details)</Button>
    <Button onClick={() => onSubstituteError(allCheeses[5], 25)} className="bg-red-500 text-white w-full">Substitute Search (Error trigger)</Button>
  </div>
);

const PlannedFood = ({ onContinue, onBack }) => (
  <div className="p-8 space-y-6">
    <NavHeader title="Dish Details (Placeholder)" onBack={onBack} />
    <Button onClick={() => onContinue('Pizza')} className="bg-teal-500 text-white w-full">Continue with "Pizza"</Button>
  </div>
);

const SubstituteSearch = ({ targetCheese, initialTolerance, onBack, onSubstituteSearch, allCheeses }) => (
  <div className="p-8 space-y-6">
    <NavHeader title="Substitute Search (Placeholder)" onBack={onBack} />
    <p>We couldn't find a substitute for **{targetCheese.name}** within {initialTolerance} degrees.</p>
    <Button onClick={() => onSubstituteSearch([allCheeses[0], allCheeses[1]], 'Wider range substitutes.', targetCheese.name, initialTolerance + 10, targetCheese)} className="bg-yellow-500 text-white w-full">Increase Range to {initialTolerance + 10}</Button>
  </div>
);

const ResultsView = ({ cheeses, onBack, filterDescription, onStartOver, substituteCheeseName, substituteTolerance, onIncreaseRange }) => (
  <div className="p-8 space-y-6">
    <NavHeader title="Results" onBack={onBack} />
    <div className="p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-lg">
      <p className="font-semibold">Filter:</p>
      <p>{filterDescription}</p>
      {substituteCheeseName && (
        <p className="mt-2 text-sm">Substituting **{substituteCheeseName}** (Tolerance: {substituteTolerance})</p>
      )}
    </div>

    <h3 className="text-xl font-bold">Found {cheeses.length} Cheeses</h3>
    {cheeses.length === 0 ? (
      <div className="text-center p-8 border border-dashed rounded-lg">
        <p className="text-gray-500">No cheeses matched your criteria.</p>
        {substituteCheeseName && onIncreaseRange && (
          <Button onClick={onIncreaseRange} className="mt-4 bg-indigo-500 text-white">Increase Range Further</Button>
        )}
      </div>
    ) : (
      <div className="space-y-4">
        {cheeses.map(cheese => (
          <div key={cheese.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h4 className="text-lg font-semibold">{cheese.name}</h4>
            <p className="text-sm text-gray-600">Milk: {cheese.milk.join(', ')}</p>
            <p className="text-sm text-gray-600">Firmness: {cheese.firmness || 'N/A'} | Melt: {cheese.meltability || 'N/A'}</p>
          </div>
        ))}
      </div>
    )}

    <Button onClick={onStartOver} className="bg-red-500 text-white w-full">Start New Discovery</Button>
  </div>
);

const CheeseAdmin = () => (
    <div className="p-8">
        <h1 className="text-3xl font-bold text-center">🧀 Cheese Admin Panel (Placeholder)</h1>
        <p className="text-center mt-2 text-gray-600">This mode is active because `?admin=cheese` is in the URL.</p>
    </div>
);
// --- PLACEHOLDER DEPENDENCIES END ---

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

  // **********************************************
  // FIX: Uncommented this useEffect to load data
  // **********************************************
  useEffect(() => {
    loadCheeses();
    // Update SEO meta tags with current cheese count
    updateSEOMetaTags();
  }, []);

  useEffect(() => {
    // Track results view whenever results are displayed
    if (screen === 'results' && filteredCheeses.length > 0 && filterDescription) {
      trackResultsView(filterDescription, filteredCheeses.length);
    }
  }, [screen, filteredCheeses, filterDescription]);

  const loadCheeses = async () => {
    setIsLoading(true);
    try {
      const cheeses = await fetchCheeses();
      setAllCheeses(cheeses);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load cheeses:", error);
      setIsLoading(false);
    }
  };

  const handleModeSelect = (mode: 'name' | 'taste' | 'region' | 'animal') => {
    setCurrentTrack(mode);
    setScreen(mode);
    trackDiscoveryPath(mode); // Track which discovery path user selected
    // Scroll to top when entering a new track
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      tolerance: 35, // Increased from 25 for more forgiving results
    });

    setFilteredCheeses(filtered);
    
    const firmLabel = filters.firmness < 33 ? 'soft' : filters.firmness > 66 ? 'hard' : 'semi-firm';
    const funkLabel = filters.funkiness < 33 ? 'delicate' : filters.funkiness > 66 ? 'funky' : 'moderate';
    const meltLabel = filters.meltability < 33 ? 'unmeltable' : filters.meltability > 66 ? 'melty' : 'moderately melty';
    
    let description = `${firmLabel}, ${funkLabel}, ${meltLabel}`;
    if (filters.inclusions.length > 0) {
      description += ` with ${filters.inclusions.join(', ')}`;
    }
    
    setFilterDescription(description);
    setScreen('results');
    // Scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRegion = (region: string) => {
    // Use the new relational database query system
    const filtered = findCheesesByRegion(region);
    
    setFilteredCheeses(filtered);
    setFilterDescription(`Cheeses from ${region}`);
    setScreen('results');
    // Scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Deprecated, but keeping signature for completeness
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShowAnimalResults = (filters: {
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  }) => {
    // Store filters for potential later refinement (guided flow or skip refinement)
    setPendingAnimalFilters(filters);

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
    // Scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGuideMe = () => {
    // Navigate to usage selection page
    setIsGuidedFlow(true);
    setScreen('usage-selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      'appetizer-dessert': ['appetizer', 'dessert'],
      entree: ['fondue', 'cooking'],
      cooking: ['cooking', 'baking'],
      combination: ['seasoning', 'salad', 'cooking'],
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
        }
        // Au gratin dishes (potatoes, etc.) - need good melting and browning
        else if (searchTerm.includes('gratin') || searchTerm.includes('potato')) {
          console.log('Applying gratin filter (meltability >= 65, firmness >= 45)');
          filtered = filtered.filter(cheese => 
            (cheese.meltability || 50) >= 65 && // Good melting for creamy texture
            (cheese.firmness || 50) >= 45 // Semi-firm for structure and browning
          );
          console.log('After gratin filter:', filtered.length, 'cheeses');
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
      'appetizer-dessert': 'appetizers and wine pairings',
      entree: 'fondue and main dishes',
      cooking: 'cooking and baking',
      combination: 'combination dishes',
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
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubstituteError = (targetCheese: Cheese, initialTolerance: number) => {
    setSubstituteErrorState({ targetCheese, initialTolerance });
    setScreen('substitute-search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIncreaseRange = useCallback(() => {
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
  }, [allCheeses, substituteMetadata]);

  const handleStartOver = () => {
    // Clear all filters and return to the current track
    setPendingAnimalFilters(null);
    setSelectedUseCase(null);
    setFilteredCheeses([]);
    setFilterDescription('');
    setSubstituteMetadata(null); // Clear substitute metadata
    
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
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center space-y-4">
          <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-muted-foreground text-gray-500">Loading cheese database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full min-h-screen bg-gray-50">
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
          onBack={handleBackToAnimal} // Go back to animal filter from usage selection
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

// Boilerplate to run the single component
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}