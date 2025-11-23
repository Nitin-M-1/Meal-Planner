import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { mealPlannerStyle as styles } from "../src/style/mealPlannerStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { getFullDaysName, getTodayFormatted } from "../src/content/dateLogic";
import MealPlannerBox from "../src/component/MealPlannerBox";
import { useEffect, useState } from "react";
import createDateController from "../src/content/dateLogic.js";
import { getData, setData } from "../src/content/API";
const mealPlanner = () => {
  const dateCtrl = createDateController();

  const { day, date, searchDate } = useLocalSearchParams();
  const [breakfastText, setBreakFast] = useState("No breakfast added 😟");
  const [lunchText, setLunchText] = useState("No lunch added 😟");
  const [dinnerText, setDinner] = useState("No dinner added 😟.");
  const [snacksText, setSnacks] = useState("No snack added 😟.");

  const todayDate = getTodayFormatted();
  const fetchMeals = async () => {
    const data = await getData(searchDate);
    return data.foods;
  };
  const setMeal = async (food) => {
    setData(searchDate, food);
  };
  useEffect(() => {
    const data = fetchMeals().then((json) => {
      if (json != undefined) {
        json.forEach((element) => {
          if (element.type == "Breakfast") {
            setBreakFast(element.description);
          } else if (element.type == "Lunch") {
            setLunchText(element.description);
          } else if (element.type == "Dinner") {
            setDinner(element.description);
          } else if (element.type == "Snacks") {
            setSnacks(element.description);
          }
        });
      }
    });
  }, [searchDate]);
  useEffect(() => {
    fetchMeals();
  }, [breakfastText, lunchText, dinnerText, snacksText]);

  return (
    <View style={{ backgroundColor: "white", flex: 1, elevation: 10 }}>
      <StatusBar style="dark" backgroundColor="white" />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.mainText}>Meal Planning</Text>
        </View>
        {/* main container */}
        <View style={styles.bodyContainer}>
          <View style={styles.dayBox}>
            <Text style={styles.day}>{getFullDaysName[day.toLowerCase()]}</Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              {date.slice(4)}
            </Text>
            {date == todayDate && (
              <Text style={{ textAlign: "center", fontSize: 12 }}>(Today)</Text>
            )}
          </View>

          <View style={styles.foodContainer}>
            {/* BreakFast */}

            <MealPlannerBox
              title={"Breakfast"}
              description={breakfastText}
              setMeal={setMeal}
              setDescValue={setBreakFast}
            />
            {/* Lunch */}
            <MealPlannerBox
              title={"Lunch"}
              description={lunchText}
              setMeal={setMeal}
              setDescValue={setLunchText}
            />
            {/* Dinner */}
            <MealPlannerBox
              title={"Dinner"}
              description={dinnerText}
              setMeal={setMeal}
              setDescValue={setDinner}
            />
            {/* Snacks */}
            <MealPlannerBox
              title={"Snacks"}
              description={snacksText}
              setMeal={setMeal}
              setDescValue={setSnacks}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default mealPlanner;
