export interface Cheese {
  id: string;
  name: string;
  description: string;
  origin: string;
  milk: string[];
  isA2?: boolean; // True if made with A2 cow's milk
  texture: string;
  flavor: string[];
  uses: string[];
  inclusions?: string[];
  firmness?: number; // 0-100 (soft to hard)
  funkiness?: number; // 0-100 (delicate to funky)
  meltability?: number; // 0-100 (unmeltable to meltable)
  availability?: 'Ubiquitous' | 'Specialty' | 'Artisanal' | 'Obscure';
  flavorBySource?: string; // Flavor notes specific to the milk source
  traditionalUse?: string[]; // Traditional uses like 'pizza', 'tacos', 'dessert', etc.
  [key: string]: any;
}

export interface FilterState {
  firmness: number;
  funkiness: number;
  meltability: number;
  inclusions: string[];
  region: string;
}
