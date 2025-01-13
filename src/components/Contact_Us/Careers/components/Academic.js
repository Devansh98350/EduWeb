// // components/JobListings.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const jobs = [
//   {
//     id: 1,
//     title: "Trainee Faculty",
//     description: "We are looking for dynamic and passionate candidates with strong academic background to join our Faculty Training Programme...",
//   },
//   {
//     id: 2,
//     title: "Academic Content Developer",
//     description: "We are looking for passionate candidates having the temperament for research & developing content for modules, and preparing questions...",
//   },
//   {
//     id: 3,
//     title: "Faculty Training Manager",
//     description: "We are looking for candidates having experience in planning & conduction of training sessions for employees to enhance subject knowledge...",
//   },
//   {
//     id: 4,
//     title: "SR Faculty/Faculty JEE Physics",
//     description: "Job description for SR Faculty/Faculty JEE Physics position here...",
//   },
//   {
//     id: 5,
//     title: "SR Faculty/Faculty JEE Maths",
//     description: "Job description for SR Faculty/Faculty JEE Maths position here...",
//   },
//   {
//     id: 6,
//     title: "SR Faculty/Faculty JEE Chemistry",
//     description: "Job description for SR Faculty/Faculty JEE Chemistry position here...",
//   },
// ];

// const JobListings = () => {
//   return (
//     <div className="p-6">
//       <h1 className="mb-6 text-3xl font-bold text-center">Job Openings</h1>
//       <div id="job-listings" className="space-y-4">
//         {jobs.map(job => (
//           <div key={job.id} className="p-4 border rounded shadow">
//             <h2 className="text-xl font-semibold">{job.title}</h2>
//             <p className="mb-2">{job.description}</p>
//             <Link to={`/apply/${job.id}`} className="text-blue-500 hover:underline">Apply</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListings;

// data/academicJobs.js

const academicJobs = [
  {
    id: 1,
    title: "Trainee Faculty",
    Division: "JEE",
    Subject: "Maths",
    Position: "Assistant",
    brief:
      "We are looking for dynamic and passionate candidates with strong academic background to join our Faculty Training Programme. We are offering an exciting career opportunity in teaching students of class 6 to 10. Selected candidates will undergo rigorous training and upon successful completion will assume the role of faculty at IIT Academy.",
    qualification: [
      "Graduate (must hold final year mark sheet) / Post-Graduate in relevant domain",
      "Applicant born on /after 01 January 1996",
      "0-2 years of experience in relevant field",
      "Good command over written & verbal communication in English",
    ],
    selectionProcess: "Written Test followed by Personal Interview",
    trainingDuration: "6-9 Months",
    stipend:
      "15000 per month (statutory deductions PF & ESI will be applicable)",
    jobDescription: [
      "Active engagement in regular training classes.",
      "Solving course modules, summarizing key concepts and preparing notes.",
      "Continuous performance evaluation through Written Test & Demo Sessions.",
      "Taking a proactive role in creating module content, question papers and ensuring content quality through proof reading.",
      "Interacting with students at doubt counters to address their doubts.",
      "Active participation in On-line/Off-line answer sheets evaluation.",
      "Live system exposure through involvement in PTMs, Open Sessions, Doubt Classes, Health Camps & various student activities.",
    ],
    terms: [
      "After successful completion of training, candidate can be placed as faculty at any IIT Academy center in India depending upon the prevailing vacancies at that time.",
      "While we offer best package aligned with industry standards, it’s important to note that remuneration after the training will be sole prerogative of the HR department of IIT Academy.",
      "Candidates failing to meet the desired performance criteria during training may be asked to exit the training programme prematurely and stipend from that month will not be paid.",
    ],
  },
  {
    id: 2,
    title: "Academic Content Developer",
    Subject: "Science",
    Division: "Foundation",
    Position: "Assistant Faculty",

    brief:
      "We are looking for passionate candidates having the temperament for research & developing content for modules, and preparing questions.",
    qualification: [
      "Graduate / Post-Graduate, with exceptional Subject knowledge.",
      "3-5+ years' experience in relevant field.",
      "Must be Tech-Savvy (MS Office & Google Suit) and possess soft skills.",
      "Conceptual understanding of how students learn should be top-notch, specifically in their respective subject areas.",
      "Age should not exceed 35 years.",
    ],
    selectionProcess: "Written Test/Personal Interview",
    jobDescription: [
      "Develop content to explain topics in a creative and innovative approach.",
      "Work on curating and writing academic content by cultivating new questions, problems, and exercises with their solutions (in a step-by-step manner).",
      "Set learning objectives for each course & determine evaluation criteria.",
      "Updating the existing content and questions and maintaining the content library.",
      "Conduct evaluations to identify areas of improvement by collaborating with other departments and team members.",
      "Assuring authenticity and proofreading of content before publication.",
      "Capable of managing work within timelines.",
    ],
  },
  {
    id: 3,
    title: "Faculty Training Manager",
    Subject: "PCB",
    Division: "NEET",
    Position: "Manager",

    brief:
      "We are looking for candidate having experience in planning & conduction of training sessions for employees to enhance subject knowledge, teaching skills and interpersonal skills.",
    qualification: [
      "3-5 years of experience as a Training Specialist or similar role",
      "Ability to lead a full training cycle",
      "Good communication, interpersonal & organizational skills",
      "Graduate/Postgraduate (Candidate with Academic Background and Degree in Human Resources will be preferred)",
      "Age not exceeding 38 years",
      "Must be Tech Savvy",
    ],
    selectionProcess: "Group Discussion/Personal Interview",
    jobDescription: [
      "Formal Welcome and induction of new recruits.",
      "Identify and assess the training needs of the new recruits and existing employees.",
      "Plan, Design & implement individualized and group training programs that address specific needs.",
      "Assess employees’ skills, talents, performance and productivity.",
      "Plan & arrange written & Demo evaluations for Trainees with advice for enhancing effectiveness of teaching.",
      "Tracking growth & progress of all Trainees.",
      "Effectively communicate with team members, trainers and management.",
      "Prepare, present and maintain Training reports.",
      "Drive brand values and philosophy through all training and development activities.",
    ],
  },
  {
    id: 4,
    title: "Senior Faculty JEE Physics",
    Subject: "Physics",
    Division: "JEE",
    Position: "Faculty",

    jobRole: [
      "Prepare for and teach students",
      "Track student work",
      "Classroom management",
      "Mentoring students",
    ],
    qualification: [
      "B.Tech/M.Tech/M.Sc./Ph.D.",
      "Min 2 years of teaching experience",
      "Age limit: 35 years",
    ],
    jobType: "Full Time",
    jobLocation: "Patna",
  },
  {
    id: 5,
    title: "Senior Faculty JEE Maths",
    Subject: "Maths",
    Division: "JEE",
    Position: "Faculty",

    jobRole: [
      "Prepare for and teach students",
      "Track student work",
      "Classroom management",
      "Mentoring students",
    ],
    qualification: [
      "B.Tech/M.Tech/M.Sc./Ph.D.",
      "Min 2 years of teaching experience",
      "Age limit: 35 years",
    ],
    jobType: "Full Time",
    jobLocation: "Patna",
  },
  {
    id: 6,
    title: "Senior Faculty JEE Chemistry",
    Subject: "Chemistry",
    Division: "JEE",
    Position: "Faculty",

    jobRole: [
      "Prepare for and teach students",
      "Track student work",
      "Classroom management",
      "Mentoring students",
    ],
    qualification: [
      "B.Tech/M.Tech/M.Sc./Ph.D.",
      "Min 2 years of teaching experience",
      "Age limit: 35 years",
    ],
    jobType: "Full Time",
    jobLocation: "Patna",
  },
];

export default academicJobs;
