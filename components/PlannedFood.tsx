import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

interface PlannedFoodProps {
  onContinue: (dishText: string) => void;
  onBack: () => void;
}

export function PlannedFood({ onContinue, onBack }: PlannedFoodProps) {
  const [dishText, setDishText] = useState('');

  const handleContinue = () => {
    if (dishText.trim()) {
      onContinue(dishText.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <div className="top-0 z-10 bg-background/95 backdrop-blur">
        <div className="relative px-6 py-4">
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Button
              onClick={onBack}
              className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80 mt-4"
            >
              <ChevronLeft className="h-6 w-6" />
              Back
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-2 max-w-md mx-auto">
        <div className="space-y-2">
          <div className="space-y-1">
            <label htmlFor="dish-input" className="text-sm text-muted-foreground m-[0px] p-[0px] text-center block">
              What are you planning?
            </label>
            <textarea
              id="dish-input"
              name="dish-field"
              placeholder="examples: lasagna, tuna sandwich"
              value={dishText}
              onChange={(e) => {
                if (e.target.value.length <= 200) {
                  setDishText(e.target.value);
                }
              }}
              className="w-full h-32 text-base rounded-2xl border-2 border-orange mx-[0px] my-2 placeholder:opacity-50 p-4 resize-none bg-input-background"
              autoFocus
              autoComplete="off"
              autoCorrect="on"
              autoCapitalize="on"
              data-form-type="other"
            />
            <p className="text-xs text-muted-foreground text-right">
              {dishText.length}/200
            </p>
          </div>

          <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">Tip:</span> Describe the dish you're making for tailored cheese recommendations!
            </p>
          </div>
        </div>

        {/* Button with 30px top margin */}
        <div className="pt-[30px]">
          <div className="max-w-2xl mx-auto">
            <Button
              size="sm"
              className="mx-auto block h-14 rounded-full px-8"
              onClick={handleContinue}
              disabled={!dishText.trim()}
            >
              Suggest Cheeses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
