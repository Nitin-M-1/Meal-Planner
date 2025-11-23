import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Breakfast", "Lunch", "Dinner", "Snacks"], // optional: limit values
  },
  description: {
    type: String,
    required: true,
  },
});

const mealSchema = new mongoose.Schema(
  {
    foods: {
      type: [foodSchema],
      default: [],
    },
    appDate: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const Meal = mongoose.model("Meal", mealSchema);
export default Meal;
