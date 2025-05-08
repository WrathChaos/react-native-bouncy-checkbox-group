import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  vertical: ViewStyle;
  horizontal: ViewStyle;
  itemContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    marginBottom: 8,
  },
});
