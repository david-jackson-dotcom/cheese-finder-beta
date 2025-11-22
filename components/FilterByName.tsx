import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { NameResultsView } from './NameResultsView';
import { searchCheesesByName, searchCheesesByTags } from '../lib/queries';

interface FilterByNameProps {
  onBack: () => void;
}

type SearchType = 'name' | 'tags' | null;

export function FilterByName({ onBack }: FilterByNameProps) {
  const [showResults, setShowResults] = useState(false);
  const [searchType, setSearchType] = useState<SearchType>(null);
  const [nameResult, setNameResult] = useState<ReturnType<typeof searchCheesesByName> | null>(null);
  const [tagsResult, setTagsResult] = useState<ReturnType<typeof searchCheesesByTags> | null>(null);
  const [nameQuery, setNameQuery] = useState('');
  const [tagsQuery, setTagsQuery] = useState('');

  const handleNameSearch = () => {
    if (nameQuery.trim()) {
      const result = searchCheesesByName(nameQuery);
      setNameResult(result);
      setSearchType('name');
      setShowResults(true);
    }
  };

  const handleTagsSearch = () => {
    if (tagsQuery.trim()) {
      const result = searchCheesesByTags(tagsQuery);
      setTagsResult(result);
      setSearchType('tags');
      setShowResults(true);
    }
  };

  const handleNameQueryChange = (value: string) => {
    setNameQuery(value);
    if (value.trim()) {
      setTagsQuery('');
    }
  };

  const handleTagsQueryChange = (value: string) => {
    setTagsQuery(value);
    if (value.trim()) {
      setNameQuery('');
    }
  };

  if (showResults) {
    return (
      <NameResultsView
        searchType={searchType!}
        nameResult={nameResult}
        tagsResult={tagsResult}
        onBack={() => setShowResults(false)}
        onReturnHome={onBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        <div className="px-6 pb-4">
          <p className="text-brown text-center">Name a cheese and discover its character.</p>
        </div>
      </div>
      <div className="max-w-md mx-auto space-y-8 px-6 py-8">

        {/* Name Search Input */}
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={nameQuery}
              onChange={(e) => handleNameQueryChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !tagsQuery.trim() && handleNameSearch()}
              placeholder="example: mozzarella"
              className="w-full p-4 pr-4 border-2 border-primary/30 rounded-2xl bg-input-background focus:outline-none focus:border-primary transition-colors placeholder:text-brown/40 text-base"
              style={{ fontFamily: 'Orienta' }}
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleNameSearch}
              disabled={!nameQuery.trim() || !!tagsQuery.trim()}
              className="mt-4"
            >
              Find My Cheese
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="text-center">
          <h1 className="text-magenta" style={{ fontFamily: 'Leckerli One', fontSize: '2rem' }}>
            — or —
          </h1>
        </div>

        {/* Tags Search Section */}
        <div className="space-y-6">
          <div className="px-6 pb-4">
            <p className="text-brown text-center">Describe a cheese and discover its name.</p>
          </div>

          <div className="relative">
            <input
              type="text"
              value={tagsQuery}
              onChange={(e) => handleTagsQueryChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !nameQuery.trim() && handleTagsSearch()}
              placeholder="example: smoked spanish goat"
              className="w-full p-4 pr-4 border-2 border-primary/30 rounded-2xl bg-input-background focus:outline-none focus:border-primary transition-colors placeholder:text-brown/40 text-base"
              style={{ fontFamily: 'Orienta' }}
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleTagsSearch}
              disabled={!tagsQuery.trim() || !!nameQuery.trim()}
              className="mt-4"
            >
              Name My Cheese
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
