import React from "react";
import { SafeAreaView } from "react-native";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "./lib/BouncyCheckboxGroup";

const styles = {
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  iconStyle: { height: 50, width: 50, borderRadius: 25 },
  iconImageStyle: { height: 20, width: 20 },
};

const staticData: ICheckboxButton[] = [
  {
    id: 0,
    iconStyle: styles.iconStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  { id: 1, iconStyle: styles.iconStyle, iconImageStyle: styles.iconImageStyle },
  { id: 2, iconStyle: styles.iconStyle, iconImageStyle: styles.iconImageStyle },
  { id: 3, iconStyle: styles.iconStyle, iconImageStyle: styles.iconImageStyle },
  { id: 4, iconStyle: styles.iconStyle, iconImageStyle: styles.iconImageStyle },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BouncyCheckboxGroup
        data={staticData}
        onChange={(selectedItem: ICheckboxButton) => {
          console.log("SelectedItem: ", JSON.stringify(selectedItem));
        }}
      />
    </SafeAreaView>
  );
};

export default App;
