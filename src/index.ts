export const copyUrl = async () => {
  const currentTab = await getCurrentTab()

  if (currentTab) {
    await executeTabScript(currentTab, writeToClipboard)
  }
}

const executeTabScript = async (tab: any, action: (url: string) => void) => {
  if (tab.id && tab.url) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (url: string) => {
        action(url)
      },
      args: [tab.url],
    })
  }
}

const getCurrentTab = async () =>
  (await chrome.tabs.query({ active: true, currentWindow: true })).at(0)

const writeToClipboard = async (content: string) =>
  await navigator.clipboard.writeText(content)
