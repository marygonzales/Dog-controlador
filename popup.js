document.getElementById("start").addEventListener("click", async () => {
  const mins = parseInt(document.getElementById("mins").value) || 1;
  const until = Date.now() + (mins * 60 * 1000);

  await chrome.storage.local.set({ blockUntil: until });

  const tabs = await chrome.tabs.query({ url: ["http://*/*", "https://*/*"] });
  for (const tab of tabs) {
    chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["content.js"] })
      .then(() => chrome.tabs.sendMessage(tab.id, { type: "START", until }))
      .catch(() => {});
  }
});

document.getElementById("stop").addEventListener("click", async () => {
  await chrome.storage.local.remove("blockUntil");
  const tabs = await chrome.tabs.query({});
  for (const tab of tabs) {
    chrome.tabs.sendMessage(tab.id, { type: "STOP" }).catch(() => {});
  }
});