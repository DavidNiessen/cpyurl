# cpyurl

### Simple Chrome extension that allows you to copy the current tab url into your clipboard

## Features
- 📋 Copy current tab URL with keyboard shortcut
- 🎨 Multiple copy formats: Plain, Markdown, HTML
- ⚙️ Customizable settings (default format, auto-close popup)
- 🔔 Toast notifications for success/error feedback
- 🛡️ Error handling for restricted pages (chrome://, edge://, etc.)
- 🖱️ Popup UI for quick access and format selection
- 💾 Settings sync across devices
- 🌐 Works across all platforms (Windows, macOS, Linux, ChromeOS)

## Usage

### Quick Start
1. **Install the extension** (see Installation below)
2. **Pin the extension** to your toolbar (click puzzle icon → pin cpyurl)
3. **Try it out:**
   - Press `Alt+C` to copy current URL
   - Or click the extension icon for more options

### Keyboard Shortcut
Press the keyboard shortcut (default: Alt+C on Windows/Linux, MacCtrl+C on macOS) to copy the current tab URL using your default format.

### Popup Interface
Click the extension icon to open the popup where you can:
- View the current tab URL
- Copy in different formats (Plain, Markdown, HTML)
- Configure settings (default format, auto-close behavior)

### Copy Formats
- **Plain**: `https://example.com`
- **Markdown**: `[Page Title](https://example.com)`
- **HTML**: `<a href="https://example.com">Page Title</a>`

## Testing

See [TESTING.md](TESTING.md) for detailed testing instructions.

**Quick Test:**
1. Build: `npm run build`
2. Load in Chrome: `chrome://extensions/` → Load unpacked → select `dist` folder
3. Test: Press `Alt+C` on any webpage

## Documentation

- [FEATURES.md](FEATURES.md) - Detailed feature overview and use cases
- [TESTING.md](TESTING.md) - Complete testing guide
- [CONTRIBUTING.md](CONTRIBUTING.md) - Development setup and guidelines
- [CHANGELOG.md](CHANGELOG.md) - Version history

#### Installation
1. Navigate to the [latest release](https://github.com/DavidNiessen/cpyurl/releases)
2. Download the cpyurl.zip archive
3. Open chrome and navigate to [extensions](chrome://extensions/)
4. Drag and drop the zip archive

#### Build locally
Prerequisites: node v22 and pnpm

1. Install dependencies
> pnpm install
2. Build & bundle
> pnpm build:bundle

#### Default shortcuts:

| OS       | Shortcut  |
|----------|-----------|
| Windows  | Alt+C     |
| MacOS    | MacCtrl+C |
| Linux    | Alt+C     |
| ChromeOS | Alt+C     |

To manually configure shortcuts, navigate to:
> chrome://extensions/shortcuts
