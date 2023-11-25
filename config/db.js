import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database is connected`);
  } catch (error) {
    console.log(error);
  }

};

export default connectDB;