// Google Analytics tracking helper functions

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-M84CMFKL2D', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      app_version: '1.0', // Track version with all events
    });
  }
};

// Track cheese discovery paths
export const trackDiscoveryPath = (path: 'taste' | 'place' | 'beast' | 'name') => {
  trackEvent('select_discovery_path', 'Discovery', path);
};

// Track filter usage
export const trackFilterUsage = (filterType: string, filterValue: string) => {
  trackEvent('apply_filter', 'Filtering', `${filterType}: ${filterValue}`);
};

// Track cheese view
export const trackCheeseView = (cheeseName: string) => {
  trackEvent('view_cheese', 'Cheese', cheeseName);
};

// Track substitution search
export const trackSubstitutionSearch = (targetCheese: string, resultsCount: number) => {
  trackEvent('substitution_search', 'Search', targetCheese, resultsCount);
};

// Track share action
export const trackShare = (method: string, content?: string) => {
  trackEvent('share', 'Social', `${method}: ${content || 'app'}`);
};

// Track results view
export const trackResultsView = (description: string, count: number) => {
  trackEvent('view_results', 'Results', description, count);
};

// Track guided flow
export const trackGuidedFlow = (usage: string) => {
  trackEvent('guided_flow', 'Navigation', usage);
};

// PWA Installation Tracking
export const trackPWAPromptShown = () => {
  trackEvent('pwa_prompt_shown', 'PWA', 'Install prompt displayed');
};

export const trackPWAInstallAccepted = () => {
  trackEvent('pwa_install_accepted', 'PWA', 'User accepted install');
};

export const trackPWAInstallDeclined = () => {
  trackEvent('pwa_install_declined', 'PWA', 'User declined install');
};

export const trackPWAInstalled = () => {
  trackEvent('pwa_installed', 'PWA', 'App successfully installed');
};

export const trackPWALaunched = (displayMode: string) => {
  trackEvent('pwa_launched', 'PWA', `Launched in ${displayMode} mode`);
};

export const trackPWAStandalone = () => {
  trackEvent('pwa_standalone_launch', 'PWA', 'Launched from home screen');
};