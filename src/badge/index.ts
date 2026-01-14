export const showSuccessBadge = async (): Promise<void> => {
  try {
    await chrome.action.setBadgeText({ text: '✓' })
    await chrome.action.setBadgeBackgroundColor({ color: '#28a745' })

    setTimeout(async () => {
      await chrome.action.setBadgeText({ text: '' })
    }, 2000)
  } catch (error) {
    console.error('Failed to show success badge:', error)
  }
}

export const showErrorBadge = async (): Promise<void> => {
  try {
    await chrome.action.setBadgeText({ text: '✗' })
    await chrome.action.setBadgeBackgroundColor({ color: '#dc3545' })

    setTimeout(async () => {
      await chrome.action.setBadgeText({ text: '' })
    }, 2000)
  } catch (error) {
    console.error('Failed to show error badge:', error)
  }
}
