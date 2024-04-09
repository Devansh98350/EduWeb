import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import Internshipform from "./../../Contact_Us/Internship/Internship_form/Internship_form.js";
import styled from "styled-components";

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }
  .phone {
    text-decoration: none;
  }
  .phone:hover {
    font-weight: bold;
    color: red;
  }
  .heading {
    text-align: center;
    color: black;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
  }
  @media only screen and (max-width: 768px) {
    .body {
      width: 96%;
      margin: auto;
    }
    .heading {
      font-size: 17.5px;
      text-align: center;
      width: 96%;
      margin-left: 2%;
    }
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <Layout title="Internship-IIT Academy">
        <Container>
          <div className="body">
            <h2 className="heading">
              Elevate Your Tech Career with IIT Academy's Training cum
              Internship Program
            </h2>
            <p>
              Elevate your skills and gain valuable industry experience with IIT
              Academy's comprehensive training cum internship program. Our
              programme is designed to equip you with essential skills and
              hands-on experience in high-demand domains. Gain practical
              knowledge, work on real-world projects, and prepare yourself for a
              successful career in technology.
            </p>
            <h3 style={{ textAlign: "left" }}>
              Key Features of Our Programme:
            </h3>
            <UnorderedList>
              <ListItem>
                <strong>Industry-focused curriculum:</strong> Developed in
                collaboration with industry experts to ensure you learn the most
                relevant skills.
              </ListItem>
              <ListItem>
                <strong>Interactive learning:</strong> A blend of online
                lectures, hands-on exercises, and live Q&A sessions.
              </ListItem>
              <ListItem>
                <strong>Mentorship from IIT Academy faculty:</strong> Get
                personalized guidance from experienced professionals.
              </ListItem>
              <ListItem>
                <strong>Real-world internship project:</strong> Apply your newly
                acquired skills to a real-world project under industry guidance.
              </ListItem>
              <ListItem>
                <strong>Certification upon completion:</strong> Earn a
                certificate from IIT Academy to showcase your achievements to
                potential employers.
              </ListItem>
            </UnorderedList>
            <h3 style={{ textAlign: "left" }}>Eligibility:</h3>
            <p>
              Students pursuing engineering or related fields are eligible to
              apply. No prior experience is required, but a passion for learning
              and technology is essential.
            </p>
            <h3 style={{ textAlign: "left" }}>Domains Available:</h3>
            <p>i) Web Development</p>
            <p>ii) DSA using C/C++</p>
            <p>iii) OOP's using C++</p>
            <p>iv) Introduction to SQL Database</p>
            <p>v) Python Programming</p>
            <h3 style={{ textAlign: "left" }}>Duration:</h3>
            <p>
              The training cum internship programme typically spans for 1
              months. Classes will be conducted in online mode..
            </p>
            <h3 style={{ textAlign: "left" }}>How to Apply:</h3>
            <p>
              Don't miss this opportunity to gain the skills and experience you
              need to succeed in the ever-evolving tech industry.Start your
              journey towards a successful career in technology with IIT
              Academy's training cum internship programme. Join us and unlock
              your potential today! Contact us on{" "}
              <a href="tel:9205704041" className="phone">
                9205704041
              </a>{" "}
              or{" "}
            </p>
          </div>
        </Container>
        <button className="apply1-now-button" onClick={handleApplyNowClick}>
          Apply Now
        </button>
        {showForm && <Internshipform />}
      </Layout>
    </div>
  );
};

export default Internship;
