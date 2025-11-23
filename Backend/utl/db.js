import mongoose from "mongoose";
async function DB() {
  return await mongoose.connect(process.env.MONGODB_URL);
}

export default DB;
