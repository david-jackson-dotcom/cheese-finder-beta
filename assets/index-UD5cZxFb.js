// This defines the Service Worker path once, using the repository name (e.g., /cheese-finder-beta/)
// Vite injects the correct base path via import.meta.env.BASE_URL.
const swPath = `${import.meta.env.BASE_URL}service-worker.js`;

try {
    // Check if the browser supports Service Workers
    if ('serviceWorker' in navigator) {
        // Wait for the entire page to load before registering
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register(swPath)
                .then((registration) => {
                    console.log('Service Worker registered successfully:', registration.scope);
                    
                    // BEST PRACTICE: Only check for updates every 60s in production
                    if (location.hostname !== 'localhost') {
                        setInterval(() => { registration.update() }, 60000);
                    }
                    
                    // Logic to handle update detection
                    registration.addEventListener("updatefound", () => {
                        const installingWorker = registration.installing;
                        if (installingWorker) {
                            installingWorker.addEventListener("statechange", () => {
                                // Check if installation is complete and the old worker is still controlling the page
                                if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                                    if (confirm("New version available! Reload to update?")) {
                                        // Send message to the new worker to skip the waiting state
                                        installingWorker.postMessage({ type: "SKIP_WAITING" });
                                        window.location.reload();
                                    }
                                }
                            });
                        }
                    });
                })
                .catch(error => {
                    // This catches asynchronous registration errors (e.g., file not found, network issues)
                    console.error("Service Worker registration failed:", error);
                });
        });
    }
} catch (error) {
    // This catches synchronous errors (e.g., ReferenceError for a missing variable)
    console.error("Critical PWA initialization error:", error);
}
