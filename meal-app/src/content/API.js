import { Platform } from "react-native";
import axios from "axios";

export async function getData(date) {
  try {
    const response = await axios.get(`http://192.168.29.215:5000/${date}`);
    return response.data;
  } catch (error) {
    console.error("API fetch error:", error); // log the real error
    return [];
  }
}
export async function setData(appDate, newMeal) {
  try {
    // fetch existing meals for that date
    const existingData = await getData(appDate);
    const existingFoods = existingData.foods || [];

    // update existing foods (replace if same type, else add)
    const updatedFoods = existingFoods.filter((f) => f.type !== newMeal.type);
    updatedFoods.push(newMeal);

    const payload = {
      appDate,
      foods: updatedFoods,
    };

    const response = await axios.post("http://192.168.29.215:5000/", payload, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
}
