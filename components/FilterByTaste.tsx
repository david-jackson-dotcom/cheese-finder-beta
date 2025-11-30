import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';

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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-amber-100/70 border-b border-amber-200 shadow-md">
        
        {/* Back Button Area */}
        <div className="relative px-6 pt-10 pb-4 md:pt-14">
          <div className="absolute left-6 top-6 md:top-10">
            <Button
              onClick={onBack}
              className="rounded-full gap-1 bg-white text-blue-700 hover:bg-gray-100 border border-blue-700/30 shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
              Back
            </Button>
          </div>
        </div>
        
        {/* Descriptive Text */}
        <div className="px-6 pb-8">
          <p className="text-lg text-center font-serif italic text-gray-600">
            How do you like your cheese? Use the sliders.
          </p>
        </div>
      </div>
      {/* End Header */}
    
      <div className="max-w-md mx-auto space-y-10 px-6 py-12">
        <div className="space-y-12 p-6 rounded-2xl bg-white shadow-xl border border-gray-200">
          
          {/* Firmness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-xl font-bold text-orange-600">Structure</label>
              <span className="text-base text-gray-500 font-light">
                {firmness < 33 ? 'Soft/Runny' : firmness > 66 ? 'Hard/Waxy' : 'Firm'}
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
              <div className="flex justify-between text-xs text-gray-400">
                <span>Soft/Runny</span>
                <span>Hard/Waxy</span>
              </div>
            </div>
          </div>

          {/* Funkiness Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-xl font-bold text-orange-600">Bouquet</label>
              <span className="text-base text-gray-500 font-light">
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
              <div className="flex justify-between text-xs text-gray-400">
                <span>Delicate</span>
                <span>Funky</span>
              </div>
            </div>
          </div>

          {/* Meltability Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <label className="block text-xl font-bold text-orange-600">Stability</label>
              <span className="text-base text-gray-500 font-light">
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
              <div className="flex justify-between text-xs text-gray-400">
                <span>Won't melt</span>
                <span>Melts</span>
              </div>
            </div>
          </div>
          
          {/* Inclusions Selection */}
          <div className="space-y-4 pt-4">
            <label className="block text-xl font-bold text-orange-600">Inclusions</label>
            <p className="text-sm text-gray-500">Select any extra ingredients you'd like in your cheese.</p>
            <div className="flex flex-wrap gap-3">
              {AVAILABLE_INCLUSIONS.map((inclusion) => {
                const isSelected = selectedInclusions.includes(inclusion);
                return (
                  <Badge
                    key={inclusion}
                    variant={isSelected ? 'default' : 'outline'}
                    onClick={() => toggleInclusion(inclusion)}
                    className={`cursor-pointer transition-colors text-sm capitalize font-medium px-4 py-2 ${isSelected ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md' : 'border-gray-300 text-gray-700 hover:bg-orange-50'}`}
                  >
                    {inclusion}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            className="w-auto gap-2 bg-orange-600 text-white hover:bg-orange-700 active:bg-orange-800 rounded-full px-8 py-3 shadow-lg transition duration-300"
            onClick={handleSubmit}
          >
            Reveal that Cheesy Goodness
          </Button>
        </div>
      </div>
    </div>
  );
}