export function generateCheeseShareData(cheese: Cheese): ShareData {
  const milkTypes = cheese.milk.map(m => m.toLowerCase() === 'mixed' ? 'blend' : m.toLowerCase()).join(', ');

console.log('window.location.origin:', window.location.origin); 
  // FIX: Using the explicit path ensures the link works on GitHub Pages even if 
  // pathname resolves to just '/'
  const fullUrl = `${window.location.origin}/cheese-finder-beta/`; 
  console.log('Full URL:', fullUrl); 

  return {
    title: `${cheese.name} Cheese`,
    text: `Check out ${cheese.name} - a ${milkTypes} milk cheese from ${cheese.origin}! ${cheese.description.slice(0, 100)}... 'https://david-jackson-dotcom.github.io/cheese-finder-beta/'`,
    url: fullUrl,
  };
}

export function generateResultsShareData(
  count: number,
  trackName: string,
  filterDescription: string
): ShareData {
    const fullUrl = `${window.location.origin}/cheese-finder-beta/`;
  return {
    title: `Cheese Discovery Results`,
    text: `Look what I discovered with Cheese Finder!`,
    url: fullUrl,
  };
}

/**
 * Check if Web Share API is available
 */
export function canShare(): boolean {
  return typeof navigator !== 'undefined' && !!navigator.share;
}

/**
 * Fallback copy method using document.execCommand (older browsers/environments)
 */
function fallbackCopyToClipboard(text: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (error) {
    document.body.removeChild(textArea);
    return false;
  }
}

/**
 * Share using Web Share API or fallback to clipboard
 */
export async function share(data: ShareData): Promise<{ success: boolean; method: 'native' | 'clipboard' | 'fallback' | 'none'; shareText?: string }> {
  const shareText = `${data.title}\n\n${data.text}\n\n${data.url}`;
  
  // Try native sharing first (mobile)
  if (canShare()) {
    try {
      await navigator.share(data);
      return { success: true, method: 'native' };
    } catch (error) {
      // User cancelled or error occurred
      if (error instanceof Error && error.name === 'AbortError') {
        return { success: false, method: 'none' };
      }
      // Fall through to clipboard
    }
  }

  // Try modern clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(shareText);
      return { success: true, method: 'clipboard' };
    } catch (error) {
      // Fall through to fallback method
    }
  }

  // Try fallback copy method
  const fallbackSuccess = fallbackCopyToClipboard(shareText);
  if (fallbackSuccess) {
    return { success: true, method: 'fallback' };
  }

  // If all methods fail, return the text so UI can display it
  return { success: false, method: 'none', shareText };
}
