# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-10-01

### Added

- Multiple selection support with the new `multiple` prop
- "Always selected" mode with the new `alwaysSelect` prop to ensure one option is always selected
- Custom spacing between checkboxes with the new `spacing` prop
- Individual item container styling with the new `itemContainerStyle` prop
- Support for string IDs (previously only number IDs were supported)
- Support for array of initial selections for multiple mode
- Improved TypeScript typings
- Comprehensive documentation

### Changed

- Enhanced the layout system with flexWrap for better handling of multiple items
- Improved animation performance with `useNativeDriver`
- Better handling of item selection state
- More consistent rendering across different device sizes
- Better support for different React Native versions
- Updated `react-native-bouncy-checkbox` dependency to version 4.1.2 or higher
- Added documentation for using the `useBuiltInState` prop for external state control

### Fixed

- Fixed issue where checkbox wouldn't respect the initial selection
- Fixed type conflicts between string and number IDs
- Fixed layout issues in different orientations
- Fixed state management when switching between items
- Fixed TypeScript errors related to missing `useBuiltInState` prop definition

## [1.0.0] - 2023-05-15

### Initial Release

- Basic horizontal and vertical checkbox group
- Single selection support
- Customizable styling
- Animation effects 