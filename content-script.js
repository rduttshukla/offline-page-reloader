// Listen for the 'online' event to detect when the browser goes back online
window.addEventListener('online', () => {
    browser.runtime.sendMessage({ action: "reloadCurrentTab" });
});

// Listen for the 'offline' event to detect when the browser goes offline
window.addEventListener('offline', () => {
    console.log('Auto Reload: Browser is now offline')
});