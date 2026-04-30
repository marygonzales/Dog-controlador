chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^https?:/.test(tab.url)) {
    const data = await chrome.storage.local.get("blockUntil");
    if (data.blockUntil && Date.now() < data.blockUntil) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["content.js"]
      }).then(() => {
        chrome.tabs.sendMessage(tabId, { type: "START", until: data.blockUntil });
      }).catch(() => {});
    }
  }
});