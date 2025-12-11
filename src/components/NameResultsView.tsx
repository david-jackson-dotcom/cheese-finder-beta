import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { CheeseCard } from './CheeseCard';
import { Cheese } from '../types/cheese';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

interface NameResultsViewProps {
  searchType: 'name' | 'tags';
  nameResult?: {
    cheeses: Cheese[];
    originalQuery: string;
    isExactMatch: boolean;
    isFuzzyMatch: boolean;
  } | null;
  tagsResult?: {
    fullMatches: Cheese[];
    partialMatches: { matchCount: number; cheeses: Cheese[] }[];
    originalQuery: string;
    searchTerms: string[];
  } | null;
  onBack: () => void;
  onReturnHome: () => void;
}

export function NameResultsView({ searchType, nameResult, tagsResult, onBack, onReturnHome }: NameResultsViewProps) {
  const [selectedCheese, setSelectedCheese] = useState<Cheese | null>(null);

  // Handle name search results
  if (searchType === 'name' && nameResult) {
    const { cheeses, originalQuery, isExactMatch, isFuzzyMatch } = nameResult;
    
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gold">
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
        </div>

        {/* Count Text */}
        <div className="bg-gold px-6 pt-2 pb-4">
          <p className="text-center text-brown">
            {cheeses.length === 0 
              ? 'No matches found' 
              : `Found ${cheeses.length} ${cheeses.length === 1 ? 'cheese' : 'cheeses'}`}
          </p>
        </div>

        {/* Results */}
        <div className="px-6 py-6 bg-gold">
          <div className="max-w-md mx-auto space-y-6">
            {cheeses.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="text-xl text-brown" style={{ fontFamily: 'Cabin' }}>
                  No cheese found for "{originalQuery}"
                </p>
                <p className="text-brown/60" style={{ fontFamily: 'Cabin' }}>
                  Try a different name
                </p>
                <Button onClick={onBack} className="mt-4">
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                {/* Fuzzy match notice */}
                {isFuzzyMatch && (
                  <p className="text-center text-brown" style={{ fontFamily: 'Cabin' }}>
                    <span className="capitalize">{originalQuery}</span> not found. Showing closest match.
                  </p>
                )}
                
                <div className="space-y-4">
                  {cheeses.map((cheese) => (
                    <CheeseCard key={cheese.id} cheese={cheese} />
                  ))}
                </div>

                {/* Discover Another Button */}
                <div className="pt-8 pb-6 flex justify-center">
                  <Button
                    onClick={onBack}
                    className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
                  >
                    Discover Another
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Handle tags search results
  if (searchType === 'tags' && tagsResult) {
    const { fullMatches, partialMatches, originalQuery, searchTerms } = tagsResult;
    const totalResults = fullMatches.length + partialMatches.reduce((sum, pm) => sum + pm.cheeses.length, 0);

    return (
      <>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <div className="bg-gold">
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
          </div>

          {/* Count Text */}
          <div className="bg-gold px-6 pt-2 pb-4">
            <p className="text-center text-brown">
              {totalResults === 0 
                ? `No cheeses found matching ${originalQuery}` 
                : `Found ${fullMatches.length} ${fullMatches.length === 1 ? 'cheese' : 'cheeses'} matching ${originalQuery}.`}
            </p>
          </div>

          {/* Results */}
          <div className="px-6 py-6 bg-gold">
            <div className="max-w-md mx-auto space-y-6">
              {totalResults === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <p className="text-xl text-brown" style={{ fontFamily: 'Cabin' }}>
                    No cheeses found matching your description
                  </p>
                  <p className="text-brown/60" style={{ fontFamily: 'Cabin' }}>
                    Try different search terms
                  </p>
                  <Button onClick={onBack} className="mt-4">
                    Try Again
                  </Button>
                </div>
              ) : (
                <>
                  {/* Full Matches */}
                  {fullMatches.length > 0 && (
                    <div className="space-y-4">
                      {fullMatches.map((cheese) => (
                        <CheeseCard key={cheese.id} cheese={cheese} />
                      ))}
                    </div>
                  )}

                  {/* Partial Matches */}
                  {partialMatches.length > 0 && (
                    <div className="space-y-6 mt-8">
                      <h2 className="text-center text-brown" style={{ fontFamily: 'Cabin' }}>
                        Partial matches
                      </h2>
                      
                      {partialMatches.map((group) => (
                        <div key={group.matchCount} className="space-y-2">
                          <p className="text-brown text-sm" style={{ fontFamily: 'Cabin' }}>
                            Found {group.cheeses.length} {group.cheeses.length === 1 ? 'cheese' : 'cheeses'} matching {group.matchCount} of {searchTerms.length} terms
                          </p>
                          {group.matchCount > 1 && (
                            <div className="flex flex-wrap gap-2">
                              {group.cheeses.map((cheese) => (
                                <button
                                  key={cheese.id}
                                  onClick={() => setSelectedCheese(cheese)}
                                  className="text-brown underline hover:text-primary transition-colors"
                                  style={{ fontFamily: 'Cabin' }}
                                >
                                  {cheese.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Discover Another Button */}
                  <div className="pt-8 pb-6 flex justify-center">
                    <Button
                      onClick={onBack}
                      className="rounded-full gap-1 bg-accent text-accent-foreground hover:bg-accent/80"
                    >
                      Discover Another
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Cheese Detail Modal */}
        <Dialog open={!!selectedCheese} onOpenChange={() => setSelectedCheese(null)}>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedCheese?.name}</DialogTitle>
              <DialogDescription className="sr-only">
                Cheese details for {selectedCheese?.name}
              </DialogDescription>
            </DialogHeader>
            {selectedCheese && (
              <div className="space-y-4">
                <CheeseCard cheese={selectedCheese} />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return null;
}
