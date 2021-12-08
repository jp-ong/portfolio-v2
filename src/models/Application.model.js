import mongoose from "mongoose";

const ApplicationSchema = mongoose.Schema({
  position: Number,
  image: String,
  title: String,
  description: String,
  link: String,
});

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema, "applications");
