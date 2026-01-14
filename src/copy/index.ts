import { displayNotification } from '../notification/index.js'

export type CopyFormat = 'plain' | 'markdown' | 'html'

export const copyUrlWithFormat = async (
  tab: chrome.tabs.Tab,
  format: CopyFormat,
): Promise<void> => {
  if (!tab.url) {
    throw new Error('Tab has no URL')
  }

  if (!tab.id) {
    throw new Error('Tab has no ID')
  }

  // Check if URL is restricted
  if (isRestrictedUrl(tab.url)) {
    await displayNotification(
      'Cannot copy URL from restricted pages (chrome://, edge://, etc.)',
      'warn',
    )
    throw new Error('Restricted URL')
  }

  const formattedUrl = formatUrl(tab.url, tab.title || 'Untitled', format)

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text: string) => {
        navigator.clipboard.writeText(text)
      },
      args: [formattedUrl],
    })
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    throw new Error('Failed to copy to clipboard')
  }
}

const formatUrl = (url: string, title: string, format: CopyFormat): string => {
  switch (format) {
    case 'markdown':
      return `[${title}](${url})`
    case 'html':
      return `<a href="${url}">${escapeHtml(title)}</a>`
    case 'plain':
    default:
      return url
  }
}

const escapeHtml = (text: string): string => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

const isRestrictedUrl = (url: string): boolean => {
  const restrictedProtocols = [
    'chrome://',
    'chrome-extension://',
    'edge://',
    'about:',
    'view-source:',
  ]
  return restrictedProtocols.some((protocol) => url.startsWith(protocol))
}
