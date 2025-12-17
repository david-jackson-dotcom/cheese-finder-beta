import { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { CHEESES } from '../lib/database';

interface FilterByAnimalProps {
  onApplyFilters: (filters: {
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  }) => void;
  onBack: () => void;
  onShowResults: (filters: {
    milkTypes: string[];
    avoidInclusions: boolean;
    lowLactose: boolean;
    requireA2?: boolean;
  }) => void;
  onGuideMe?: () => void;
}

export function FilterByAnimal({ onApplyFilters, onBack, onShowResults, onGuideMe }: FilterByAnimalProps) {
  const [selectedMilkTypes, setSelectedMilkTypes] = useState<string[]>([]);
  const [avoidInclusions, setAvoidInclusions] = useState(true);
  const [lowLactose, setLowLactose] = useState(false);
  const [requireA2, setRequireA2] = useState(false);

  // Calculate cheese counts by milk type and sort dynamically
  const milkOptions = useMemo(() => {
    // Count cheeses by milk type
    const counts: Record<string, number> = {};
    
    CHEESES.forEach(cheese => {
      const milkType = cheese.Milk_Type.toLowerCase();
      counts[milkType] = (counts[milkType] || 0) + 1;
      
      // Also count A2 cow milk separately
      if (cheese.Is_A2 === true) {
        counts['a2cow'] = (counts['a2cow'] || 0) + 1;
      }
    });

    // Define all milk options with their labels and descriptions
    const options = [
      { value: 'a2cow', label: 'Fancy A2 Cows', description: 'From special cows, some find it easier to digest' },
      { value: 'sheep', label: 'Sheep', description: 'Rich and sweet, high protein' },
      { value: 'goat', label: 'Goat', description: 'Tangy and earthy, easier to digest' },
      { value: 'mixed', label: 'Blends', description: 'Blended for complexity' },
      { value: 'camel', label: 'Camel', description: 'Rare and slightly sweet' },
      { value: 'reindeer', label: 'Reindeer', description: 'Extremely rare, intensely rich' },
      { value: 'zebu', label: 'Zebu', description: 'Humped cattle, tropical regions' },
      { value: 'moose', label: 'Moose', description: 'Ultra-rare, mild and delicate' },
      { value: 'donkey', label: 'Donkey', description: 'World\'s rarest, delicate and sweet' },
      { value: 'horse', label: 'Horse', description: 'Tangy, Central Asian tradition' },
      { value: 'buffalo', label: 'Water Buffalo', description: 'Creamy and elastic' },
      { value: 'yak', label: 'Yak', description: 'Dense and herbal' },
    ];

    // Sort with A2 always at top, then by count (descending), then alphabetically by label as tiebreaker
    return options
      .map(option => ({
        ...option,
        count: counts[option.value] || 0
      }))
      .sort((a, b) => {
        // Always put A2 at the top
        if (a.value === 'a2cow') return -1;
        if (b.value === 'a2cow') return 1;
        
        // Then sort by count descending
        if (b.count !== a.count) {
          return b.count - a.count;
        }
        // Alphabetically as tiebreaker
        return a.label.localeCompare(b.label);
      });
  }, []);

  const toggleMilkType = (milk: string) => {
    // Handle A2 as a separate toggle
    if (milk === 'a2cow') {
      setRequireA2(!requireA2);
    } else {
      // Handle other milk types normally
      setSelectedMilkTypes(prev =>
        prev.includes(milk)
          ? prev.filter(m => m !== milk)
          : [...prev, milk]
      );
    }
  };

  const handleApply = () => {
    onApplyFilters({
      milkTypes: selectedMilkTypes,
      avoidInclusions,
      lowLactose,
      requireA2: requireA2 || undefined,
    });
  };

  const handleShowResults = () => {
    onShowResults({
      milkTypes: selectedMilkTypes,
      avoidInclusions,
      lowLactose,
      requireA2: requireA2 || undefined,
    });
  };

  // In Beast track, we always have a filter (excluding A1 cow milk), so always enable the button
  const canApply = true;

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
          <p className="text-brown text-center">If not ordinary cow,<br />what would you prefer?</p>
          <p className="text-brown/60 text-center">Choose many or few.</p>
        </div>

{/* ------------------------ CONTENT ------------------------ */}

      {/* Content */}
      <div className="px-6 pt-2 space-y-2 max-w-md mx-auto">
        {/* Milk Type Selection */}
        <div className="space-y-4">
          <div className="space-y-3">
            {milkOptions.map((option) => (
              <div
                key={option.value}
                className={`p-4 rounded-xl border-3 transition-all cursor-pointer touch-manipulation ${
                  (option.value === 'a2cow' ? requireA2 : selectedMilkTypes.includes(option.value))
                    ? 'border-primary bg-primary/5'
                    : 'border-orange bg-card hover:border-primary hover:bg-butter active:bg-butter'
                }`}
                onClick={() => toggleMilkType(option.value)}
              >
                <div className="flex items-start gap-3 pointer-events-none">
                  <Checkbox
                    checked={option.value === 'a2cow' ? requireA2 : selectedMilkTypes.includes(option.value)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <Label className="cursor-pointer text-dark-orange tracking-wide font-bold">
                      {option.label}
                    </Label>
                    <p className="text-sm text-brown">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Filters */}
        <div className="space-y-4 my-5">
          <Label className="text-brown text-center block">Additional Preferences:</Label>
          
          <div className="space-y-3">
            {/* Low Lactose */}
            <div
              className={`p-4 rounded-xl border-3 transition-all cursor-pointer touch-manipulation ${
                lowLactose
                  ? 'border-primary bg-primary/5'
                  : 'border-orange bg-card hover:border-primary hover:bg-primary/5 active:bg-primary/10'
              }`}
              onClick={() => setLowLactose(!lowLactose)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={lowLactose}
                  onCheckedChange={setLowLactose}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <Label className="cursor-pointer text-dark-orange tracking-wide font-bold">
                    Lower Lactose (Aged)
                  </Label>
                  <p className="text-sm text-brown">
                    Hard and aged cheeses have naturally lower lactose content
                  </p>
                </div>
              </div>
            </div>

            {/* No Inclusions */}
            <div
              className={`p-4 rounded-xl border-3 transition-all cursor-pointer touch-manipulation ${
                avoidInclusions
                 ? 'border-primary bg-primary/5'
                  : 'border-orange bg-card hover:border-primary hover:bg-primary/5 active:bg-primary/10'
              }`}
              onClick={() => setAvoidInclusions(!avoidInclusions)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={avoidInclusions}
                  onCheckedChange={setAvoidInclusions}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <Label className="cursor-pointer text-dark-orange tracking-wide font-bold">
                    Just Cheese
                  </Label>
                  <p className="text-sm text-brown">
                    Pure cheese without smoke, peppers, herbs, wine, fruit, truffles, seeds, pixie dust, or other condiment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="p-6 bg-gold flex justify-center gap-4">
        <Button
          className="w-auto gap-2 bg-dark-orange text-white hover:bg-dark-orange/90 active:bg-dark-orange/80 rounded-full px-6 min-h-[44px] touch-manipulation"
          onClick={onGuideMe}>
          Guide Me
        </Button>

        <Button
          className="w-auto gap-2 bg-magenta text-white hover:bg-magenta/90 active:bg-magenta/80 rounded-full px-6 min-h-[44px] touch-manipulation"
          onClick={handleShowResults}
          disabled={!canApply}
        >
          Show Me the Cheese
        </Button>
      </div>
      
      {/* ------------------------ END CONTENT ------------------------ */}

      </div>
    </div>
    );
}