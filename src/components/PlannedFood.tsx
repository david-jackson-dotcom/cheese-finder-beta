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

{/* Standard page top  ------------------------ */}
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
      <div className="max-w-md mx-auto space-y-4 px-6 py-2">
       
{/* ------------ CONTENT ------------ */}
        {/* Name Search Input Block */}
        <div className="space-y-2">
          <p className="text-brown text-center">
              What are you planning?
            </p>
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
              className="w-full h-32 text-base rounded-2xl border-2 border-orange mx-[0px] my-2 placeholder:opacity-50 p-4 resize-none bg-input-background mt-2"
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

		{/* Button */}
		<div className="pt-8 pb-6 flex justify-center">
		  <Button
			onClick={handleContinue}
			disabled={!dishText.trim()}
			className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
		  >
			Suggest Cheeses
		  </Button>
		</div>
      </div>
    </div>
  );
}