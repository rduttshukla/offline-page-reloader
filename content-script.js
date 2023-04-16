console.log('This is a messsage from the extension.')

// Listen for the 'online' event to detect when the browser goes back online
window.addEventListener('online', () => {
    consoleToTheCurrentTab('browser is back online')
    browser.runtime.sendMessage({ action: "reloadCurrentTab" });
});