# React Native Bouncy Checkbox Group

A fully customizable, animated checkbox group component for React Native applications.

## Features

- Single and multiple selection support
- "Always selected" mode to ensure one option is always chosen
- Horizontal and vertical layouts
- Customizable animations and spacing
- TypeScript support
- Flexible styling options
- Bouncy animation effects

## Installation

```bash
npm install react-native-bouncy-checkbox-group
# or
yarn add react-native-bouncy-checkbox-group
```

This package requires `react-native-bouncy-checkbox` version 4.1.2 or higher. If you haven't installed it yet:

```bash
npm install react-native-bouncy-checkbox@latest
# or
yarn add react-native-bouncy-checkbox@latest
```

## Usage

### Basic Usage

```jsx
import BouncyCheckboxGroup, { CheckboxItem } from 'react-native-bouncy-checkbox-group';

const data = [
  {
    id: 0,
    text: 'Option 1',
    fillColor: '#ff7473',
    unfillColor: '#fbbfbb',
  },
  {
    id: 1,
    text: 'Option 2',
    fillColor: '#5567e9',
    unfillColor: '#afb5f5',
  },
];

// Inside your component
<BouncyCheckboxGroup
  data={data}
  onChange={(selectedItem) => {
    console.log('Selected:', selectedItem);
  }}
/>
```

### Single Selection with Initial Value

```jsx
<BouncyCheckboxGroup
  data={data}
  initial={0} // Set initial selection to item with id=0
  spacing={8} // Add spacing between items
  onChange={(selectedItem) => {
    console.log('Selected:', selectedItem);
  }}
/>
```

### Always Selected Mode

The `alwaysSelect` feature ensures that one checkbox must always be selected in single selection mode. This is useful for cases where having no selection is not a valid state, like radio button groups.

```jsx
<BouncyCheckboxGroup
  data={data}
  initial={0} // Set initial selection
  alwaysSelect={true} // Prevent deselection of the selected item
  onChange={(selectedItem) => {
    console.log('Selected:', selectedItem);
  }}
/>
```

With `alwaysSelect` enabled:
- One checkbox is always selected
- Users can change selection by tapping a different checkbox
- Attempting to deselect the currently selected checkbox has no effect
- If no `initial` value is set, the first item is automatically selected

### Multiple Selection

Enable choosing multiple options simultaneously:

```jsx
<BouncyCheckboxGroup
  data={data}
  multiple={true} // Enable multiple selection
  initial={[0, 2]} // Optional initial selections
  onChange={(selectedItems) => {
    console.log('Selected:', selectedItems);
  }}
/>
```

### Vertical Layout

Change the orientation to vertical:

```jsx
<BouncyCheckboxGroup
  data={data}
  style={{ flexDirection: 'column' }}
  onChange={(selectedItem) => {
    console.log('Selected:', selectedItem);
  }}
/>
```

### Customizing Animation and Spacing

```jsx
<BouncyCheckboxGroup
  data={data}
  animationDuration={100} // Faster animation (default: 300ms)
  spacing={12} // Add 12 pixels between checkboxes
  onChange={(selectedItem) => {
    console.log('Selected:', selectedItem);
  }}
/>
```

### Custom Styling for Individual Checkboxes

The `data` array accepts all properties from the `react-native-bouncy-checkbox` package:

```jsx
const customData = [
  {
    id: 0,
    text: 'Custom Option',
    fillColor: '#ff7473',
    unfillColor: '#ffffff',
    textStyle: { 
      textDecorationLine: 'none', 
      fontSize: 16,
      color: '#333'
    },
    iconStyle: { 
      borderRadius: 8,
      borderColor: '#ff7473'
    },
    size: 24
  },
  // More items...
];
```

### Using External State Management

If you need to control the checkbox state from outside, you can use the `useBuiltInState` prop in your checkbox items:

```jsx
const [myState, setMyState] = useState(false);

const customData = [
  {
    id: 0,
    text: 'Externally Controlled',
    isChecked: myState,
    useBuiltInState: false, // Disable internal state management
    onPress: (checked) => {
      setMyState(!myState); // Update your own state
    }
  },
  // More items...
];
```

## Props

### BouncyCheckboxGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `CheckboxItem[]` | Required | Array of checkbox items |
| `onChange` | `(selectedItem: CheckboxItem \| CheckboxItem[]) => void` | Required | Callback when selection changes |
| `style` | `StyleProp<ViewStyle>` | `undefined` | Container style |
| `initial` | `SelectionID \| SelectionID[]` | `undefined` | Initial selected item(s) by ID |
| `multiple` | `boolean` | `false` | Enable multiple selection |
| `alwaysSelect` | `boolean` | `false` | Ensures one checkbox is always selected (single select mode only) |
| `animationDuration` | `number` | `300` | Duration of bounce animation in ms |
| `spacing` | `number` | `0` | Spacing between checkbox items |
| `itemContainerStyle` | `StyleProp<ViewStyle>` | `undefined` | Style for each checkbox container |
| `checkboxProps` | `BouncyCheckboxProps` | `undefined` | Props applied to all checkboxes |

### CheckboxItem Props

The `CheckboxItem` interface extends all props from `react-native-bouncy-checkbox` with an added required `id` field:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string \| number` | Required | Unique identifier for the checkbox |
| `text` | `string` | `undefined` | Text label for the checkbox |
| `isChecked` | `boolean` | `undefined` | Control the checked state externally |
| `useBuiltInState` | `boolean` | `true` | Set to `false` to manually control checkbox state |
| `fillColor` | `string` | `#f09f48` | Color when checked |
| `unfillColor` | `string` | `transparent` | Color when unchecked |
| `textStyle` | `StyleProp<TextStyle>` | Default | Style for the text label |
| `iconStyle` | `StyleProp<ViewStyle>` | Default | Style for the checkbox icon |
| ... | ... | ... | All other props from BouncyCheckbox |

## Example

Check out the `example` folder for a fully working demo app that demonstrates all features.

## License

MIT
