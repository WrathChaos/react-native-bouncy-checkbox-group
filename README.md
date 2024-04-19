<img alt="React Native Bouncy Checkbox Group" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox-group)

[![React Native Bouncy Checkbox Group](https://img.shields.io/badge/-Fully%20customizable%20bouncy%20checkbox%20group%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox-group)

[![npm version](https://img.shields.io/npm/v/react-native-bouncy-checkbox-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox-group)
[![npm](https://img.shields.io/npm/dt/react-native-bouncy-checkbox-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox-group)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bouncy Checkbox Group"
        src="assets/Screenshots/react-native-bouncy-checkbox-group.png.gif" height="850" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-bouncy-checkbox-group
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-bouncy-checkbox": ">= 4.0.0"
```

# Usage

## Import

```jsx
import BouncyCheckboxGroup, {
  CheckboxButton,
} from "react-native-bouncy-checkbox-group";
```

## Fundamental Usage

```jsx
<BouncyCheckboxGroup
  data={staticData}
  onChange={(selectedItem: CheckboxButton) => {
    console.log("SelectedItem: ", JSON.stringify(selectedItem));
  }}
/>
```

## Vertical Usage

```jsx
<BouncyCheckboxGroup
  data={verticalStaticData}
  style={{ flexDirection: "column" }}
  onChange={(selectedItem: CheckboxButton) => {
    console.log("SelectedItem: ", JSON.stringify(selectedItem));
  }}
/>
```

## Data Format

You MUST follow this data format as `CheckboxButton`

```json
[
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |       Type        |  Default  | Description                                               |
| -------- | :---------------: | :-------: | --------------------------------------------------------- |
| data     | ICheckboxButton[] | undefined | set the checkboxes as a data                              |
| onChange |     function      | undefined | set your own logic when the group of checkbox is selected |
| checkboxProps | IBouncyCheckboxProps | undefined | default props for all checkboxes |
| initial | number | undefined | default selected item (id of selection object) |

## Customization (Optionals)

## [React Native Bouncy Checkbox Customizations](https://github.com/WrathChaos/react-native-bouncy-checkbox#configuration---props)

You can use all of the customiztion options from the rn bouncy checkbox. You NEED to add the styling and props into the `data`. Therefore, you can customize each of the checkboxes easily.

## Advanced Usage Example JSON Data

```tsx
const staticData: CheckboxButton[] = [
    {
        id: 0,
        fillColor: '#ff7473',
        unFillColor: '#fbbfbb',
        iconStyle: _iconStyle('#fbbfbb'),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 1,
        fillColor: '#5567e9',
        unFillColor: '#afb5f5',
        iconStyle: _iconStyle('#afb5f5'),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 2,
        fillColor: '#a98ae7',
        unFillColor: '#cab6f4',
        iconStyle: _iconStyle('#cab6f4'),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 3,
        fillColor: '#fcb779',
        unFillColor: '#ffd1a7',
        iconStyle: _iconStyle('#ffd1a7'),
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 4,
        fillColor: '#2be055',
        unFillColor: '#cbf2d5',
        iconStyle: _iconStyle('#cbf2d5'),
        iconImageStyle: styles.iconImageStyle,
    },
];
```


```tsx

const verticalStaticData: CheckboxButton[] = [
    {
        id: 0,
        text: 'Watermelon',
        fillColor: '#ff7473',
        unFillColor: '#fbbfbb',
        iconStyle: _iconStyle('#fbbfbb'),
        textStyle: styles.textStyle,
        style: styles.verticalStyle,
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 1,
        text: 'Ultramarine Blue',
        fillColor: '#5567e9',
        unFillColor: '#afb5f5',
        iconStyle: _iconStyle('#afb5f5'),
        textStyle: styles.textStyle,
        style: styles.verticalStyle,
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 2,
        text: 'Soft Purple',
        fillColor: '#a98ae7',
        unFillColor: '#cab6f4',
        iconStyle: _iconStyle('#cab6f4'),
        textStyle: styles.textStyle,
        style: styles.verticalStyle,
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 3,
        text: 'Takao',
        fillColor: '#fcb779',
        unFillColor: '#ffd1a7',
        iconStyle: _iconStyle('#ffd1a7'),
        textStyle: styles.textStyle,
        style: styles.verticalStyle,
        iconImageStyle: styles.iconImageStyle,
    },
    {
        id: 4,
        text: 'Malachite',
        fillColor: '#2be055',
        unFillColor: '#cbf2d5',
        iconStyle: _iconStyle('#cbf2d5'),
        textStyle: styles.textStyle,
        style: styles.verticalStyle,
        iconImageStyle: styles.iconImageStyle,
    },
];
```

```tsx
const _iconStyle = (borderColor: string) => ({
  height: 50,
  width: 50,
  borderRadius: 25,
  borderColor: borderColor,
});
```

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Checkbox Group is available under the MIT license. See the LICENSE file for more info.
