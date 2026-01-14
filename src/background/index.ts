import { copyUrl } from '../index.js'

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'copy-url') {
    try {
      await copyUrl()
    } catch (error) {
      console.error('Command execution failed:', error)
    }
  }
})
