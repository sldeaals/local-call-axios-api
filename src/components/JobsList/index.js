import { memo, useMemo } from "react";
import PropTypes from "prop-types";

import "./style.css";
import i18n from "./i18n/en";

const JobsList = memo((props) => {
  const { jobs } = props;

  const items = useMemo(
    () =>
      jobs.map((item) => {
        const {
          id,
          company_name,
          job_name,
          job_type,
          location,
          is_featured,
          is_new,
          date_posted
        } = item;

        return (
          <li className={is_featured ? "job feature" : "job"} key={id}>
            <div className="main-content">
              <span className="company">{company_name}</span>
              <span className="title bold">{job_name}</span>
              <div className="type-and-region">
                <span className="company">{job_type}</span>
                {job_type && location && <span>/</span>}
                <span className="region company">{location}</span>
              </div>
            </div>
            <div className="side-content">
              <span
                className={`is-featured featured-area ${
                  is_featured ? "bold" : ""
                }`}
              >
                {is_featured ? "Featured" : date_posted}
              </span>
              {is_new && (
                <span className="is-new is-new-area">{i18n.isNew}</span>
              )}
              {is_featured && (
                <div className="highlight-bar highlight-area"></div>
              )}
            </div>
          </li>
        );
      }),
    [jobs]
  );

  return <ul className="list">{items}</ul>;
});

JobsList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      company_name: PropTypes.string,
      job_name: PropTypes.string,
      job_type: PropTypes.string,
      location: PropTypes.string,
      is_featured: PropTypes.bool,
      is_new: PropTypes.bool,
      date_posted: PropTypes.string
    })
  )
};

export default JobsList;
