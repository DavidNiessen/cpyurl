export const copyUrl = async () => {
  const currentTabUrl = await getCurrentTabUrl()

  if (currentTabUrl) {
    await writeToClipboard(currentTabUrl)
  }
}

const getCurrentTabUrl = async () =>
  (await chrome.tabs.query({ active: true, currentWindow: true })).at(0)?.url

const writeToClipboard = async (content: string) =>
  await navigator.clipboard.writeText(content)
