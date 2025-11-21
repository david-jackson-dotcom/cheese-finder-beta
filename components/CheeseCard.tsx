import { Cheese } from '../types/cheese';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Milk, MapPin } from 'lucide-react';
import { ShareButton } from './ShareButton';
import { generateCheeseShareData } from '../lib/sharing';

interface CheeseCardProps {
  cheese: Cheese;
}

export function CheeseCard({ cheese }: CheeseCardProps) {
  return (
    <Card className="overflow-hidden border-2">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="leading-tight text-primary text-[32px]">{cheese.name}</CardTitle>
          <div className="flex items-center gap-2 shrink-0">
            {cheese.availability && (
              <Badge 
                variant={
                  cheese.availability === 'Ubiquitous' ? 'default' :
                  cheese.availability === 'Specialty' ? 'secondary' :
                  cheese.availability === 'Artisanal' ? 'outline' :
                  'outline'
                }
              >
                {cheese.availability}
              </Badge>
            )}
            <ShareButton 
              data={generateCheeseShareData(cheese)}
              variant="ghost"
              size="icon"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>{cheese.origin}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Milk className="h-4 w-4" />
            <span className="capitalize">{cheese.milk.map(m => m.toLowerCase() === 'mixed' ? 'Blend' : m).join(', ')}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="leading-relaxed">
          {cheese.description}
        </CardDescription>

        {/* Flavor by Source */}
        {cheese.flavorBySource && (
          <div className="px-4 py-3 bg-butter rounded-xl">
            <p className="text-sm italic text-foreground/80">
              {cheese.flavorBySource.replace(/^[^:]+:\s*/, '')}
            </p>
          </div>
        )}

        {/* Flavor Tags */}
        {cheese.flavor && cheese.flavor.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Flavors</p>
            <div className="flex flex-wrap gap-2">
              {cheese.flavor.map((flavor) => (
                <Badge
                  key={flavor}
                  variant="secondary"
                  className="rounded-full capitalize"
                >
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Uses */}
        {cheese.uses && cheese.uses.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Best For</p>
            <div className="flex flex-wrap gap-2">
              {cheese.uses.map((use) => (
                <Badge
                  key={use}
                  variant="outline"
                  className="rounded-full capitalize border-primary/40"
                >
                  {use}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Inclusions */}
        {cheese.inclusions && cheese.inclusions.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Special Additions</p>
            <div className="flex flex-wrap gap-2">
              {cheese.inclusions.map((inclusion) => (
                <Badge
                  key={inclusion}
                  className="rounded-full capitalize bg-accent text-accent-foreground"
                >
                  {inclusion}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Texture indicators */}
        <div className="pt-2 grid grid-cols-3 gap-3 text-center text-xs">
          <div className="space-y-1">
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange rounded-full transition-all"
                style={{ width: `${cheese.firmness || 50}%` }}
              />
            </div>
            <p className="text-muted-foreground text-sm">
              {(cheese.firmness || 50) < 33 ? 'Gooey!' : (cheese.firmness || 50) > 66 ? 'Waxy' : 'Slices'}
            </p>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange rounded-full transition-all"
                style={{ width: `${cheese.funkiness || 50}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {(cheese.funkiness || 50) < 33 ? 'Not So Funky' : (cheese.funkiness || 50) > 66 ? 'Funky!' : 'Medium Funk'}
            </p>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange rounded-full transition-all"
                style={{ width: `${cheese.meltability || 50}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {(cheese.meltability || 50) < 33 
                ? ((cheese.firmness || 50) < 40 ? 'Stays Put' : 'Crumbles')
                : (cheese.meltability || 50) > 66 ? 'Melty!' : 'Almost Melts'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
