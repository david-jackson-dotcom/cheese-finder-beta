import { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CHEESES } from '../lib/database';

interface FilterByRegionProps {
  onSelectRegion: (region: string) => void;
  onBack: () => void;
}

// Map of region/country descriptions for display
const REGION_DESCRIPTIONS: Record<string, string> = {
  'France': 'Brie, Camembert, Roquefort, Comté, Beaufort, Époisses, and countless regional treasures',
  'United States': 'American cheddar, Monterey Jack, Colby, artisan blues, and modern innovations',
  'Italy': 'Parmigiano Reggiano, Mozzarella di Bufala, Gorgonzola, Pecorino, Taleggio, Fontina, Donkey cheese',
  'Mexico': 'Queso Oaxaca, Cotija, Queso Fresco, Chihuahua, Panela, Asadero',
  'United Kingdom': 'Cheddar, Stilton, Wensleydale, Red Leicester, and British classics',
  'Middle East': 'Labneh, Akkawi, Halloumi, Nabulsi, Kashkaval, regional specialties',
  'Spain': 'Manchego, Idiazábal, Cabrales, Drunken Goat, Garrotxa',
  'Netherlands': 'Gouda, Edam, and Dutch cheese traditions',
  'Greece': 'Feta, Kasseri, authentic Mediterranean cheeses',
  'Switzerland': 'Gruyère, Emmental, Appenzeller, Raclette, Alpine perfection',
  'Germany': 'Cambozola, Limburger, Quark, German specialty cheeses',
  'Denmark': 'Havarti, Danish Blue, Nordic cheese traditions',
  'Argentina': 'Reggianito, Provoleta, Sardo, South American favorites',
  'Canada': 'Oka, cheese curds, Quebec artisan cheeses',
  'Brazil': 'Queijo Minas, Queijo Coalho, Requeijão',
  'India': 'Paneer, Chhena, Kalari, Bandel, Surati',
  'Japan': 'Sakura, Tokachi Camembert, refined Japanese styles',
  'Mongolia': 'Byaslag, Aaruul, traditional nomadic cheeses',
  'South Africa': 'Huguenot, Klein River Gruyere, Bokmakiri',
  'Norway': 'Jarlsberg, Sami reindeer cheese, Nordic specialties',
  'Finland': 'Bread Cheese (Juustoleipä), Reindeer cheese, Lapland varieties',
  'Russia': 'Reindeer cheese, Elk cheese, Mare cheese',
  'Sweden': 'Moose cheese, Reindeer varieties, ultra-rare productions',
  'Serbia': 'Pule - world\'s most expensive donkey cheese',
  'Kazakhstan': 'Traditional horse milk cheeses, nomadic traditions',
  'Kyrgyzstan': 'Kurut, horse milk cheese, Central Asian specialties',
  'South Korea': 'Korean mozzarella, ultra-stretchy street food cheese',
  'Nepal': 'Chhurpi, Himalayan yak cheese',
  'Tibet': 'Traditional yak cheese, high-altitude varieties',
  'United Arab Emirates': 'Caravane, Camelbert, modern camel cheeses',
  'Saudi Arabia': 'Bedouin fresh camel cheese',
  'Mauritania': 'Traditional Saharan camel cheese',
  'Somalia': 'East African camel cheese varieties',
  'Australia': 'Aged camel cheddar, modern Australian innovations',
  'Egypt': 'Karish, Domiati, ancient cheese traditions',
  'Ethiopia': 'Tesmi, Zebu cheese, East African varieties',
  'South America': 'Regional frying cheeses and specialties',
  'West Africa': 'Wagashi, traditional fresh cheeses',
  'Colombia': 'Queso Paisa, Andean cheese varieties',
  'Venezuela': 'Queso de Mano, hand-kneaded traditions',
  'Peru': 'Queso Mantecoso, butter cheese',
  'Chile': 'Chanco, Chilean specialties',
  'Sri Lanka': 'Buffalo curd, tropical cheese traditions',
  'Croatia': 'Adriatic donkey cheese',
};

export function FilterByRegion({ onSelectRegion, onBack }: FilterByRegionProps) {
  // Dynamically generate regions from actual database cheeses
  const regions = useMemo(() => {
    // Count cheeses by origin country
    const counts: Record<string, number> = {};
    const cheeseNames: Record<string, string[]> = {};
    
    CHEESES.forEach(cheese => {
      const country = cheese.Origin_Country;
      counts[country] = (counts[country] || 0) + 1;
      if (!cheeseNames[country]) {
        cheeseNames[country] = [];
      }
      cheeseNames[country].push(cheese.Name);
    });

    // Build region list with counts and descriptions
    return Object.keys(counts)
      .map(country => ({
        name: country,
        count: counts[country],
        description: REGION_DESCRIPTIONS[country] || `${counts[country]} varieties from ${country}`,
        cheeses: cheeseNames[country]
      }))
      .sort((a, b) => {
        // Sort alphabetically A-Z
        return a.name.localeCompare(b.name);
      });
  }, []);

  return (
    
{/* PLACE Page container */}
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
      <p className="text-brown text-center">Select a regional cuisine.</p>
    </div>
  </div>
  {/* END Header */}
  
  {/* Content */}
      <div className="max-w-md mx-auto space-y-8 px-6 py-8">
        <div className="grid gap-3">
          {regions.map((region) => (
            <button
              key={region.name}
              onClick={() => onSelectRegion(region.name)}
              className="relative p-5 rounded-2xl border-3 border-orange hover:border-primary hover:bg-primary/5 active:bg-primary/10 transition-all bg-card touch-manipulation"
            >
              <div className="relative">
                <h3 className="text-[36px] text-dark-orange text-center mb-1">{region.name}</h3>
                <ChevronRight className="text-dark-orange absolute right-0" style={{ height: '3.4ex', width: '3.4ex', bottom: '1ex' }} />
              </div>
              <p className="text-sm text-muted-foreground text-center">{region.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
