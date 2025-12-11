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
            Taste Profile
          </h2>
          <p className="text-brown text-center" style={{ fontFamily: 'Cabin, sans-serif' }}>
            How do you like your cheese? Use the sliders.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-8 px-6 py-8 pb-32">
        <div className="space-y-10">
          {/* Firmness Slider */}
          <div className="space-y-4 p-6 rounded-2xl bg-white shadow-md border-2 border-primary">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent text-xl" style={{ fontFamily: 'Leckerli One, cursive' }}>
                Structure
              </label>
              <span className="text-sm text-primary" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {firmness < 33 ? 'Runny' : firmness > 66 ? 'Hard' : 'Firm'}
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
              <div className="flex justify-between text-xs text-muted-foreground" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span>Runny</span>
                <span>Hard</span>
              </div>
            </div>
          </div>

          {/* Funkiness Slider */}
          <div className="space-y-4 p-6 rounded-2xl bg-white shadow-md border-2 border-primary">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent text-xl" style={{ fontFamily: 'Leckerli One, cursive' }}>
                Bouquet
              </label>
              <span className="text-sm text-primary" style={{ fontFamily: 'Cabin, sans-serif' }}>
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
              <div className="flex justify-between text-xs text-muted-foreground" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span>Delicate</span>
                <span>Funky</span>
              </div>
            </div>
          </div>

          {/* Meltability Slider */}
          <div className="space-y-4 p-6 rounded-2xl bg-white shadow-md border-2 border-primary">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent text-xl" style={{ fontFamily: 'Leckerli One, cursive' }}>
                Stability
              </label>
              <span className="text-sm text-primary" style={{ fontFamily: 'Cabin, sans-serif' }}>
                {meltability < 33 ? "Won't melt" : meltability > 66 ? 'Melts' : 'Medium'}
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
              <div className="flex justify-between text-xs text-muted-foreground" style={{ fontFamily: 'Cabin, sans-serif' }}>
                <span>Won't melt</span>
                <span>Melts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            className="gap-2 bg-accent text-white hover:bg-accent/90 active:bg-accent/80 rounded-full px-8 h-14 shadow-lg touch-manipulation"
            style={{ fontFamily: 'Cabin, sans-serif' }}
            onClick={handleSubmit}
          >
            Reveal that Cheesy Goodness
          </Button>
        </div>
      </div>
    </div>
  );
}