import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // exit process if DB connection fails
  }
};

connectDB();


//defining routes
app.use("/book",bookRoute);

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
