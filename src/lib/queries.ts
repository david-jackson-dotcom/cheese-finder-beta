import { CHEESES, ATTRIBUTES, CHEESE_ATTRIBUTE_MAPPINGS } from './database';
import { EnrichedCheese, Attribute } from '../types/database';
import { Cheese } from '../types/cheese';

/**
 * Get attributes for a specific cheese
 */
export function getCheeseAttributes(cheeseId: number): {
  firmness?: Attribute[];
  flavor?: Attribute[];
  meltability?: Attribute[];
  funkiness?: Attribute[];
  availability?: Attribute[];
  uses?: Attribute[];
  inclusions?: Attribute[];
} {
  // Get all attribute IDs for this cheese
  const attributeIds = CHEESE_ATTRIBUTE_MAPPINGS
    .filter(mapping => mapping.Cheese_ID === cheeseId)
    .map(mapping => mapping.Attribute_ID);
  
  // Get the actual attributes
  const attributes = ATTRIBUTES.filter(attr => attributeIds.includes(attr.Attribute_ID));
  
  // Group by type
  return {
    firmness: attributes.filter(a => a.Attribute_Type === 'Firmness'),
    flavor: attributes.filter(a => a.Attribute_Type === 'Flavor'),
    meltability: attributes.filter(a => a.Attribute_Type === 'Meltability'),
    funkiness: attributes.filter(a => a.Attribute_Type === 'Funkiness'),
    availability: attributes.filter(a => a.Attribute_Type === 'Availability'),
    uses: attributes.filter(a => a.Attribute_Type === 'Use'),
    inclusions: attributes.filter(a => a.Attribute_Type === 'Inclusion'),
  };
}

/**
 * Get enriched cheese data (joins all tables)
 */
export function getEnrichedCheese(cheeseId: number): EnrichedCheese | null {
  const cheese = CHEESES.find(c => c.Cheese_ID === cheeseId);
  if (!cheese) return null;
  
  return {
    ...cheese,
    attributes: getCheeseAttributes(cheeseId),
  };
}

/**
 * Get all enriched cheeses
 */
export function getAllEnrichedCheeses(): EnrichedCheese[] {
  return CHEESES.map(cheese => ({
    ...cheese,
    attributes: getCheeseAttributes(cheese.Cheese_ID),
  }));
}

/**
 * Convert enriched cheese to legacy Cheese format for backward compatibility
 */
export function enrichedCheeseToLegacy(enriched: EnrichedCheese): Cheese {
  const attrs = enriched.attributes;
  
  // Get numeric values for sliders
  const firmness = attrs.firmness?.[0]?.NumericValue || 50;
  const meltability = attrs.meltability?.[0]?.NumericValue || 50;
  const funkiness = attrs.funkiness?.[0]?.NumericValue || 50;
  
  // Build milk array
  // If it's an A2 cow cheese, use "a2 cow" instead of "cow"
  const baseMilkType = enriched.Milk_Type.toLowerCase();
  const milkTypes = (enriched.Is_A2 === true && baseMilkType === 'cow') 
    ? ['a2 cow'] 
    : [baseMilkType];
  
  return {
    id: enriched.Cheese_ID.toString(),
    name: enriched.Name,
    description: enriched.Description,
    origin: enriched.Origin_Country,
    milk: milkTypes,
    isA2: enriched.Is_A2 || false,
    texture: enriched.Texture,
    flavor: attrs.flavor?.map(f => f.Attribute_Value.toLowerCase()) || [],
    uses: attrs.uses?.map(u => u.Attribute_Value.toLowerCase()) || [],
    inclusions: attrs.inclusions?.map(i => i.Attribute_Value.toLowerCase()) || [],
    firmness,
    funkiness,
    meltability,
    availability: attrs.availability?.[0]?.Attribute_Value as 'Ubiquitous' | 'Specialty' | 'Artisanal' | 'Obscure' | undefined,
    flavorBySource: enriched.FlavorBySource,
  };
}

/**
 * Query cheeses by flavor profile (Tag Grouping)
 * Example: Find all "Nutty" cheeses
 */
export function findCheesesByFlavor(flavorValue: string): Cheese[] {
  const flavorAttr = ATTRIBUTES.find(
    a => a.Attribute_Type === 'Flavor' && 
    a.Attribute_Value.toLowerCase() === flavorValue.toLowerCase()
  );
  
  if (!flavorAttr) return [];
  
  const cheeseIds = CHEESE_ATTRIBUTE_MAPPINGS
    .filter(m => m.Attribute_ID === flavorAttr.Attribute_ID)
    .map(m => m.Cheese_ID);
  
  return cheeseIds
    .map(id => getEnrichedCheese(id))
    .filter((c): c is EnrichedCheese => c !== null)
    .map(enrichedCheeseToLegacy);
}

/**
 * Query cheeses by region
 */
export function findCheesesByRegion(region: string): Cheese[] {
  const regionalCheeses = CHEESES.filter(
    c => c.Origin_Country.toLowerCase() === region.toLowerCase()
  );
  
  return regionalCheeses
    .map(c => getEnrichedCheese(c.Cheese_ID))
    .filter((c): c is EnrichedCheese => c !== null)
    .map(enrichedCheeseToLegacy);
}

/**
 * Query cheeses by functional use
 * Example: Find all cheeses suitable for fondue
 */
export function findCheesesByUse(useValue: string): Cheese[] {
  const useAttr = ATTRIBUTES.find(
    a => a.Attribute_Type === 'Use' && 
    a.Attribute_Value.toLowerCase() === useValue.toLowerCase()
  );
  
  if (!useAttr) return [];
  
  const cheeseIds = CHEESE_ATTRIBUTE_MAPPINGS
    .filter(m => m.Attribute_ID === useAttr.Attribute_ID)
    .map(m => m.Cheese_ID);
  
  return cheeseIds
    .map(id => getEnrichedCheese(id))
    .filter((c): c is EnrichedCheese => c !== null)
    .map(enrichedCheeseToLegacy);
}

/**
 * Normalize string by removing diacritical marks (accents)
 * Example: "Époisses" -> "epoisses"
 */
function normalizeDiacritics(str: string): string {
  return str
    .normalize('NFD') // Canonical Decomposition
    .replace(/[\u0300-\u036f]/g, '') // Remove combining diacritical marks
    .toLowerCase();
}

/**
 * Calculate Levenshtein distance between two strings (fuzzy matching)
 */
function levenshteinDistance(str1: string, str2: string): number {
  const s1 = normalizeDiacritics(str1);
  const s2 = normalizeDiacritics(str2);
  const len1 = s1.length;
  const len2 = s2.length;
  
  const matrix: number[][] = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  
  return matrix[len1][len2];
}

/**
 * Search cheeses by name with fuzzy matching
 * Returns all matching cheeses sorted by funkiness (ascending)
 */
export function searchCheesesByName(query: string): {
  cheeses: Cheese[];
  originalQuery: string;
  isExactMatch: boolean;
  isFuzzyMatch: boolean;
} {
  if (!query.trim()) {
    return {
      cheeses: [],
      originalQuery: query,
      isExactMatch: false,
      isFuzzyMatch: false,
    };
  }
  
  const searchTerm = normalizeDiacritics(query.trim());
  
  // First try to find all partial matches (contains)
  const partialMatches = CHEESES.filter(
    c => normalizeDiacritics(c.Name).includes(searchTerm)
  );
  
  if (partialMatches.length > 0) {
    // Sort by funkiness (ascending)
    const sortedMatches = partialMatches
      .map(c => getEnrichedCheese(c.Cheese_ID))
      .filter((c): c is EnrichedCheese => c !== null)
      .sort((a, b) => {
        const aFunkiness = a.attributes.funkiness?.[0]?.NumericValue || 50;
        const bFunkiness = b.attributes.funkiness?.[0]?.NumericValue || 50;
        return aFunkiness - bFunkiness;
      })
      .map(enrichedCheeseToLegacy);
    
    return {
      cheeses: sortedMatches,
      originalQuery: query,
      isExactMatch: partialMatches.some(c => normalizeDiacritics(c.Name) === searchTerm),
      isFuzzyMatch: false,
    };
  }
  
  // No partial matches found, try fuzzy match using Levenshtein distance
  let bestMatch = CHEESES[0];
  let bestDistance = levenshteinDistance(searchTerm, bestMatch.Name);
  
  for (const cheese of CHEESES) {
    const distance = levenshteinDistance(searchTerm, cheese.Name);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = cheese;
    }
  }
  
  // Only return fuzzy match if it's reasonably close (within 40% of query length)
  const maxDistance = Math.ceil(searchTerm.length * 0.4);
  if (bestDistance <= maxDistance) {
    const enriched = getEnrichedCheese(bestMatch.Cheese_ID);
    return {
      cheeses: enriched ? [enrichedCheeseToLegacy(enriched)] : [],
      originalQuery: query,
      isExactMatch: false,
      isFuzzyMatch: true,
    };
  }
  
  // No good match found
  return {
    cheeses: [],
    originalQuery: query,
    isExactMatch: false,
    isFuzzyMatch: false,
  };
}

/**
 * Comparative searching (Relative Comparison)
 * Find cheeses within a firmness range and funkiness range
 */
export function findCheesesByComparison(filters: {
  firmnessMin?: number;
  firmnessMax?: number;
  funkinessMin?: number;
  funkinessMax?: number;
  meltabilityMin?: number;
  meltabilityMax?: number;
}): Cheese[] {
  const allCheeses = getAllEnrichedCheeses();
  
  return allCheeses
    .filter(cheese => {
      const firmness = cheese.attributes.firmness?.[0]?.NumericValue || 50;
      const funkiness = cheese.attributes.funkiness?.[0]?.NumericValue || 50;
      const meltability = cheese.attributes.meltability?.[0]?.NumericValue || 50;
      
      const firmnessMatch = 
        (filters.firmnessMin === undefined || firmness >= filters.firmnessMin) &&
        (filters.firmnessMax === undefined || firmness <= filters.firmnessMax);
      
      const funkinessMatch =
        (filters.funkinessMin === undefined || funkiness >= filters.funkinessMin) &&
        (filters.funkinessMax === undefined || funkiness <= filters.funkinessMax);
      
      const meltabilityMatch =
        (filters.meltabilityMin === undefined || meltability >= filters.meltabilityMin) &&
        (filters.meltabilityMax === undefined || meltability <= filters.meltabilityMax);
      
      return firmnessMatch && funkinessMatch && meltabilityMatch;
    })
    .map(enrichedCheeseToLegacy);
}

/**
 * Advanced multi-criteria search
 * Allows fuzzy boundaries and multiple tags
 */
export function advancedCheeseSearch(criteria: {
  firmness?: number;
  funkiness?: number;
  meltability?: number;
  tolerance?: number; // How close the match needs to be (default 25)
  flavors?: string[];
  uses?: string[];
  inclusions?: string[];
  availability?: string;
  origin?: string;
}): Cheese[] {
  const tolerance = criteria.tolerance || 25;
  const allCheeses = getAllEnrichedCheeses();
  
  const filtered = allCheeses.filter(cheese => {
    // Firmness check
    if (criteria.firmness !== undefined) {
      const firmness = cheese.attributes.firmness?.[0]?.NumericValue || 50;
      if (Math.abs(firmness - criteria.firmness) > tolerance) return false;
    }
    
    // Funkiness check
    if (criteria.funkiness !== undefined) {
      const funkiness = cheese.attributes.funkiness?.[0]?.NumericValue || 50;
      if (Math.abs(funkiness - criteria.funkiness) > tolerance) return false;
    }
    
    // Meltability check
    if (criteria.meltability !== undefined) {
      const meltability = cheese.attributes.meltability?.[0]?.NumericValue || 50;
      if (Math.abs(meltability - criteria.meltability) > tolerance) return false;
    }
    
    // Flavor check (must have at least one matching flavor)
    if (criteria.flavors && criteria.flavors.length > 0) {
      const cheeseFlavors = cheese.attributes.flavor?.map(f => f.Attribute_Value.toLowerCase()) || [];
      const hasMatchingFlavor = criteria.flavors.some(f => 
        cheeseFlavors.includes(f.toLowerCase())
      );
      if (!hasMatchingFlavor) return false;
    }
    
    // Use check
    if (criteria.uses && criteria.uses.length > 0) {
      const cheeseUses = cheese.attributes.uses?.map(u => u.Attribute_Value.toLowerCase()) || [];
      const hasMatchingUse = criteria.uses.some(u => 
        cheeseUses.includes(u.toLowerCase())
      );
      if (!hasMatchingUse) return false;
    }
    
    // Inclusion check
    if (criteria.inclusions && criteria.inclusions.length > 0) {
      const cheeseInclusions = cheese.attributes.inclusions?.map(i => i.Attribute_Value.toLowerCase()) || [];
      const hasMatchingInclusion = criteria.inclusions.some(inc => 
        cheeseInclusions.includes(inc.toLowerCase())
      );
      if (!hasMatchingInclusion) return false;
    }
    
    // Availability check
    if (criteria.availability) {
      const cheeseAvailability = cheese.attributes.availability?.[0]?.Attribute_Value;
      if (cheeseAvailability?.toLowerCase() !== criteria.availability.toLowerCase()) return false;
    }
    
    // Origin check
    if (criteria.origin) {
      if (cheese.Origin_Country.toLowerCase() !== criteria.origin.toLowerCase()) return false;
    }
    
    return true;
  });
  
  // Sort by best match (closest to all three slider parameters)
  const sorted = filtered.sort((a, b) => {
    let aScore = 0;
    let bScore = 0;
    
    if (criteria.firmness !== undefined) {
      const aFirmness = a.attributes.firmness?.[0]?.NumericValue || 50;
      const bFirmness = b.attributes.firmness?.[0]?.NumericValue || 50;
      aScore += Math.abs(aFirmness - criteria.firmness);
      bScore += Math.abs(bFirmness - criteria.firmness);
    }
    
    if (criteria.funkiness !== undefined) {
      const aFunkiness = a.attributes.funkiness?.[0]?.NumericValue || 50;
      const bFunkiness = b.attributes.funkiness?.[0]?.NumericValue || 50;
      aScore += Math.abs(aFunkiness - criteria.funkiness);
      bScore += Math.abs(bFunkiness - criteria.funkiness);
    }
    
    if (criteria.meltability !== undefined) {
      const aMeltability = a.attributes.meltability?.[0]?.NumericValue || 50;
      const bMeltability = b.attributes.meltability?.[0]?.NumericValue || 50;
      aScore += Math.abs(aMeltability - criteria.meltability);
      bScore += Math.abs(bMeltability - criteria.meltability);
    }
    
    return aScore - bScore;
  });
  
  return sorted.map(enrichedCheeseToLegacy);
}

/**
 * Get all unique regions
 */
export function getAllRegions(): string[] {
  const regions = new Set(CHEESES.map(c => c.Origin_Country));
  return Array.from(regions).sort();
}

/**
 * Get all cheeses (backward compatibility)
 */
export function getAllCheeses(): Cheese[] {
  return getAllEnrichedCheeses().map(enrichedCheeseToLegacy);
}

/**
 * Search cheeses by tags/description with scoring
 * Returns grouped results by match count
 */
export function searchCheesesByTags(query: string): {
  fullMatches: Cheese[];
  partialMatches: { matchCount: number; cheeses: Cheese[] }[];
  originalQuery: string;
  searchTerms: string[];
} {
  if (!query.trim()) {
    return {
      fullMatches: [],
      partialMatches: [],
      originalQuery: query,
      searchTerms: [],
    };
  }

  // Split query into terms and normalize
  const searchTerms = query.trim().toLowerCase().split(/\s+/);
  const allCheeses = getAllEnrichedCheeses();

  // Score each cheese based on matching terms
  const scoredCheeses = allCheeses.map(enriched => {
    const cheese = enrichedCheeseToLegacy(enriched);
    let matchedTerms = new Set<string>();

    // Searchable fields
    const searchableText = [
      cheese.description.toLowerCase(),
      cheese.origin.toLowerCase(),
      cheese.texture.toLowerCase(),
      ...cheese.milk.map(m => m.toLowerCase()),
      ...cheese.flavor.map(f => f.toLowerCase()),
      ...cheese.uses.map(u => u.toLowerCase()),
      ...(cheese.inclusions || []).map(i => i.toLowerCase()),
      ...(cheese.flavorBySource ? [cheese.flavorBySource.toLowerCase()] : []),
    ].join(' ');

    // Check each term
    searchTerms.forEach(term => {
      if (searchableText.includes(term)) {
        matchedTerms.add(term);
      }
    });

    return {
      cheese,
      matchCount: matchedTerms.size,
    };
  });

  // Filter out non-matches
  const matches = scoredCheeses.filter(sc => sc.matchCount > 0);

  // Separate full matches from partial matches
  const fullMatches = matches
    .filter(sc => sc.matchCount === searchTerms.length)
    .map(sc => sc.cheese);

  // Group partial matches by match count (descending)
  const partialMatchesMap = new Map<number, Cheese[]>();
  matches
    .filter(sc => sc.matchCount < searchTerms.length)
    .forEach(sc => {
      const existing = partialMatchesMap.get(sc.matchCount) || [];
      existing.push(sc.cheese);
      partialMatchesMap.set(sc.matchCount, existing);
    });

  // Convert to sorted array
  const partialMatches = Array.from(partialMatchesMap.entries())
    .map(([matchCount, cheeses]) => ({ matchCount, cheeses }))
    .sort((a, b) => b.matchCount - a.matchCount);

  return {
    fullMatches,
    partialMatches,
    originalQuery: query,
    searchTerms,
  };
}
