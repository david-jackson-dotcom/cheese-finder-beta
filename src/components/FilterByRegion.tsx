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
            Pick a Place
          </h2>
          <p className="text-brown text-center" style={{ fontFamily: 'Cabin, sans-serif' }}>
            Select a regional cuisine.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {regions.map((region) => (
            <button
              key={region.name}
              onClick={() => onSelectRegion(region.name)}
              className="relative p-5 rounded-2xl border-2 border-primary hover:border-accent hover:bg-accent/10 active:bg-accent/20 transition-all bg-white shadow-md touch-manipulation group"
            >
              <div className="text-center">
                <h3 className="text-2xl text-accent mb-2 group-hover:text-accent/90" style={{ fontFamily: 'Leckerli One, cursive' }}>
                  {region.name}
                </h3>
                <div className="absolute top-4 right-4">
                  <ChevronRight className="h-6 w-6 text-primary group-hover:text-accent" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2" style={{ fontFamily: 'Cabin, sans-serif' }}>
                  {region.count} {region.count === 1 ? 'variety' : 'varieties'} from {region.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}