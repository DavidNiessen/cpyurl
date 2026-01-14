import { displayNotification } from './notification/index.js'
import { copyUrlWithFormat } from './copy/index.js'
import { getSettings } from './settings/index.js'
import { showSuccessBadge, showErrorBadge } from './badge/index.js'

export const copyUrl = async (): Promise<void> => {
  try {
    const currentTab = await getCurrentTab()

    if (!currentTab) {
      await displayNotification('No active tab found', 'error')
      await showErrorBadge()
      return
    }

    if (!currentTab.url) {
      await displayNotification('Tab has no URL', 'error')
      await showErrorBadge()
      return
    }

    const settings = await getSettings()
    await copyUrlWithFormat(currentTab, settings.defaultFormat)
    await displayNotification('URL copied to clipboard!', 'success')
    await showSuccessBadge()
  } catch (error) {
    console.error('Failed to copy URL:', error)
    await displayNotification(
      'Failed to copy URL. Please try again.',
      'error',
    )
    await showErrorBadge()
  }
}

const getCurrentTab = async (): Promise<chrome.tabs.Tab | undefined> => {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    return tabs[0]
  } catch (error) {
    console.error('Failed to get current tab:', error)
    return undefined
  }
}
