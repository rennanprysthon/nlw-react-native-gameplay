import { StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
});
