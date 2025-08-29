import { copyUrl } from '../index.js'

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'copy-url') {
    await copyUrl()
  }
})
