import express from "express";
import { config } from "dotenv";
import router from "./routes/mealRouter.js";
import DB from "./utl/db.js";
import cors from "cors";
config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 5000;

DB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log("DB is running ");
      console.log(`Server is running on ${PORT} `);
    });
  })
  .catch((e) => {
    console.log(e);
  });
