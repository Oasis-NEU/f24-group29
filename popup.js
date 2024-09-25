document.getElementById("myButton").addEventListener("click", onClick);

async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  console.assert(tabs.length == 1);
  return tabs[0];
}

async function onClick() {
  console.log("Button clicked!");
  const activeTab = await getActiveTab();
  console.log(activeTab);
  const response = await chrome.tabs.sendMessage(activeTab.id, {message: 'Hello from popup!'})
  console.log('response from content:', response)
}