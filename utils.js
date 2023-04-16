const consoleToTheCurrentTab = (tab, message) => {
    browser.tabs.sendMessage(tab.id, {
        action: 'injectMessage',
        message
    });
}