import React, { useState } from "react";
import academicJobs from "./Academic";
import nonAcademicJobs from "./NonAcademic";
import JobCard from "./JobCard";

const JobFilter = () => {
  const [jobType, setJobType] = useState("All");
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");

  const academicDivisions = {
    JEE: ["Maths", "Physics", "Chemistry"],
    NEET: ["Physics", "Chemistry", "PCB"],
    Foundation: ["Maths", "Science", "Social Science"],
  };

  const nonAcademicDivisions = {
    IT: ["Data Analysis"],
    "Digital Marketing": ["Digital Marketing"],
    Sales: ["Sales"],
  };

  const allDivisions = {
    ...academicDivisions,
    ...nonAcademicDivisions,
  };

  const divisions =
    jobType === "Academic"
      ? academicDivisions
      : jobType === "Non-Academic"
      ? nonAcademicDivisions
      : allDivisions;

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
    setDivision("");
    setSubject("");
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
    setSubject("");
  };

  const handleSubjectChange = (e) => setSubject(e.target.value);

  const filterJobs = () => {
    const jobs =
      jobType === "Academic"
        ? academicJobs
        : jobType === "Non-Academic"
        ? nonAcademicJobs
        : [...academicJobs, ...nonAcademicJobs];

    return jobs.filter((job) => {
      return (
        (!division || job.Division === division) &&
        (!subject || job.Subject === subject)
      );
    });
  };

  const filteredJobs = filterJobs();

  return (
    <div>
      <div className="mb-0 p-2 bg-slate-100 h-auto flex flex-col sm:flex-row flex-wrap justify-evenly items-center gap-0">
        <label className="flex flex-col sm:flex-row items-center">
          <span className="mr-2 mb-3">Job Type:</span>
          <select
            value={jobType}
            onChange={handleJobTypeChange}
            className="p-1 border rounded"
          >
            <option value="All">All</option>
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>
          </select>
        </label>
        <label className="flex flex-col sm:flex-row items-center">
          <span className="mr-2 mb-3">Division:</span>
          <select
            value={division}
            onChange={handleDivisionChange}
            className="p-1 border rounded"
          >
            <option value="">All</option>
            {Object.keys(divisions).map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col sm:flex-row items-center">
          <span className="mr-2 mb-3">Subject:</span>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="p-1 border rounded"
          >
            <option value="">All</option>
            {division &&
              divisions[division].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </label>
      </div>

      <div className="mt-16">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                division={job.Division}
                subject={job.Subject}
                location={job.Location}
                jobId={job.id}
                jobType={jobType}
              />
            ))}
          </div>
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobFilter;
