import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import academicJobs from "./components/Academic";
import nonAcademicJobs from "./components/NonAcademic";
import JobFilter from "./components/JobFilter";
import "./Career.css";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [jobType, setJobType] = useState("ACADEMIC");
  const [division, setDivision] = useState("ALL");
  const [subject, setSubject] = useState("ALL");
  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    const initialJobs = jobType === "ACADEMIC" ? academicJobs : nonAcademicJobs;
    setFilteredJobs(applyFilters(initialJobs));
  }, [jobType]);
  const applyFilters = (jobs) => {
    return jobs.filter((job) => {
      return (
        (jobType === "ALL" || job.type === jobType) &&
        (division === "ALL" || job.division === division) &&
        (subject === "ALL" || job.subject === subject)
      );
    });
  };
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "jobType":
        setJobType(value);
        break;
      case "division":
        setDivision(value);
        break;
      case "subject":
        setSubject(value);
        break;
      default:
        break;
    }
  };
  const handleSearch = () => {
    const jobs = jobType === "ACADEMIC" ? academicJobs : nonAcademicJobs;
    setFilteredJobs(applyFilters(jobs));
  };
  const jobsToDisplay = jobType === "ACADEMIC" ? academicJobs : nonAcademicJobs;
  return (
    <div>
      <Layout
        title="Careers-IIT Academy"
        description="Join IIT Academy and be a part of India's premier educational team, shaping the future of tomorrow's emerging leaders"
        keywords="Careers IIT Academy, Opportunities at IIT Academy, Full-time Role at IIT Academy, Employment IIT Academy"
      >
        <div className="career-page">
          <p className="career-main">Careers at IIT Academy</p>
          <p className="career-heading">Working at IIT Academy</p>
          <p className="career-description">
            Good people are the success of any Organization. In IIT Academy, it
            is our vision to bring together the best people and give them the
            best environment along with good career opportunities and growth. If
            your dreams are fuelled by a desire to make a contribution to the
            Education Sector, then move a step ahead.
          </p>
          <p className="career-description">
            We are looking for people who have an excellent attitude,
            perseverance, and a penchant to work in an environment charged with
            excellence and driven by values.
          </p>
          <p className="career-heading">IIT Academy Operation</p>
          <p className="career-description">
            IIT Academy’s operations are divided across various functional
            departments such as Academics (Physics, Chemistry and Mathematics,
            Biology, Science), Academic Operations, Strategy, Business
            Promotion, Admissions, Marketing, Advertising & Brand Management,
            Finance & Accounts, Personnel & Administration, HRD & Training, &
            Business Development.
          </p>
          <p className="career-description">
            IIT Academy is always on the lookout for talented, learned
            individuals who are ambitious, who love challenges, and who have a
            passion to excel, to be accommodated at various positions in our
            centres.
          </p>
          <p className="career-description">
            Towards this objective, IIT Academy hires people at entry level, mid
            level, and senior positions for the various above mentioned
            functional departments.
          </p>
          <p className="career-description">
            We aspire to make IIT Academy Family a peaceful, enjoyable,
            comfortable, and the best place to work, where every motivated and
            self-driven individual will bring in extraordinary results.
          </p>
          <p className="career-heading">Current Openings</p>
          <div className="w-[90%] mx-auto">
            <JobFilter
              jobType={jobType}
              Division={division}
              Subject={subject}
              onChange={handleFilterChange}
              onSearch={handleSearch}
            />

            {/*} <h1 className="mb-6 text-3xl font-bold text-center">
          Job Openings for{" "}
          {jobType === "ACADEMIC" ? "Academic" : "Non-Academic"} Jobs
        </h1>
        <div
          id="job-listings"
          className="flex flex-col items-center justify-center w-full space-y-4"
        >
          {filteredJobs.map((job) => (
            <SubjectCard
              key={job.id}
              title={job.title}
              division={job.Division}
              position={job.Position}
            />
          ))}
        </div>*/}
          </div>
          ;
          <p className="career-description" style={{ fontSize: "1.2em" }}>
            For any issues, mail us at{" "}
            <a href="mailto:info@iitacademy.in">info@iitacademy.in</a> or call
            us at <a href="tel:9205704041">9205704041</a>.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Careers;

// import SubjectCard from "./components/JobCard";
