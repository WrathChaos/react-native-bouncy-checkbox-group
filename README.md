<img alt="React Native Bouncy Checkbox Group" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox-group)

[![React Native Bouncy Checkbox Group](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox-group)

[![npm version](https://img.shields.io/npm/v/react-native-bouncy-checkbox-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox-group)
[![npm](https://img.shields.io/npm/dt/react-native-bouncy-checkbox-group.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox-group)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bouncy Checkbox Group"
        src="assets/Screenshots/react-native-bouncy-checkbox-group.png.gif" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-bouncy-checkbox-group
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-bouncy-checkbox": ">= 2.1.5"
```

# Usage

## Import

```jsx
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
```

## Fundamental Usage

```jsx
<BouncyCheckboxGroup
  data={staticData}
  onChange={(selectedItem: ICheckboxButton) => {
    console.log("SelectedItem: ", JSON.stringify(selectedItem));
  }}
/>
```

## Vertical Usage

```jsx
<BouncyCheckboxGroup
  data={verticalStaticData}
  style={{ flexDirection: "column" }}
  onChange={(selectedItem: ICheckboxButton) => {
    console.log("SelectedItem: ", JSON.stringify(selectedItem));
  }}
/>
```

## Data Format

You MUST follow this data format as `ICheckboxButton`

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

## Customization (Optionals)

#### [React Native Bouncy Checkbox Customizations](https://github.com/WrathChaos/react-native-bouncy-checkbox#configuration---props)

You can use all of the customiztion options from the rn bouncy checkbox. You NEED to add the styling and props into the `data`. Therefore, you can customize each of the checkboxes easly.

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Checkbox Group is available under the MIT license. See the LICENSE file for more info.
