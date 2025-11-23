import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native";
import { mealPlannerStyle as styles } from "../style/mealPlannerStyle";
import { useState } from "react";
const MealPlannerBox = ({ title, description, setMeal, setDescValue }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [value, setValue] = useState(""); // state to store input value
  const addInData = () => {
    if (value.toString().trim().length > 0) {
      setMeal({ type: title, description: value });
      setDescValue(value);
      setValue("");
    }
  };
  return (
    <View>
      <View style={styles.foodHeader}>
        <Text style={styles.foodTitle}>{title}</Text>
        <TouchableOpacity onPress={() => setInputVisible((e) => !e)}>
          <Ionicons
            style={styles.addIcon}
            name="add-circle-outline"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.foodInfoBox}>
        {/* styles.addFoodBox */}
        <View style={inputVisible ? styles.addFoodBox : { display: "none" }}>
          <TextInput
            style={styles.foodInputText}
            placeholder={`Enter Your ${title}`}
            onChangeText={(text) => setValue(text)} // update state on change
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              // Update Data
              addInData();
              setInputVisible((e) => !e);
            }}
            style={styles.addBtn}
          >
            <Text style={styles.addBtnText}>ADD</Text>
          </TouchableOpacity>
        </View>
        <Text>{description}</Text>
      </View>
      {/* Line */}
      <View style={styles.line}></View>
    </View>
  );
};

export default MealPlannerBox;
