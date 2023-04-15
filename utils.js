const reloadTheCurrentTab = () => {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.reload(tabs[0].id);
    });
}

const consoleToTheCurrentTab = (tab, message) => {
    browser.tabs.sendMessage(tab.id, {
        action: 'injectMessage',
        message
    });
}

// Get the current active tab in the current window
function getCurrentTab(callback) {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        callback(currentTab);
    });
}
