import React from "react";
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";
import jobsData from "../jobs.json";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome
  //       ? "/api/jobs?_limit=3"
  //       : "/api/jobs";
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.log("Error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);
  
  useEffect(() => {
    setJobs(isHome ? jobsData.jobs.slice(0, 3) : jobsData.jobs);
    setLoading(false);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Recent Jobs" : "Browse All Vacancies"}
        </h2>

        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
