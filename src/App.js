import { useState, useCallback, useEffect } from "react";
import "./App.css";

import { getJobs } from "./api";

function App() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const jobs = await getJobs();
    setData(jobs);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      {console.log("data", data)}
    </div>
  );
}

export default App;
