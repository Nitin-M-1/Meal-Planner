import { Router } from "express";
import Meal from "../models/meal.js";
const router = Router();

router.get("/:date", async (req, res) => {
  try {
    const appDate = Number(req.params.date);

    const data = await Meal.findOne({ appDate: appDate });

    if (data) {
      res.status(200).send(data);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { appDate, foods } = req.body;

    const existingMeal = await Meal.findOne({ appDate });

    if (existingMeal) {
      foods.forEach((newFood) => {
        const index = existingMeal.foods.findIndex(
          (f) => f.type === newFood.type
        );
        if (index >= 0) {
          existingMeal.foods[index].description = newFood.description;
        } else {
          existingMeal.foods.push(newFood);
        }
      });

      const updatedMeal = await existingMeal.save();
      res.status(200).send(updatedMeal);
    } else {
      const newMeal = await Meal.create({ appDate, foods });
      res.status(201).send(newMeal);
    }
  } catch (error) {
    res.status(400).send({
      status: false,
      message: error.message,
    });
  }
});

export default router;
