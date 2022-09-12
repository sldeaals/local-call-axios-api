import { memo, useCallback, useState, useEffect } from "react";

import "./style.css";
import i18n from "./i18n/en";
import { JobsList } from "../../components";

import { getJobs } from "./../../api";

const Jobs = memo(() => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const jobs = await getJobs();
    setData(jobs);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="jobs-container">
      <section className="jobs">
        <article>
          <JobsList jobs={data} />
        </article>
      </section>
    </div>
  );
});

export default Jobs;
