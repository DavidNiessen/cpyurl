export type NotificationLevel = 'success' | 'warn' | 'error'

export const displayNotification = async (
  message: string,
  level: NotificationLevel = 'success',
): Promise<void> => {
  const iconMap: Record<NotificationLevel, string> = {
    success: 'assets/img/icon-128.png',
    warn: 'assets/img/icon-128.png',
    error: 'assets/img/icon-128.png',
  }

  try {
    await chrome.notifications.create({
      type: 'basic',
      iconUrl: iconMap[level],
      title: 'cpyurl',
      message,
      priority: level === 'error' ? 2 : 1,
    })
  } catch (error) {
    console.error('Failed to display notification:', error)
  }
}
