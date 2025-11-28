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

  return (
    <div className="min-h-screen bg-gold">
      {/* Header */}
      <div className="bg-gold">
        <div className="relative px-6 py-6">
          <Button
            onClick={onBack}
            className="rounded-full gap-1 bg-accent text-white hover:bg-accent/90 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
            Back
          </Button>
        </div>
        <div className="px-6 pb-6">
          <h2 className="text-3xl text-accent text-center mb-2" style={{ fontFamily: 'Leckerli One, cursive' }}>
            Choose Your Beast
          </h2>
          <p className="text-brown text-center" style={{ fontFamily: 'Orienta, sans-serif' }}>
            If not ordinary cow, what would you prefer?
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-6 max-w-md mx-auto pb-[20px] pt-[16px] pr-[24px] pl-[24px]">
        {/* Milk Type Selection */}
        <div className="space-y-3">
          {milkOptions.map((option) => {
            const isSelected = option.value === 'a2cow' ? requireA2 : selectedMilkTypes.includes(option.value);
            return (
              <div
                key={option.value}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer touch-manipulation shadow-md ${isSelected ? 'border-accent bg-accent/10' : 'border-primary bg-white hover:border-accent hover:bg-accent/5 active:bg-accent/10'}`}
                onClick={() => toggleMilkType(option.value)}
              >
                <div className="flex items-start gap-3 pointer-events-none">
                  <Checkbox
                    checked={option.value === 'a2cow' ? requireA2 : selectedMilkTypes.includes(option.value)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <Label className="cursor-pointer text-accent" style={{ fontFamily: 'Leckerli One, cursive', fontSize: '1.25rem' }}>
                      {option.label}
                    </Label>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Orienta, sans-serif' }}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Dietary Filters */}
        <div className="space-y-4 pt-4">
          <h3 className="text-brown text-center text-xl" style={{ fontFamily: 'Leckerli One, cursive' }}>
            Additional Preferences
          </h3>
          
          <div className="space-y-3">
            {/* Low Lactose */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer touch-manipulation shadow-md ${lowLactose ? 'border-accent bg-accent/10' : 'border-primary bg-white hover:border-accent hover:bg-accent/5 active:bg-accent/10'}`}
              onClick={() => setLowLactose(!lowLactose)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={lowLactose}
                  onCheckedChange={setLowLactose}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <Label className="cursor-pointer text-accent" style={{ fontFamily: 'Leckerli One, cursive', fontSize: '1.1rem' }}>
                    Lower Lactose (Aged Cheeses)
                  </Label>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Orienta, sans-serif' }}>
                    Hard and aged cheeses have naturally lower lactose content
                  </p>
                </div>
              </div>
            </div>

            {/* No Inclusions */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer touch-manipulation shadow-md ${avoidInclusions ? 'border-accent bg-accent/10' : 'border-primary bg-white hover:border-accent hover:bg-accent/5 active:bg-accent/10'}`}
              onClick={() => setAvoidInclusions(!avoidInclusions)}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={avoidInclusions}
                  onCheckedChange={setAvoidInclusions}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <Label className="cursor-pointer text-accent" style={{ fontFamily: 'Leckerli One, cursive', fontSize: '1.1rem' }}>
                    Just Cheese
                  </Label>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Orienta, sans-serif' }}>
                    Pure cheese without smoke, peppers, herbs, wine, fruit, truffles, seeds, pixie dust, or other additions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="p-6 bg-gold flex justify-center gap-4 shadow-lg">
        <Button
          className="gap-2 bg-accent text-white hover:bg-accent/90 active:bg-accent/80 rounded-full px-8 h-14 shadow-lg touch-manipulation"
          style={{ fontFamily: 'Orienta, sans-serif' }}
          onClick={handleShowResults}
          disabled={!canApply}
        >
          Show Me the Cheese
        </Button>
      </div>
    </div>
  );
}