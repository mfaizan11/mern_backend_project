import dontenv from "dotenv";
import connectDB from "./db/index.js";

dontenv.config({
    path: "./env"
})




connectDB()

















//first approach 👇

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERrr:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    consolle.error("Error", error);
    throw err;
  }
})();
*/