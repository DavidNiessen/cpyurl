# Changelog

All notable changes to this project will be documented in this file.

## [0.0.3] - Unreleased

### Added
- 🎨 **Popup UI** with modern, clean design
- 📝 **Multiple copy formats**: Plain, Markdown, HTML
- ⚙️ **Settings system** with Chrome storage sync
- 💾 **User preferences**: Default format, auto-close popup
- 🖱️ **Quick access** via extension icon
- Toast notification system for user feedback
- Comprehensive error handling for all operations
- Validation for restricted URLs (chrome://, edge://, etc.)
- TypeScript type safety improvements

### Changed
- Refactored copy logic into separate module
- Improved error messages and user feedback
- Better handling of edge cases (no active tab, missing URL, etc.)
- Updated notification and storage permissions in manifest
- Added action (popup) configuration to manifest

### Fixed
- Type safety issues with `any` types
- Missing error handling in async operations
- Proper TypeScript types for Chrome API

## [0.0.2] - Previous Release

### Added
- Basic URL copying functionality
- Keyboard shortcuts for all platforms
- Chrome extension manifest v3 support
