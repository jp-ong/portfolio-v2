import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
  position: Number,
  image: String,
  label: String,
});

export default mongoose.models.Skill ||
  mongoose.model("Skill", SkillSchema, "skills");
