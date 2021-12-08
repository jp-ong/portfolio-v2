import Skill from "models/Skill.model.js";
import connectDB from "./connectDB";

const fetchSkills = async () => {
  await connectDB();
  const skills = await Skill.find({}, null, { sort: { position: 1 } });

  return JSON.parse(JSON.stringify(skills));
};

export default fetchSkills;
