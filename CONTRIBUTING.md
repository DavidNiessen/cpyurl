# Contributing to cpyurl

## Development Setup

### Prerequisites
- Node.js v22 or higher
- npm or pnpm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/DavidNiessen/cpyurl.git
cd cpyurl
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Build the extension
```bash
npm run build
# or
pnpm build
```

4. Load the extension in Chrome
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder

## Project Structure

```
cpyurl/
├── src/
│   ├── background/       # Background service worker
│   ├── notification/     # Notification system
│   └── index.ts         # Core URL copying logic
├── static/
│   ├── assets/          # Icons and images
│   └── manifest.json    # Chrome extension manifest
└── dist/                # Build output (generated)
```

## Code Quality

- TypeScript strict mode is enabled
- All async operations have proper error handling
- Chrome API types are used throughout

## Building for Release

```bash
npm run build:bundle
# or
pnpm build:bundle
```

This creates a `cpyurl.zip` file in the `dist` folder ready for distribution.
