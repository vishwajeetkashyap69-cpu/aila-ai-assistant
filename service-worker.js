const CACHE_NAME = "aila-v1";

self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    if (
        event.request.url.includes("/ask") ||
        event.request.url.includes("/pending-reminders")
    ) {
        return;
    }
});
