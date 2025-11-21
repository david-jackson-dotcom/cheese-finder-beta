// Relational Database Schema Types

export interface CheeseEntity {
  Cheese_ID: number;
  Name: string;
  Description: string;
  Milk_Type: string;
  Is_A2?: boolean; // True if made with A2 cow's milk
  Origin_Country: string;
  Rind_Type: string;
  Texture: string;
  FlavorBySource?: string;
}

export interface Attribute {
  Attribute_ID: number;
  Attribute_Type: 'Firmness' | 'Flavor' | 'Meltability' | 'Funkiness' | 'Availability' | 'Use' | 'Inclusion';
  Attribute_Value: string;
  NumericValue?: number; // For slider-based attributes (0-100)
}

export interface CheeseAttributeMapping {
  Mapping_ID: number;
  Cheese_ID: number;
  Attribute_ID: number;
}

// Helper interface for enriched cheese data (joins all tables)
export interface EnrichedCheese extends CheeseEntity {
  attributes: {
    firmness?: Attribute[];
    flavor?: Attribute[];
    meltability?: Attribute[];
    funkiness?: Attribute[];
    availability?: Attribute[];
    uses?: Attribute[];
    inclusions?: Attribute[];
  };
}
