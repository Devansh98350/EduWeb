// import React from 'react';
// import { Link } from 'react-router-dom';

// const nonAcademicJobs = [
//     {
//       id: 1,
//       title: "Data Analyst",
//       description: "Job description for Data Analyst position here...",
//     },
//     {
//       id: 2,
//       title: "Google AdWords Specialist",
//       description: "Job description for Google AdWords Specialist position here...",
//     },
//     {
//       id: 3,
//       title: "Business Development Executive",
//       description: "Job description for Business Development Executive position here...",
//     },
//     {
//       id: 4,
//       title: "Digital Marketing Manager",
//       description: "Job description for Digital Marketing Manager position here...",
//     },
//     {
//       id: 5,
//       title: "Front Office Executive",
//       description: "Job description for Front Office Executive position here...",
//     },
//     {
//       id: 6,
//       title: "Career Counsellor",
//       description: "Job description for Career Counsellor position here...",
//     },
//   ];

// const JobListings = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Job Openings</h1>
//       <div id="job-listings" className="space-y-4">
//         {nonAcademicJobs.map(job => (
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

// data/nonAcademicJobs.js

const nonAcademicJobs = [
  {
    id: 7,
    title: "Data Analyst",
    Subject: "Data Analysis",
    Division: "IT",
    Position: "Manager",
    brief:
      "IIT Academy is looking for experienced and energetic candidates for Data Analysts role, who can analyse Academic and Product Data, present the insights and define the actions basis on it making business.",
    qualification: [
      "Graduate / Post-Graduate | Age should not exceed 35 years",
      "Advanced Level knowledge of Excel, Google Spread Sheets and Automations (Google Sheet command and it’s automation is a must-have requirement for role)",
      "Knowledge of Zoho forms will serve as an added advantage to the candidate.",
      "Knowledge and Expertise on Power BI/ Tableau will grant bonus to the candidate.",
      "Strong written and verbal communication skills including technical writing skills.",
      "Strong in analysing the Data and creating dashboards.",
      "Strong Analytical Skills. Experience in analysing data to draw business-relevant conclusions and in data visualization techniques and tools.",
    ],
    experience: "3-5+ years",
    selectionProcess: "Personal Interview",
    jobRoles: [
      "Act as a Single Point of Contact for all data repositories and develop metrics to analyze pertinent information and share insights through various reports, dashboards on a sustainable basis.",
      "Deep-dive into data trends to identify root causes and improvement opportunities.",
      "Running and configuration of Automation process through google scripts.",
      "Identify trends, patterns and concerns emerging from data and highlight the same to management, with recommendations in a clear, concise manner to enable smooth and quick decision making.",
      "Data validation to ensure original quality of all numbers delivered through dashboards or otherwise.",
      "Build data models in order to create reporting infrastructure/dashboards for business process management and data mining - Execute quantitative analysis that translates data into actionable insights",
      "Drive data driven decision making through the stake holders",
      "Enable senior leadership decision making by streamlining the measurement of KPIs and identify the key drivers of these KPIs by building causal models.",
      "Responsible for defining, developing and communicating key metrics and business trends to leadership teams.",
      "Execute deep & complex quantitative analyses that translates data into actionable insights",
    ],
  },
  {
    id: 8,
    title: "Google AdWords Specialist",
    Subject: "Digital Marketing",
    Division: "Digital Marketing",
    Position: "Manager",
    responsibilities: [
      "Developing & implementing effective Google PPC campaigns to hit goals and ROI, both short term and long term",
      "Managing Google PPC budgets, while building & strengthening platform accounts & adjusting bids to optimise the ROI",
      "Tracking daily, weekly & monthly KPI's to identifying opportunities for improvement in performance & regularly reporting to management",
      "Keep learning & experimenting new ideas that will improve the ROI of ads.",
      "Executing & optimizing many PPC campaigns simultaneously",
      "Targeting selected audiences through researching keywords",
      "Staying current with PPC & SEM trend and techniques",
      "Tracking & managing conversion on Google Ads",
    ],
    requirements: [
      "Minimum 3 year’s experience as a Google PPC Executive/ Manager",
      "Strong analytical skills and dashboard creation",
      "Understanding of digital marketing concepts and SEO",
      "Experience with Google AdWords",
      "Working knowledge of Google Analytics or similar analytical tools",
      "Excellent communication, both verbal and written",
      "Analytically minded and strong in arithmetic",
      "AdWords certification is an advantage but not essential",
    ],
  },
  {
    id: 9,
    title: "Business Development Executive",
    Subject: "Sales",
    Division: "Sales",
    Position: "Executive",
    jobRoles: [
      "Develop a growth strategy focused both on financial gain and customer satisfaction",
      "Conduct research to identify new markets and customer needs",
      "Arrange business meetings with prospective clients",
      "Promote the company’s products/services addressing or predicting clients’ objectives",
      "Prepare sales contracts ensuring adherence to law-established rules and guidelines",
      "Keep records of sales, revenue, invoices etc.",
      "Provide trustworthy feedback and after-sales support",
      "Build long-term relationships with new and existing customers",
      "Develop entry level staff into valuable salespeople",
    ],
    requirements: [
      "Proven working experience as a business development manager, sales executive or a relevant role",
      "Proven sales track record",
      "Experience in customer support is a plus",
      "Proficiency in MS Office and CRM software",
      "Proficiency in English",
      "Market knowledge",
      "Communication and negotiation skills",
      "Ability to build rapport",
      "Time management and planning skills",
    ],
  },
  {
    id: 10,
    title: "Digital Marketing Manager",
    Subject: "Digital Marketing",
    Division: "Digital Marketing",
    Position: "Manager",
    jobRoles: [
      "Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns",
      "Design, build and maintain our social media presence",
      "Measure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs)",
      "Identify trends and insights, and optimize spend and performance based on the insights",
      "Brainstorm new and creative growth strategies",
      "Plan, execute, and measure experiments and conversion tests",
      "Collaborate with internal teams to create landing pages and optimize user experience",
      "Utilize strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touch points",
      "Instrument conversion points and optimize user funnels",
      "Collaborate with agencies and other vendor partners",
    ],
  },
  {
    id: 11,
    title: "Front Office Executive",
    Subject: "Sales",
    Division: "Sales",
    Position: "Executive",
  },
  {
    id: 12,
    title: "Career Counsellor",
    Subject: "Sales",
    Division: "Sales",
    Position: "Executive",
  },
];

export default nonAcademicJobs;
