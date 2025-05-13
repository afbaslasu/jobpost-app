import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
      // title="Tech Job Post Main Title"
      // subtitle="Tech Job Post Subtitle should be written here"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />

    </>
  );
};

export default App;
