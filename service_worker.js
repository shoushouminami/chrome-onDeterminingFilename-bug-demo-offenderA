chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    if (downloadItem.byExtensionId !== chrome.runtime.id) {
        return;
    }
});
