import { StyleSheet } from "react-native";

export const borderWidth = 2;
export const margin = 2;
const maxContainerHeight = 100;

export default StyleSheet.create({
  container: {
    borderWidth,
    margin,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  containerRTL: {
    borderWidth,
    margin,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    borderWidth,
    justifyContent: "center",
  },
  railFillTextContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  railFillText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
