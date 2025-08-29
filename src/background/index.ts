chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'copy-url') {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab && tab.id && tab.url) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (url: string) => {
          navigator.clipboard.writeText(url)
        },
        args: [tab.url],
      })
    }
  }
})
