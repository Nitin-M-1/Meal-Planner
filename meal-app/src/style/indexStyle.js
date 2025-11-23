import { StyleSheet } from "react-native";
import styleColor from "../content/styleColor";
import { LinearGradient } from "expo-linear-gradient";

const indexStyles = StyleSheet.create({
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
  plannerBody: {
    flex: 1,
    backgroundColor: styleColor.lightDark,
  },
  dateStyle: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  todayDate: {
    flexDirection: "column",
    alignItems: "center",
  },
  todayStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  todayStyleHide: {
    display: "none",
  },

  iconStyle: {
    marginTop: 6,
    padding: 3,
  },

  mainDateStyleBig: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 20,
  },
  FoodBox: {
    maxHeight: 450,
    marginHorizontal: 40,
    marginTop: 25,
  },
  linearGradient: {
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 60,
  },
  btnIcon: {
    color: "black",
    textAlign: "center",
  },

  btnText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});
export default indexStyles;
