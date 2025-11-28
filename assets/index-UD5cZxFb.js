const swPath = `${import.meta.env.BASE_URL}service-worker.js`;
try {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register(swPath)
                .then((registration) => {
                    console.log('Service Worker registered successfully:', registration.scope);
                    
                    if (location.hostname !== 'localhost') {
                        setInterval(() => { registration.update() }, 60000);
                    }
                    
                    registration.addEventListener("updatefound", () => {
                        const installingWorker = registration.installing;
                        if (installingWorker) {
                            installingWorker.addEventListener("statechange", (event) => {
                                // ✅ Get worker from event, not closure
                                const worker = event.target;
                                if (worker && worker.state === "installed" && navigator.serviceWorker.controller) {
                                    const userAccepted = confirm("New version available! Reload to update?");
                                    if (userAccepted) {
                                        worker.postMessage({ type: "SKIP_WAITING" });
                                        window.location.reload();
                                    } else {
                                        console.log("User declined update. Will prompt again on next visit.");
                                    }
                                }
                            });
                        }
                    });
                })
                .catch(error => {
                    console.error("Service Worker registration failed:", error);
                });
        });
    }
} catch (error) {
    console.error("Critical PWA initialization error:", error);
}
