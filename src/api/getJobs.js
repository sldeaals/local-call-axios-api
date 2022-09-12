import axios from "axios";

const getJobs = async () => {
  try {
    const jobsData = await axios.get("/db/jobs.json");
    return jobsData.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getJobs;
