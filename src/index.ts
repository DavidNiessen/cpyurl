export const copyUrl = async () => {
  const currentTab = await getCurrentTab()

  if (currentTab) {
    await executeCopyScript(currentTab)
  }
}

const executeCopyScript = async (tab: any) => {
  if (tab.id && tab.url) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (url) => {
        console.log('Copying URL to clipboard:', url)
        navigator.clipboard.writeText(url)
      },
      args: [tab.url],
    })
  }
}

const getCurrentTab = async () =>
  (await chrome.tabs.query({ active: true, currentWindow: true })).at(0)
