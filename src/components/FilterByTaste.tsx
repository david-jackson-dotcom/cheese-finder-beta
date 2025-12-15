import { useState } from 'react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
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

export function FilterByTaste({ onApplyFilters, onBack }: FilterByTasteProps) {
  const [firmness, setFirmness] = useState(50);
  const [funkiness, setFunkiness] = useState(50);
  const [meltability, setMeltability] = useState(50);

  // 9-level label system matching App.tsx
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

  const handleSubmit = () => {
    onApplyFilters({
      firmness,
      funkiness,
      meltability,
      inclusions: [],
    });
  };

  // ------------------------ Standard page top  ------------------------
 
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
          <p className="text-brown text-center">How do you like your cheese?</p>
          <p className="text-brown/60 text-center">Slide the knobs.</p>
        </div>
        
        {/* ------------------------ CONTENT ------------------------ */}
        {/* Sliders Block */}
        <div className="space-y-10">
          {/* Firmness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Body</label>
              <span className="text-sm text-orange font-light">
                {getBodyLabel(firmness)}
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
                <span>looser</span>
                <span>firmer</span>
              </div>
            </div>
          </div>

          {/* Funkiness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Bouquet</label>
              <span className="text-sm text-orange font-light">
                {getBouquetLabel(funkiness)}
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
                <span>lighter</span>
                <span>stronger</span>
              </div>
            </div>
          </div>

          {/* Meltability Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-accent font-bold">Meltiness</label>
              <span className="text-sm text-orange font-light">
                {getStabilityLabel(meltability)}
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
                <span>less</span>
                <span>more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button
            className="rounded-full gap-1 bg-dark-orange text-accent-foreground hover:bg-accent/80"
            onClick={handleSubmit}
          >
            Reveal that Cheesy Goodness
          </Button>
        </div>
        
        {/* ------------------------ END CONTENT ------------------------ */}
      </div>
    </div>
    );
}