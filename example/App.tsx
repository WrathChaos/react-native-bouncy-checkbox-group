import React from "react";
import { SafeAreaView, Alert } from "react-native";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "./lib/BouncyCheckboxGroup";

const staticData: ICheckboxButton[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <BouncyCheckboxGroup
        data={staticData}
        onChange={(selectedItem: ICheckboxButton) => {
          console.log("Boom", JSON.stringify(selectedItem));
        }}
      />
    </SafeAreaView>
  );
};

export default App;
