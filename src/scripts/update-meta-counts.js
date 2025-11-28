#!/usr/bin/env node

/**
 * Pre-build script to automatically update cheese counts in meta tags
 * Counts actual cheeses in database and updates index.html
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read the database file
const databasePath = join(rootDir, 'lib', 'database.ts');
const databaseContent = readFileSync(databasePath, 'utf-8');

// Count cheese entries by matching "{ Cheese_ID: " pattern
const cheeseMatches = databaseContent.match(/\{\s*Cheese_ID:\s*\d+/g);
const cheeseCount = cheeseMatches ? cheeseMatches.length : 0;

console.log(`📊 Found ${cheeseCount} cheeses in database`);

// Read index.html
const indexPath = join(rootDir, 'index.html');
let indexContent = readFileSync(indexPath, 'utf-8');

// Define all the patterns to replace
const replacements = [
  // Title tag
  {
    pattern: /(Discover\s+)\d+(\s+Cheeses from)/,
    replacement: `$1${cheeseCount}$2`,
    name: 'Title tag'
  },
  // Meta description
  {
    pattern: /(Discover\s+)\d+(\s+cheese varieties from)/g,
    replacement: `$1${cheeseCount}$2`,
    name: 'Meta description'
  },
  // Open Graph title
  {
    pattern: /(from\s+)\d+(\s+Global Varieties)/,
    replacement: `$1${cheeseCount}$2`,
    name: 'Open Graph title'
  },
  // JSON-LD structured data
  {
    pattern: /("\s*)\d+(\s+cheese varieties from 60\+ countries")/,
    replacement: `$1${cheeseCount}$2`,
    name: 'JSON-LD description'
  },
  {
    pattern: /("\s*)\d+(\s+cheese varieties from)/,
    replacement: `$1${cheeseCount}$2`,
    name: 'JSON-LD feature list'
  }
];

// Apply all replacements
let updateCount = 0;
replacements.forEach(({ pattern, replacement, name }) => {
  const before = indexContent;
  indexContent = indexContent.replace(pattern, replacement);
  if (before !== indexContent) {
    console.log(`✅ Updated ${name}`);
    updateCount++;
  }
});

// Write updated index.html
writeFileSync(indexPath, indexContent, 'utf-8');

console.log(`\n🎉 Successfully updated ${updateCount} references to cheese count (${cheeseCount} total cheeses)`);
