import { StyleSheet } from "react-native";
import styleColor from "../content/styleColor";

export const FoodBoxStyles = StyleSheet.create({
  image: { width: 40, height: 40 },
  boxContainer: {
    backgroundColor: styleColor.white,
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    gap: 9,
    alignItems: "center",
    marginTop: 10,
  },
  detail: {
    marginTop: -5,
  },
  type: {
    fontWeight: "700",
    fontSize: 16,
  },
  description: {
    width: 210,
  },
});
