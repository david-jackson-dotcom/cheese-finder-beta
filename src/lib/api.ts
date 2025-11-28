import { Cheese } from '../types/cheese';
import { getAllCheeses } from './queries';

/**
 * Fetch all cheeses from the relational database
 * This now uses a normalized database structure with separate tables for:
 * - Cheeses (core entities)
 * - Attributes (tag/group library)
 * - Cheese_Attribute_Mapping (many-to-many relationships)
 */
export async function fetchCheeses(): Promise<Cheese[]> {
  return getAllCheeses();
}
