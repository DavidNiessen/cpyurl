# cpyurl Features Overview

## 🎯 What does cpyurl do?

cpyurl is a Chrome extension that makes copying URLs super easy and flexible. Instead of manually selecting and copying URLs from the address bar, you can:

- Press a keyboard shortcut to instantly copy
- Choose different formats (Plain, Markdown, HTML)
- Get visual feedback when copying
- Customize your preferences

## 🚀 Main Features

### 1. Keyboard Shortcut Copy

**How it works:**
- Press `Alt+C` (Windows/Linux) or `MacCtrl+C` (macOS)
- Current tab URL is instantly copied to clipboard
- Uses your default format setting

**Use case:**
You're browsing documentation and want to quickly share the link in Slack → Press Alt+C → Paste in Slack. Done!

---

### 2. Popup Interface

**How it works:**
- Click the extension icon in Chrome toolbar
- See the current URL displayed
- Choose which format to copy

**What you see:**
```
┌─────────────────────────────────┐
│         cpyurl                  │
│    Copy URL to clipboard        │
├─────────────────────────────────┤
│ Current URL:                    │
│ https://github.com/...          │
│                                 │
│ [📋 Copy Plain]                 │
│ [📝 Copy Markdown]              │
│ [🔗 Copy HTML]                  │
│                                 │
│ Settings                        │
│ Default Format: [Plain ▼]      │
│ ☐ Auto-close popup after copy  │
└─────────────────────────────────┘
```

---

### 3. Multiple Copy Formats

#### Plain Format
```
https://github.com/DavidNiessen/cpyurl
```
**Best for:** Sharing raw URLs, pasting in address bar

#### Markdown Format
```
[cpyurl](https://github.com/DavidNiessen/cpyurl)
```
**Best for:** GitHub README, Notion, Obsidian, Markdown documents

#### HTML Format
```html
<a href="https://github.com/DavidNiessen/cpyurl">cpyurl</a>
```
**Best for:** HTML emails, web development, blog posts

---

### 4. Visual Feedback

#### Toast Notifications
- Appear in bottom-right corner
- Show success/error messages
- Auto-dismiss after 3 seconds

**Examples:**
- ✅ "URL copied to clipboard!"
- ⚠️ "Cannot copy URL from restricted pages..."
- ❌ "Failed to copy URL. Please try again."

#### Icon Badge
- Shows ✓ (green) on success
- Shows ✗ (red) on error
- Disappears after 2 seconds

---

### 5. Settings & Customization

#### Default Format
Choose which format is used when you press the keyboard shortcut:
- Plain (default)
- Markdown
- HTML

#### Auto-Close Popup
When enabled, popup automatically closes after copying (useful for quick workflows)

#### Settings Sync
Settings are saved to Chrome sync storage, so they work across all your devices!

---

### 6. Error Handling

#### Restricted Pages
Chrome doesn't allow extensions to access certain pages:
- `chrome://` pages (extensions, settings, etc.)
- `edge://` pages
- `about:` pages
- `view-source:` pages

**What happens:**
- Warning notification appears
- Red X badge shows on icon
- No crash or silent failure

#### No Active Tab
If somehow there's no active tab:
- Error notification: "No active tab found"
- Graceful handling, no crash

---

## 💡 Real-World Use Cases

### For Developers
```
Scenario: Sharing code documentation
1. Find useful docs page
2. Press Alt+C
3. Paste in team chat
Format: Markdown for GitHub/Slack
```

### For Content Creators
```
Scenario: Adding references to blog post
1. Research articles
2. Click extension → Copy HTML
3. Paste directly into HTML editor
Format: HTML with proper anchor tags
```

### For Students/Researchers
```
Scenario: Building bibliography
1. Find research paper
2. Copy as Markdown
3. Add to Notion/Obsidian notes
Format: Markdown for note-taking apps
```

### For Quick Sharing
```
Scenario: Sharing funny article with friend
1. Press Alt+C while reading
2. Paste in WhatsApp/Email
Format: Plain URL
```

---

## 🎨 Design Philosophy

- **Fast:** Keyboard shortcut for instant copying
- **Flexible:** Multiple formats for different use cases
- **Friendly:** Clear feedback, no confusion
- **Safe:** Handles errors gracefully
- **Simple:** No complex configuration needed

---

## 🔒 Privacy & Permissions

### Required Permissions:
- **tabs**: To get current tab URL
- **activeTab**: To access active tab info
- **scripting**: To execute clipboard copy
- **clipboardWrite**: To write to clipboard
- **notifications**: To show toast messages
- **storage**: To save your settings

### What we DON'T do:
- ❌ No tracking
- ❌ No analytics
- ❌ No data collection
- ❌ No external servers
- ❌ No URL history stored

Everything happens locally in your browser!
