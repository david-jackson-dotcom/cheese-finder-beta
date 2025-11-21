import { CHEESES } from './database';

/**
 * Updates the document title and meta tags dynamically based on the current cheese database size
 */
 export function updateSEOMetaTags() {
  const cheeseCount = CHEESES.length;
  
  // Update title
  document.title = `Hundreds of cheeses. Four paths of discovery. Filter by taste preferences, regional origin, dietary restrictions, or search by name.`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      `Discover ${cheeseCount} cheese varieties from 60+ countries and 17 milk sources including A2, goat, sheep, buffalo, yak, and camel. Filter by form, melt, funk, and cuisine. Smart substitution finder & global database.`
    );
  }
  
  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute(
      'content',
      `Cheese Finder - Discover Your Perfect Cheese from ${cheeseCount} Global Varieties`
    );
  }
  
  // Update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute(
      'content',
      `Discover ${cheeseCount} cheese varieties from 60+ countries and 17 milk sources. Filter by form, melt, funk, and cuisine. Smart substitution finder & global database.`
    );
  }
  
  // Update Twitter description
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute(
      'content',
      `Discover ${cheeseCount} cheese varieties from 60+ countries and 17 milk sources including A2, goat, sheep, buffalo, yak, and camel. Filter by form, melt, funk, and cuisine.`
    );
  }
  
  // Update JSON-LD structured data
  const structuredDataScript = document.querySelector('script[type="application/ld+json"]');
  if (structuredDataScript) {
    try {
      const structuredData = JSON.parse(structuredDataScript.textContent || '{}');
      structuredData.description = `Discover ${cheeseCount} cheese varieties from 60+ countries and 17 milk sources including A2, goat, sheep, buffalo, yak, and camel. Filter by form, melt, funk, and cuisine. Smart substitution finder & global database.`;
      structuredData.featureList[0] = `${cheeseCount} cheese varieties from 60+ countries`;
      structuredDataScript.textContent = JSON.stringify(structuredData, null, 2);
    } catch (error) {
      console.warn('Failed to update structured data:', error);
    }
  }
}

/**
 * Gets the current cheese count from the database
 */
export function getCheeseCount(): number {
  return CHEESES.length;
}
