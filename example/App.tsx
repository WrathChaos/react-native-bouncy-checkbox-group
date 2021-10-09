import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AppleHeader from "react-native-apple-header";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "./lib/BouncyCheckboxGroup";

const _iconStyle = (borderColor: string) => ({
  height: 50,
  width: 50,
  borderRadius: 25,
  borderColor: borderColor,
});

const styles = {
  container: { marginTop: 24 },
  verticalStyle: { marginTop: 16 },
  textStyle: { textDecorationLine: "none" },
  iconImageStyle: { height: 20, width: 20 },
};

const staticData: ICheckboxButton[] = [
  {
    id: 0,
    fillColor: "#ff7473",
    unfillColor: "#fbbfbb",
    iconStyle: _iconStyle("#fbbfbb"),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 1,
    fillColor: "#5567e9",
    unfillColor: "#afb5f5",
    iconStyle: _iconStyle("#afb5f5"),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 2,
    fillColor: "#a98ae7",
    unfillColor: "#cab6f4",
    iconStyle: _iconStyle("#cab6f4"),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 3,
    fillColor: "#fcb779",
    unfillColor: "#ffd1a7",
    iconStyle: _iconStyle("#ffd1a7"),
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 4,
    fillColor: "#2be055",
    unfillColor: "#cbf2d5",
    iconStyle: _iconStyle("#cbf2d5"),
    iconImageStyle: styles.iconImageStyle,
  },
];

const verticalStaticData: ICheckboxButton[] = [
  {
    id: 0,
    text: "Watermelon",
    fillColor: "#ff7473",
    unfillColor: "#fbbfbb",
    iconStyle: _iconStyle("#fbbfbb"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 1,
    text: "Ultramarine Blue",
    fillColor: "#5567e9",
    unfillColor: "#afb5f5",
    iconStyle: _iconStyle("#afb5f5"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 2,
    text: "Soft Purple",
    fillColor: "#a98ae7",
    unfillColor: "#cab6f4",
    iconStyle: _iconStyle("#cab6f4"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 3,
    text: "Takao",
    fillColor: "#fcb779",
    unfillColor: "#ffd1a7",
    iconStyle: _iconStyle("#ffd1a7"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 4,
    text: "Malachite",
    fillColor: "#2be055",
    unfillColor: "#cbf2d5",
    iconStyle: _iconStyle("#cbf2d5"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
];

const App = () => {
  const imageSource = {
    uri:
      "https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
  };

  const horizontalCheckboxGroupContainer = () => (
    <>
      <View style={{ marginLeft: 32 }}>
        <Text style={{ color: "#a8a8ac", fontWeight: "500", fontSize: 16 }}>
          Pick your favorite color
        </Text>
      </View>
      <View
        style={{
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BouncyCheckboxGroup
          data={staticData}
          onChange={(selectedItem: ICheckboxButton) => {
            console.log("SelectedItem: ", JSON.stringify(selectedItem));
          }}
        />
      </View>
    </>
  );

  const verticalCheckboxGroupContainer = () => (
    <>
      <View style={{ marginLeft: 32, marginTop: 24 }}>
        <Text style={{ color: "#a8a8ac", fontWeight: "500", fontSize: 16 }}>
          Pick your favorite color (Horizontal Style)
        </Text>
      </View>
      <View
        style={{
          marginTop: 16,
          marginLeft: 32,
          justifyContent: "center",
        }}
      >
        <BouncyCheckboxGroup
          data={verticalStaticData}
          style={{ flexDirection: "column" }}
          onChange={(selectedItem: ICheckboxButton) => {
            console.log("SelectedItem: ", JSON.stringify(selectedItem));
          }}
        />
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView>
        <AppleHeader imageSource={imageSource} />
        <View style={styles.container}>
          {horizontalCheckboxGroupContainer()}
          {verticalCheckboxGroupContainer()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
