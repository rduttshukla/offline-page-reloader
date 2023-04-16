browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'injectMessage') {
        console.log(request.message);
    } else if (request.action === "reloadCurrentTab") {
        browser.tabs.query({ active: true, currentWindow: true })
            .then((tabs) => {
                browser.tabs.reload(tabs[0].id);
            })
            .catch((error) => {
                console.error('Error reloading the current tab:', error);
            });
    }
});