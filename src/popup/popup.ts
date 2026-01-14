import { getSettings, saveSettings, type Settings } from '../settings/index.js'
import { copyUrlWithFormat, type CopyFormat } from '../copy/index.js'
import { showSuccessBadge, showErrorBadge } from '../badge/index.js'

let currentTab: chrome.tabs.Tab | null = null

const showStatus = (message: string, type: 'success' | 'error' | 'warning') => {
  const statusEl = document.getElementById('status')
  if (statusEl) {
    statusEl.textContent = message
    statusEl.className = `status ${type}`
    setTimeout(() => {
      statusEl.textContent = ''
      statusEl.className = 'status'
    }, 3000)
  }
}

const displayCurrentUrl = async () => {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    currentTab = tabs[0] || null

    const urlDisplay = document.getElementById('currentUrl')
    if (urlDisplay) {
      if (currentTab?.url) {
        urlDisplay.textContent = currentTab.url
      } else {
        urlDisplay.textContent = 'No URL available'
      }
    }
  } catch (error) {
    console.error('Failed to get current tab:', error)
    showStatus('Failed to load current URL', 'error')
  }
}

const handleCopy = async (format: CopyFormat) => {
  if (!currentTab) {
    showStatus('No active tab found', 'error')
    return
  }

  try {
    await copyUrlWithFormat(currentTab, format)
    showStatus(`Copied as ${format}!`, 'success')
    await showSuccessBadge()

    const settings = await getSettings()
    if (settings.autoClosePopup) {
      setTimeout(() => window.close(), 500)
    }
  } catch (error) {
    console.error('Copy failed:', error)
    showStatus('Failed to copy URL', 'error')
    await showErrorBadge()
  }
}

const loadSettings = async () => {
  const settings = await getSettings()

  const defaultFormatEl = document.getElementById(
    'defaultFormat',
  ) as HTMLSelectElement
  const autoCloseEl = document.getElementById('autoClose') as HTMLInputElement

  if (defaultFormatEl) {
    defaultFormatEl.value = settings.defaultFormat
  }

  if (autoCloseEl) {
    autoCloseEl.checked = settings.autoClosePopup
  }
}

const setupEventListeners = () => {
  document.getElementById('copyPlain')?.addEventListener('click', () => {
    handleCopy('plain')
  })

  document.getElementById('copyMarkdown')?.addEventListener('click', () => {
    handleCopy('markdown')
  })

  document.getElementById('copyHtml')?.addEventListener('click', () => {
    handleCopy('html')
  })

  const defaultFormatEl = document.getElementById(
    'defaultFormat',
  ) as HTMLSelectElement
  defaultFormatEl?.addEventListener('change', async () => {
    const settings = await getSettings()
    settings.defaultFormat = defaultFormatEl.value as CopyFormat
    await saveSettings(settings)
    showStatus('Settings saved', 'success')
  })

  const autoCloseEl = document.getElementById('autoClose') as HTMLInputElement
  autoCloseEl?.addEventListener('change', async () => {
    const settings = await getSettings()
    settings.autoClosePopup = autoCloseEl.checked
    await saveSettings(settings)
    showStatus('Settings saved', 'success')
  })
}

// Initialize popup
document.addEventListener('DOMContentLoaded', async () => {
  await displayCurrentUrl()
  await loadSettings()
  setupEventListeners()
})
