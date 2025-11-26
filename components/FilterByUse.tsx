import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

interface FilterByUseProps {
  onSelectUse: (useCase: string) => void;
  onBack: () => void;
  onSkip: () => void;
}

export function FilterByUse({ onSelectUse, onBack, onSkip }: FilterByUseProps) {
  const [selectedUse, setSelectedUse] = useState<string | null>(null);

  const useCases = [
    {
      value: 'snacking',
      label: 'Snacking',
      description: 'On crackers, I guess. Or maybe just use my fingers. Don\'t judge me!',
    },
    {
      value: 'appetizer',
      label: 'Appetizer or Dessert',
      description: 'Paired with sips',
    },
    {
      value: 'entree',
      label: 'Entrée',
      description: 'Cheese as the star of the meal',
    },
    {
      value: 'cooking',
      label: 'Cooking',
      description: 'As an ingredient',
    },
    {
      value: 'topping',
      label: 'Combination',
      description: 'As a topping on pizza, salad, tacos, and what not',
    },
  ];

  const handleSelect = (useCase: string) => {
    // Immediately proceed to next screen when a use case is selected
    onSelectUse(useCase);
  };

  return (
    
{/* PLANS Page container */}
<div className="min-h-screen bg-gold">
  {/* Header */}
  <div className="bg-gold">
    <div className="px-6 py-14 flex items-center justify-start">
      <div>
        <Button
         onClick={onBack} className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80">
          <ChevronLeft className="h-6 w-6" />
          Back
        </Button>
      </div>
    </div>
    <div className="px-6 pb-4">
      <p className="text-brown text-center">What are you planning?</p>
    </div>
  </div>
  {/* END Header */}
  
  {/* Content */}
  <div className="max-w-md mx-auto space-y-8 px-6 py-8">
    
      //<div className="px-6 py-8 space-y-4 max-w-md mx-auto pb-32">
        {/* Use case options */}
        {useCases.map((useCase) => (
          <button
            key={useCase.value}
            onClick={() => handleSelect(useCase.value)}
            className="w-full p-6 rounded-2xl border-2 transition-all text-left border-orange bg-card hover:border-primary hover:bg-primary/5"
          >
            <div className="space-y-1">
              <h3 className="text-xl text-primary text-[24px]">{useCase.label}</h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gold flex justify-center gap-4">
        <Button
          size="lg"
          className="rounded-full px-6 h-14"
          onClick={() => onSelectUse('all')}
        >
          Guide Me More
        </Button>
        <Button
          size="lg"
          className="rounded-full px-6 h-14"
          onClick={onSkip}
        >
          Show All of Them!
        </Button>
      </div>
    </div>
  );
}
