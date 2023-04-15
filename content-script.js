browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'injectMessage') {
        console.log(request.message || 'This is a message from the extension');
    }
});

// Listen for the 'online' event to detect when the browser goes back online
window.addEventListener('online', () => {
    reloadTheCurrentTab()
});