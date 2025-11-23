import { StyleSheet } from "react-native";
import styleColor from "../content/styleColor";
export const mealPlannerStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    margin: 15,
    backgroundColor: styleColor.white,
    alignSelf: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "500",
  },
  bodyContainer: {
    marginHorizontal: 30,
    marginTop: 2,
  },
  dayBox: {
    backgroundColor: "#e2e2e254",
    padding: 20,
    borderRadius: 10,
  },
  day: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  foodContainer: {
    marginTop: 25,
    flexDirection: "column",
    gap: 25,
    marginTop: 30,
  },
  foodHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foodTitle: {
    fontWeight: "600",
  },
  addIcon: {
    backgroundColor: "#719fb9ff",
    borderRadius: 50,
    color: "white",
  },
  foodInfoBox: {
    marginHorizontal: 3,
    marginTop: 5,
  },
  addFoodBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  foodInputText: {
    borderRadius: 2,
    backgroundColor: "#e8e9e8a6",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 170,
    paddingHorizontal: 10,
    outlineStyle: "none", // (for web)
  },
  addBtn: {
    backgroundColor: "#32333fff",
    color: "white",
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
  line: {
    padding: 0.4,
    backgroundColor: "#cecece7a",
    marginTop: 10,
  },
});
