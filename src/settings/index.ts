import type { CopyFormat } from '../copy/index.js'

export interface Settings {
  defaultFormat: CopyFormat
  autoClosePopup: boolean
}

const DEFAULT_SETTINGS: Settings = {
  defaultFormat: 'plain',
  autoClosePopup: false,
}

export const getSettings = async (): Promise<Settings> => {
  try {
    const result = await chrome.storage.sync.get('settings')
    return { ...DEFAULT_SETTINGS, ...result.settings }
  } catch (error) {
    console.error('Failed to load settings:', error)
    return DEFAULT_SETTINGS
  }
}

export const saveSettings = async (settings: Settings): Promise<void> => {
  try {
    await chrome.storage.sync.set({ settings })
  } catch (error) {
    console.error('Failed to save settings:', error)
    throw error
  }
}
