import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState > 0) return;
  await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;
