function onClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, "importBook");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({ title: "Save to Kindle Edition Checker" });
