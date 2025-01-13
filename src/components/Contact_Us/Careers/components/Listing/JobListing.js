import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./JobListing.css";
import Layout from "../../../../Layout";
import backgroundImg from "../../../../../assets/contact_us/bk.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faXTwitter,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const jobDetails = {
  "trainee-faculty": {
    title: "Trainee Faculty",
    keywords:
      "Frontend web development internships for students, HTML, CSS, JavaScript internships, Learn React and Angular through internships, Web development internships, Frontend developer internships for college students",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Trainee Faculty</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/trainee-faculty`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is an Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Trainee Faculty (Maths)
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are looking for dynamic and passionate candidates with a strong
              academic background to join our Faculty Training Programme. This
              internship offers an exciting career opportunity in teaching
              students from class 6 to 10. Selected candidates will undergo
              rigorous training and, upon successful completion, will assume the
              role of faculty at IIT Academy.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Active engagement in regular training classes.</li>
              <li>
                Solving course modules, summarizing key concepts, and preparing
                notes.
              </li>
              <li>
                Continuous performance evaluation through Written Test & Demo
                Sessions.
              </li>
              <li>
                Taking a proactive role in creating module content, question
                papers, and ensuring content quality through proofreading.
              </li>
              <li>
                Interacting with students at doubt counters to address their
                doubts.
              </li>
              <li>
                Active participation in online/offline answer sheet evaluation.
              </li>
              <li>
                Live system exposure through involvement in PTMs, Open Sessions,
                Doubt Classes, Health Camps & various student activities.
              </li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Graduate (must hold final year mark sheet) / Post-Graduate in a
                relevant domain.
              </li>
              <li>Applicant born on or after 01 January 1996.</li>
              <li>0-2 years of experience in the relevant field.</li>
              <li>
                Good command over written and verbal communication in English.
              </li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Selection Process:
            </h3>
            <p>Written Test followed by a Personal Interview.</p>
            <h3 style={{ color: "black", fontSize: "15px" }}>Stipend:</h3>
            <p>
              ₹15,000 per month (statutory deductions for PF & ESI will be
              applicable).
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Training Duration:
            </h3>
            <p>6-9 Months</p>
            <h3 style={{ color: "black", fontSize: "15px" }}>Terms:</h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                After successful completion of training, candidates can be
                placed as faculty at any IIT Academy center in India depending
                on the prevailing vacancies at that time.
              </li>
              <li>
                While we offer the best package aligned with industry standards,
                it’s important to note that remuneration after the training will
                be solely at the discretion of the HR department of IIT Academy.
              </li>
              <li>
                Candidates failing to meet the desired performance criteria
                during training may be asked to exit the training programme
                prematurely, and the stipend from that month will not be paid.
              </li>
            </ul>
          </div>
          <div className="job-info">
            <h3 style={{ color: "black", fontSize: "18px" }}>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed-Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Freshers or Early Professionals
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "academic-content-developer": {
    title: "Academic Content Developer",
    keywords:
      "Full stack developer internships for college students, Backend and Trainee Facultys, Full stack development internships, Learn MERN stack internships, Web development internships for freshers",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Academic Content Developer</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/academic-content-developer`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a remote position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Academic Content Developer
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are looking for passionate candidates who have the temperament
              for research and developing content for modules and preparing
              questions. This position offers a fantastic opportunity to
              contribute creatively to the educational landscape.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Develop content to explain topics in a creative and innovative
                approach.
              </li>
              <li>
                Work on curating and writing academic content by cultivating new
                questions, problems, and exercises with their solutions (in a
                step-by-step manner).
              </li>
              <li>
                Set learning objectives for each course and determine evaluation
                criteria.
              </li>
              <li>
                Update existing content and questions while maintaining the
                content library.
              </li>
              <li>
                Conduct evaluations to identify areas of improvement by
                collaborating with other departments and team members.
              </li>
              <li>
                Ensure authenticity and proofreading of content before
                publication.
              </li>
              <li>Capable of managing work within timelines.</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Graduate/Post-Graduate with exceptional subject knowledge.
              </li>
              <li>3-5+ years of experience in the relevant field.</li>
              <li>
                Must be tech-savvy (MS Office & Google Suite) and possess soft
                skills.
              </li>
              <li>
                Strong conceptual understanding of how students learn,
                particularly in their respective subject areas.
              </li>
              <li>Age should not exceed 35 years.</li>
            </ul>

            <h3 style={{ color: "black", fontSize: "15px" }}>
              Selection Process:
            </h3>
            <p>Written Test/Personal Interview</p>
          </div>
          <div className="job-info">
            <h3 style={{ color: "black", fontSize: "18px" }}>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed-Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professionals
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "faculty-training-manager": {
    title: "Faculty Training Manager",
    keywords:
      "Python development internships for students, Python programming internships, Learn Python development internships, Python coding internships for freshers, Software development with Python internships",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Faculty Training Manager</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/faculty-training-manager`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              <strong>Job Description</strong>
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Faculty Training Manager
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p>
              We are looking for candidate having experience in planning &
              conduction of training sessions for employees to enhance subject
              knowledge, teaching skills and interpersonal skills.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Formal welcome and induction of new recruits.</li>
              <li>
                Identify and assess the training needs of new recruits and
                existing employees.
              </li>
              <li>
                Plan, design, and implement individualized and group training
                programs that address specific needs.
              </li>
              <li>
                Assess employees’ skills, talents, performance, and
                productivity.
              </li>
              <li>
                Plan and arrange written and demo evaluations for trainees with
                advice for enhancing teaching effectiveness.
              </li>
              <li>Track the growth and progress of all trainees.</li>
              <li>
                Effectively communicate with team members, trainers, and
                management.
              </li>
              <li>Prepare, present, and maintain training reports.</li>
              <li>
                Drive brand values and philosophy through all training and
                development activities.
              </li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                3-5 years of experience as a Training Specialist or similar
                role.
              </li>
              <li>Ability to lead a full training cycle.</li>
              <li>
                Good communication, interpersonal, and organizational skills.
              </li>
              <li>
                Graduate/Postgraduate (Candidates with an academic background
                and degree in Human Resources will be preferred).
              </li>
              <li>Age not exceeding 38 years.</li>
              <li>Must be tech-savvy.</li>
            </ul>

            <h3 style={{ color: "black", fontSize: "15px" }}>
              Selection Process:
            </h3>
            <p>Group Discussion/Personal Interview.</p>
          </div>
          <div className="job-info">
            <h3 style={{ color: "black", fontSize: "18px" }}>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed-Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professionals
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-physics": {
    title: "Senior Faculty JEE Physics",
    keyword:
      "Java development internships for students, Learn Java programming internships, Software development internships in Java, Java coding internships for engineering students, Java internships for college student",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Physics</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/senior-faculty-jee-physics`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check out this job&body=Check this job: YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Senior Faculty JEE Physics
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              As a Senior Faculty for JEE Physics, you will play a crucial role
              in guiding and mentoring students in their preparation for JEE
              exams. This position offers an excellent opportunity to share your
              knowledge and expertise in Physics while making a significant
              impact on students' academic journeys.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Prepare for and teach students in Physics.</li>
              <li>Track student work and progress.</li>
              <li>Manage classroom effectively.</li>
              <li>Provide mentorship to students.</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>B.Tech/M.Tech/M.Sc./Ph.D.</li>
              <li>Min 3 years of teaching experience</li>
              <li>Age limit: 35 years</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed-tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professionals
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-maths": {
    title: "Senior Faculty JEE Maths",
    keyword:
      "Machine learning internships for students, Learn machine learning internships, Data science and machine learning internships, Applied machine learning internships for freshers, AI and ML internships",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Maths</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/senior-faculty-jee-maths`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="mailto:?subject=Check%20this%20Job&body=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Senior Faculty JEE Maths
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              As a Senior Faculty for JEE Maths, you will play a crucial role in
              guiding and mentoring students in their preparation for JEE exams.
              This position offers an excellent opportunity to share your
              knowledge and expertise in Maths while making a significant impact
              on students' academic journeys.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Prepare for and teach students</li>
              <li>Track student work</li>
              <li>Mentoring students</li>
              <li>Classroom management</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>B.Tech/M.Tech/M.Sc./Ph.D.</li>
              <li>Min 2 years of teaching experience</li>
              <li>Age limit: 35 years</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professional
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "senior-faculty-jee-chemistry": {
    title: "Senior Faculty JEE Chemistry",
    keyword:
      "Android development internships for students, Learn Android app development internships, Android programming internships for college students, Kotlin development internships for students, Mobile app development internships",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Senior Faculty JEE Chemistry</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/senior-faculty-jee-chemistry`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>

              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Senior Faculty JEE Chemistry
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              As a Senior Faculty for JEE Chemistry, you will play a crucial
              role in guiding and mentoring students in their preparation for
              JEE exams. This position offers an excellent opportunity to share
              your knowledge and expertise in Chemistry while making a
              significant impact on students' academic journeys.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Prepare for and teach students</li>
              <li>Track student work</li>
              <li>Mentoring students</li>
              <li>Classroom management</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>B.Tech/M.Tech/M.Sc./Ph.D.</li>
              <li>Min 3 years of teaching experience</li>
              <li>Age limit: 35 years</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professional
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "data-analyst": {
    title: "Data Analyst",
    keyword:
      "UI/UX design internships for students, Learn UI/UX design internships, User experience design internships, Figma and Sketch internships for freshers, UX design internships for college students",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Data Analyst</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/Data Analyst`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Data Analyst
            </h4>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              IIT Academy is looking for experienced and energetic candidates
              for Data Analysts role, who can analyse Academic and Product Data,
              present the insights and define the actions basis on it making
              business.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Act as a Single Point of Contact for all data repositories and
                develop metrics to analyze pertinent information and share
                insights through various reports and dashboards on a sustainable
                basis.
              </li>
              <li>
                Deep-dive into data trends to identify root causes and
                improvement opportunities.
              </li>
              <li>
                Run and configure automation processes through Google Scripts.
              </li>
              <li>
                Identify trends, patterns, and concerns emerging from data and
                highlight them to management, with recommendations in a clear,
                concise manner to enable smooth and quick decision-making.
              </li>
              <li>
                Perform data validation to ensure the original quality of all
                numbers delivered through dashboards or other means.
              </li>
              <li>
                Build data models to create reporting infrastructure/dashboards
                for business process management and data mining.
              </li>
              <li>
                Execute quantitative analysis that translates data into
                actionable insights.
              </li>
              <li>
                Drive data-driven decision-making through the stakeholders.
              </li>
              <li>
                Enable senior leadership decision-making by streamlining the
                measurement of KPIs and identifying the key drivers of these
                KPIs by building causal models.
              </li>
              <li>
                Define, develop, and communicate key metrics and business trends
                to leadership teams.
              </li>
              <li>
                Execute deep and complex quantitative analyses that translate
                data into actionable insights.
              </li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Graduate / Post-Graduate | Age should not exceed 35 years.
              </li>
              <li>
                Advanced Level knowledge of Excel, Google Spreadsheets, and
                Automations (Google Sheet commands and its automation is a
                must-have requirement for the role).
              </li>
              <li>
                Knowledge of Zoho Forms will serve as an added advantage to the
                candidate.
              </li>
              <li>
                Knowledge and expertise in Power BI/Tableau will grant a bonus
                to the candidate.
              </li>
              <li>
                Strong written and verbal communication skills, including
                technical writing skills.
              </li>
              <li>Strong in analyzing data and creating dashboards.</li>
              <li>
                Strong analytical skills, experience in analyzing data to draw
                business-relevant conclusions, and expertise in data
                visualization techniques and tools.
              </li>
            </ul>
          </div>
          <div className="job-info">
            <h3>Job Information</h3>
            <li>
              <strong>Industry:</strong> Ed Tech
            </li>
            <li>
              <strong>Eligibility:</strong> Experienced Professional
            </li>
            <li>Onsite Job</li>
          </div>
        </div>
      </div>
    ),
  },

  "google-adwords-specialist": {
    title: "Google AdWords Specialist",
    keyword: "",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Google AdWords Specialist</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/google-adwords-specialist`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Google AdWords Specialist
            </h4>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are seeking a Google AdWords Specialist with 2-3 years of
              experience to manage and optimize our PPC campaigns across Google
              Ads. The ideal candidate will analyze performance metrics,
              implement effective ad strategies, and drive targeted traffic to
              enhance conversion rates. Strong analytical skills and a proven
              track record in maximizing ROI are essential.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Developing and implementing effective Google PPC campaigns to
                hit goals and ROI, both short-term and long-term.
              </li>
              <li>
                Managing Google PPC budgets while building and strengthening
                platform accounts and adjusting bids to optimize the ROI.
              </li>
              <li>
                Tracking daily, weekly, and monthly KPIs to identify
                opportunities for improvement in performance and regularly
                reporting to management.
              </li>
              <li>
                Continuously learning and experimenting with new ideas to
                improve the ROI of ads.
              </li>
              <li>
                Executing and optimizing multiple PPC campaigns simultaneously.
              </li>
              <li>Targeting selected audiences through keyword research.</li>
              <li>Staying current with PPC and SEM trends and techniques.</li>
              <li>Tracking and managing conversions on Google Ads.</li>
            </ul>

            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Minimum 3 years' experience as a Google PPC Executive/Manager
              </li>
              <li>Strong analytical skills and dashboard creation</li>
              <li>Understanding of digital marketing concepts and SEO</li>
              <li>Experience with Google AdWords</li>
              <li>
                Working knowledge of Google Analytics or similar analytical
                tools
              </li>
              <li>Excellent communication, both verbal and written</li>
              <li>Analytically minded and strong in arithmetic</li>
              <li>AdWords certification is an advantage but not essential</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>Job Information</h3>
            <li>
              <strong>Industry:</strong> IT Services
            </li>
            <li>
              <strong>Eligibility:</strong> Experienced Professional
            </li>
            <li>Onsite Job</li>
          </div>
        </div>
      </div>
    ),
  },

  "business-development-executive": {
    title: "Business Development Executive",
    keyword: "",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Business Development Executive</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/business-development-executive`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h4 style={{ marginTop: "25px" }}>
              <strong>Job Title:</strong> Business Development Executive
            </h4>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are seeking a motivated Business Development Executive with 2-3
              years of experience to drive growth and expand our client base.
              The ideal candidate will be responsible for identifying new
              business opportunities, building strong relationships with
              potential clients, and collaborating with cross-functional teams
              to achieve sales targets. Strong communication and negotiation
              skills are essential for success in this role.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Develop a growth strategy focused both on financial gain and
                customer satisfaction
              </li>
              <li>
                Conduct research to identify new markets and customer needs
              </li>
              <li>Arrange business meetings with prospective clients</li>
              <li>
                Promote the company’s products/services addressing or predicting
                clients’ objectives
              </li>
              <li>
                Prepare sales contracts ensuring adherence to law-established
                rules and guidelines
              </li>
              <li>Keep records of sales, revenue, invoices etc.</li>
              <li>Provide trustworthy feedback and after-sales support</li>
              <li>
                Build long-term relationships with new and existing customers
              </li>
              <li>Develop entry-level staff into valuable salespeople</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Proven working experience as a business development manager,
                sales executive, or a relevant role
              </li>
              <li>Proven sales track record</li>
              <li>Experience in customer support is a plus</li>
              <li>Proficiency in MS Office and CRM software</li>
              <li>Proficiency in English</li>
              <li>Market knowledge</li>
              <li>Communication and negotiation skills</li>
              <li>Ability to build rapport</li>
              <li>Time management and planning skills</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>Job Information</h3>
            <li>
              <strong>Industry:</strong> Ed Tech
            </li>
            <li>
              <strong>Eligibility:</strong> Experienced Professional
            </li>
            <li>Onsite Job</li>
          </div>
        </div>
      </div>
    ),
  },

  "digital-marketing-manager": {
    title: "Digital Marketing Manager",
    keyword:
      "Artificial Intelligence internships for students, Learn AI and machine learning internships, AI programming internships for freshers, AI research internships for college students, AI development internships",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Digital Marketing Manager</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/digital-marketing-manager`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Digital Marketing Manager
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are seeking a results-driven Digital Marketing Manager with 2-3
              years of experience to develop, implement, and optimize online
              marketing strategies. The ideal candidate will have a strong
              understanding of SEO, SEM, social media, and email marketing,
              along with the ability to analyze campaign performance to drive
              business growth. Excellent communication skills and a creative
              mindset are essential for collaborating with cross-functional
              teams and executing effective marketing campaigns.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Plan and execute all digital marketing, including SEO/SEM,
                marketing database, email, social media, and display advertising
                campaigns.
              </li>
              <li>Design, build, and maintain our social media presence.</li>
              <li>
                Measure and report performance of all digital marketing
                campaigns, and assess against goals (ROI and KPIs).
              </li>
              <li>
                Identify trends and insights, and optimize spend and performance
                based on the insights.
              </li>
              <li>Brainstorm new and creative growth strategies.</li>
              <li>
                Plan, execute, and measure experiments and conversion tests.
              </li>
              <li>
                Collaborate with internal teams to create landing pages and
                optimize user experience.
              </li>
              <li>
                Utilize strong analytical ability to evaluate end-to-end
                customer experience across multiple channels and customer touch
                points.
              </li>
              <li>Instrument conversion points and optimize user funnels.</li>
              <li>Collaborate with agencies and other vendor partners.</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Bachelor's degree in Marketing or related field, with
                certifications in Digital Marketing preferred.
              </li>
              <li>
                2-3 years of experience in SEO, SEM, social media, email
                campaigns, and performance analytics.
              </li>
              <li>
                Proficient in tools like Google Analytics, Google Ads, and
                social media management platforms.
              </li>
              <li>
                Strong analytical skills to measure and optimize campaigns based
                on ROI and KPIs.
              </li>
              <li>
                Excellent communication skills for content creation and
                cross-functional collaboration.
              </li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professional
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "front-office-executive": {
    title: "Front Office Executive",
    keyword:
      "Data science and machine learning internships, Data visualization internships for freshers, Learn data science internships, Data science internships for students, Data analysis internships",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Front Office Executive</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/front-office-executive`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Job Description
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Front Office Executive
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p style={{ textAlign: "justify" }}>
              We are looking for a friendly and professional Front Office
              Executive with 2-3 years of experience to manage the front desk
              and provide excellent customer service. The ideal candidate will
              be responsible for greeting visitors, handling inquiries, and
              supporting various administrative tasks. Strong communication and
              multitasking skills are essential for ensuring a smooth and
              efficient front office operation.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>Greet and welcome guests as they arrive at the office</li>
              <li>
                Manage incoming calls and direct them to the appropriate
                departments
              </li>
              <li>Handle visitor inquiries and provide accurate information</li>
              <li>
                Maintain the front office area, ensuring it is clean and
                organized
              </li>
              <li>Schedule appointments and manage calendars for staff</li>
              <li>
                Assist with administrative tasks such as filing, data entry, and
                report preparation
              </li>
              <li>
                Coordinate with other departments to ensure efficient office
                operations
              </li>
              <li>Manage office supplies and place orders as needed</li>
              <li>Ensure compliance with company policies and procedures</li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Proven experience as a front office executive or similar role
              </li>
              <li>Excellent communication and interpersonal skills</li>
              <li>
                Proficient in MS Office (Word, Excel, PowerPoint) and office
                management software
              </li>
              <li>Strong organizational and multitasking abilities</li>
              <li>
                Ability to handle stressful situations with professionalism
              </li>
              <li>Attention to detail and problem-solving skills</li>
              <li>
                High school diploma; additional certification in office
                management is a plus
              </li>
              <li>
                Proficiency in English; knowledge of additional languages is a
                plus
              </li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Freshers/Experienced Professional
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  "career-counsellor": {
    title: "Career Counsellor",
    keyword:
      "C++ programming internships for students, Learn C++ development internships, Software development internships in C++, C++ coding internships for freshers, C++ programming internships for college students",
    description: (
      <div className="job-listing-container">
        <div
          className="job-listing-header1"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="job-header-content">
            <h1 style={{ color: "orange", fontWeight: "bold" }}>
              IIT Academy | Full time
            </h1>
            <h2>Career Counsellor</h2>
            <p>In-office Job</p>

            <Link to={`/job-application/career-counsellor`}>
              <button>I'm interested</button>
            </Link>
            <p>Share job via:</p>
            <div className="share-icons">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://wa.me/?text=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://t.me/share/url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="linkedin-icon23"
                />
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url?url=YOUR_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  rotation={45}
                  className="linkedin-icon23"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="job-info-description">
          <div className="job-description">
            <h3>
              <strong>Job Description</strong>
            </h3>
            <p>This is a Onsite position.</p>
            <h3
              style={{ color: "black", fontSize: "15px", fontWeight: "normal" }}
            >
              <strong>Job Title:</strong> Career Counsellor
            </h3>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Position Overview:
            </h3>
            <p>
              We are looking for a dedicated Career Counsellor with 2-3 years of
              experience to provide guidance and support to students and
              professionals in their career paths. The ideal candidate will be
              responsible for assessing clients' interests and skills, providing
              tailored advice on career options, and assisting with job search
              strategies. Strong interpersonal and communication skills are
              essential for helping clients make informed decisions about their
              careers.
            </p>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Responsibilities:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Conduct one-on-one counselling sessions to assess clients'
                career goals and aspirations
              </li>
              <li>
                Provide information on career options, job market trends, and
                educational requirements
              </li>
              <li>
                Assist clients in developing resumes and preparing for
                interviews
              </li>
              <li>
                Create and facilitate workshops on job search strategies,
                networking, and professional development
              </li>
              <li>
                Maintain updated knowledge of employment trends and industry
                requirements
              </li>
              <li>
                Develop and implement career development programs for students
                and professionals
              </li>
              <li>
                Collaborate with educational institutions and employers to
                create opportunities for clients
              </li>
              <li>
                Provide ongoing support and resources to clients throughout
                their career journeys
              </li>
            </ul>
            <h3 style={{ color: "black", fontSize: "15px" }}>
              Qualifications:
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                Bachelor’s degree in Psychology, Human Resources, or a related
                field
              </li>
              <li>
                2-3 years of experience in career counselling or related roles
              </li>
              <li>
                Strong knowledge of career development theories and practices
              </li>
              <li>Excellent communication and interpersonal skills</li>
              <li>Proficiency in MS Office and counselling software</li>
              <li>Ability to build rapport and trust with clients</li>
              <li>Strong organizational and time management skills</li>
              <li>Empathy and a genuine interest in helping others succeed</li>
            </ul>
          </div>
          <div className="job-info">
            <h3>
              <strong>Job Information</strong>
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "0",
                marginLeft: "20px",
              }}
            >
              <li>
                <strong>Industry:</strong> Ed Tech
              </li>
              <li>
                <strong>Eligibility:</strong> Experienced Professional
              </li>
              <li>Onsite Job</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
};

const JobListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { domain } = useParams();
  const job = jobDetails[domain];

  if (!job) {
    return <div>Job listing not found</div>;
  }

  return (
    <Layout
      title={`${job.title} - IIT Academy`}
      keyword={job.keywords}
      // description={job.description}
    >
      <div className="job-listing">
        {/* <h1>{job.title}</h1> */}
        <div>{job.description}</div>
        <Link to={`/job-application/${domain}`}>
          <button className="apply-button22">I'm interested</button>
        </Link>
      </div>
    </Layout>
  );
};

export default JobListing;
