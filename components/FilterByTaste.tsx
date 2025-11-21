import { useState } from 'react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft } from 'lucide-react';

interface FilterByTasteProps {
  onApplyFilters: (filters: {
    firmness: number;
    funkiness: number;
    meltability: number;
    inclusions: string[];
  }) => void;
  onBack: () => void;
}

const AVAILABLE_INCLUSIONS = [
  'caraway',
  'peppers',
  'wine',
  'beer',
  'herbs',
  'truffle',
  'nuts',
  'fruit',
];

export function FilterByTaste({ onApplyFilters, onBack }: FilterByTasteProps) {
  const [firmness, setFirmness] = useState(50);
  const [funkiness, setFunkiness] = useState(50);
  const [meltability, setMeltability] = useState(50);
  const [selectedInclusions, setSelectedInclusions] = useState<string[]>([]);

  const toggleInclusion = (inclusion: string) => {
    setSelectedInclusions((prev) =>
      prev.includes(inclusion)
        ? prev.filter((i) => i !== inclusion)
        : [...prev, inclusion]
    );
  };

  const handleSubmit = () => {
    onApplyFilters({
      firmness,
      funkiness,
      meltability,
      inclusions: selectedInclusions,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     // <div className="top-0 z-10 bg-background">
       // <div className="relative px-6 py-14">
          <div className="bg-gold">

        <div className="px-6 pb-4">
                <div className="relative px-6 py-14">
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Button
              onClick={onBack}
              className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
            >
              <ChevronLeft className="h-6 w-6" />
              Back
            </Button>
          </div>
        </div>
        <div className="px-6 pb-4">
          <p className="text-brown text-center">How do you like your cheese? Use the sliders.</p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-8 px-6 py-8">
        <div className="space-y-10">
          {/* Firmness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Structure</label>
              <span className="text-sm text-orange font-light">
                {firmness < 33 ? 'Runny' : firmness > 66 ? 'Waxy' : 'Firm'}
              </span>
            </div>
            <div className="space-y-3">
              <Slider
                value={[firmness]}
                onValueChange={(value) => setFirmness(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Runny</span>
                <span>Hard</span>
              </div>
            </div>
          </div>

          {/* Funkiness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Bouquet</label>
              <span className="text-sm text-orange font-light">
                {funkiness < 33 ? 'Delicate' : funkiness > 66 ? 'Funky' : 'Balanced'}
              </span>
            </div>
            <div className="space-y-3">
              <Slider
                value={[funkiness]}
                onValueChange={(value) => setFunkiness(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Delicate</span>
                <span>Funky</span>
              </div>
            </div>
          </div>

          {/* Meltability Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Stability</label>
              <span className="text-sm text-orange font-light">
                {meltability < 33 ? 'Flakes' : meltability > 66 ? 'Gooey' : 'Medium'}
              </span>
            </div>
            <div className="space-y-3">
              <Slider
                value={[meltability]}
                onValueChange={(value) => setMeltability(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Won't melt</span>
                <span>Melts</span>
              </div>
            </div>
          </div>


        </div>

        <div className="flex justify-center">
          <Button
            className="w-auto gap-2 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 rounded-full px-6 min-h-[44px] touch-manipulation"
            onClick={handleSubmit}
          >
            Reveal that Cheesy Goodness
          </Button>
        </div>
      </div>
    </div>
  );
}
