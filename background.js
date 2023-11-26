chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    const cacheUrl = `https://webcache.googleusercontent.com/search?q=cache:${(tab.url)}`;
    chrome.windows.create({ url: cacheUrl });
  }
});
