import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("db connected successfully");
  } catch (error) {
    console.log("db failed", error.message);
  }
};
