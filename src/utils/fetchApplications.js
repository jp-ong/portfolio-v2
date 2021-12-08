import Application from "models/Application.model.js";
import connectDB from "./connectDB";

const fetchApplications = async () => {
  await connectDB();
  const applications = await Application.find({}, null, {
    sort: { position: 1 },
  });

  return JSON.parse(JSON.stringify(applications));
};

export default fetchApplications;
