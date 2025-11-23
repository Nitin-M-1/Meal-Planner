import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import indexStyles from "../src/style/indexStyle";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import createDateController, {
  getTodayFormatted,
} from "../src/content/dateLogic.js";
import { useEffect, useState } from "react";
import FoodBox from "../src/component/FoodBox.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { getData } from "../src/content/API.js";

export default function Index() {
  const dateCtrl = createDateController();
  const [date, setDate] = useState(getTodayFormatted());
  const todayDate = getTodayFormatted();
  const [MealData, setMealData] = useState([]);
  const fetchMeals = async () => {
    const data = await getData(dateCtrl.getDBDate());
    setMealData(data.foods || []);
  };
  useEffect(() => {
    fetchMeals();
  }, [date, MealData]);

  return (
    <View style={{ backgroundColor: "white", flex: 1, elevation: 10 }}>
      <StatusBar style="dark" backgroundColor="white" />
      <SafeAreaView style={indexStyles.mainContainer}>
        <View style={indexStyles.header}>
          <Text style={indexStyles.mainText}>Meal Planning</Text>
        </View>
        {/* Date  */}
        <View style={indexStyles.plannerBody}>
          <View style={{ marginTop: 10 }}>
            {/* Date  */}
            <View style={indexStyles.dateStyle}>
              {/* Left Move Date Button  */}
              <TouchableOpacity
                onPress={() => {
                  // setNew Date
                  setDate(dateCtrl.prevDay());
                }}
              >
                <Ionicons
                  style={indexStyles.iconStyle}
                  name="chevron-back-outline"
                  size={28}
                />
              </TouchableOpacity>
              <View style={indexStyles.todayDate}>
                <Text
                  style={
                    todayDate == date
                      ? indexStyles.todayStyle
                      : indexStyles.todayStyleHide
                  }
                >
                  Today
                </Text>
                <Text
                  style={todayDate == date ? "" : indexStyles.mainDateStyleBig}
                >
                  {date}
                </Text>
              </View>
              {/* Right Move Date Button  */}
              <TouchableOpacity onPress={() => setDate(dateCtrl.nextDay())}>
                <Ionicons
                  style={indexStyles.iconStyle}
                  name="chevron-forward-outline"
                  size={28}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Food List */}
          <FlatList
            style={indexStyles.FoodBox}
            showsVerticalScrollIndicator={false}
            data={MealData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <FoodBox type={item.type} description={item.description} />
              );
            }}
          />
          {/* Add New Meal Btn */}
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/mealPlanner",
                params: {
                  day: date.slice(0, 3),
                  date: date,
                  searchDate: dateCtrl.getDBDate(),
                },
              });
            }}
          >
            <LinearGradient
              colors={["rgba(235, 240, 196, 1)", "#ced10eb0"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={indexStyles.linearGradient}
            >
              <Ionicons
                style={indexStyles.btnIcon}
                name="add-outline"
                size={20}
                color="white"
              />
              <Text style={indexStyles.btnText}>Add New Meal</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
