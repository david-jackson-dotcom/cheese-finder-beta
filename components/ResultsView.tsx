import { Cheese } from '../types/cheese';
import { CheeseCard } from './CheeseCard';
import { Button } from './ui/button';
import { ChevronLeft, Filter } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface ResultsViewProps {
  cheeses: Cheese[];
  onBack: () => void;
  filterDescription: string;
  isA2Search?: boolean;
  onBackToAnimal?: () => void;
  onStartOver?: () => void;
  selectedMilkTypes?: string[];
  isGuidedFlow?: boolean;
  onDiscoverAnother?: () => void;
  substituteCheeseName?: string;
  substituteTolerance?: number;
  onIncreaseRange?: () => void;
}

export function ResultsView({ cheeses, onBack, filterDescription, isA2Search, onBackToAnimal, onStartOver, selectedMilkTypes, isGuidedFlow, onDiscoverAnother, substituteCheeseName, substituteTolerance, onIncreaseRange }: ResultsViewProps) {
  // Determine the appropriate empty state message
  const hasNonCowMilkSelected = selectedMilkTypes && selectedMilkTypes.length > 0;
  const showA2Message = isA2Search && !hasNonCowMilkSelected;
  
  
 {/* ------------------------ Standard page top  ------------------------ */}

  return (
<div className="min-h-screen bg-background">     
	<div className="relative bg-gold px-6 py-4">
	  <div className="absolute left-6 top-4"> 
			<Button
				onClick={onBack}
				className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
				>
				<ChevronLeft className="h-6 w-6" />
				Back
			</Button>
		</div>
	</div>


{/* ------------------------ CONTENT ------------------------ */}

      {/* Count Text */}
      <div className="bg-gold px-6 pt-12 pb-2">
        <p className="text-center text-brown">
          {substituteCheeseName && substituteTolerance !== undefined
            ? `Found ${cheeses.length} ${cheeses.length === 1 ? 'alternative' : 'alternatives'} to ${substituteCheeseName} within ${substituteTolerance} degrees of similarity.`
            : `Found ${cheeses.length} ${cheeses.length === 1 ? 'cheese' : 'cheeses'} you'll love.`}
        </p>
        {substituteCheeseName && substituteTolerance !== undefined && substituteTolerance < 100 && onIncreaseRange && (
          <div className="flex justify-center mt-3">
            <Button
              onClick={onIncreaseRange}
              className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Add 5º
            </Button>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="px-6 py-6 bg-gold">
        <div className="max-w-md mx-auto space-y-6">
          {cheeses.length === 0 ? (
            <div className="text-center py-2 space-y-4">
              {showA2Message ? (
                <>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Maybe cow cheese is just not for you. Try another milk source?
                  </p>
                  <Button onClick={onBackToAnimal || onBack} className="mt-4">
                    Try Different Milk
                  </Button>
                </>
              ) : hasNonCowMilkSelected ? (
                <>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    We couldn't find {selectedMilkTypes.join(', ')} milk cheeses matching your specific dish. Try removing the dish name or exploring different preferences.
                  </p>
                  <Button onClick={onBack} className="mt-4">
                    Adjust Search
                  </Button>
                </>
              ) : (
                <>
                  <h2 className="text-xl">No matches found.</h2>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Try adjusting your preferences to discover more cheeses.
                  </p>
                  <Button onClick={onBack} className="mt-4">
                    Adjust Filters
                  </Button>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cheeses.map((cheese) => (
                  <CheeseCard key={cheese.id} cheese={cheese} />
                ))}
              </div>

              {/* Start Over Button */}
              <div className="pt-2 pb-6 flex justify-center">
                <Button
                  onClick={isGuidedFlow ? (onDiscoverAnother || onBack) : (onStartOver || onBack)}
                  className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
                >
                  Discover Another
                </Button>
              </div>
            </>
          )}
        </div>
{/* ------------------------ END CONTENT ------------------------ */}

      </div>
    </div>
  );
}
