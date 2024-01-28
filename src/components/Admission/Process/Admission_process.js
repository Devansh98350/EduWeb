import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { Query } from "../../Forms/Query_Form/Query";
import Admission1 from "./../../Forms/Admission_Form/Admission1";
import "./Admission_process.css";

const Admission_process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const handleApplyNowClick = () => {
    setShowForm(true);
  };
  const handleApplyNowClick1 = () => {
    setShowForm1(true);
  };
  return (
    <>
      <Layout title=" Admission Process-IIT Academy">
        <div className="container2">
          <div className="procedure-outer2">
            <div className="procedure-wrapper2" style={{ width: "100%" }}>
              <h2 className="special">Admission Process</h2>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                At IIT Academy, we understand that the journey towards academic
                excellence begins with a well-guided admission process.Our
                dedicated team ensures that you receive personalized guidance to
                make informed decisions about your academic future.
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                Steps to Admission:
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>1. Explore Our Courses:</strong>
                Begin your journey by exploring our diverse range of courses
                tailored to meet the evolving demands of the academic landscape.
                Whether you're interested in engineering, medical sciences,
                foundation programs, or distance learning, we have a course for
                you.
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>2. Choose Your Course:</strong>
                Select the course that aligns with your aspirations and goals.
                At IIT Academy, we provide a platform where you can find courses
                designed to nurture your talents and foster a passion for
                learning.
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>3. Apply with Ease:</strong>
                Once you've chosen the perfect course for your academic
                pursuits, proceed to our simple and streamlined application
                process. We believe in making admissions accessible and
                straightforward for all students.
              </p>
              <button
                className="apply1-now-button"
                onClick={handleApplyNowClick}
              >
                Admission Form
              </button>
              {showForm && <Admission1 />}

              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                If you have any doubts or need additional information about our
                courses or the admission process, don't hesitate to reach out.
                Our team is ready to provide clarity and assist you on your
                educational journey.
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>Phone: </strong>
                <a href="tel:7366831500">+91-7366831500</a> <strong>,</strong>
                <a href="tel:8453307045">+91-8453307045</a>
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>Email:</strong>
                <a href="mailto:info@iitacademy.in"> info@iitacademy.in</a>
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                <strong>Corporate Office:</strong> [Sobha Sadan, Veer Kunwar
                Singh Colony, Kashipur, Samastipur, Bihar, India – 848101]
              </p>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>
                Alternatively, you can fill out our query form, and we'll get in
                touch with you promptly. Your academic success is our priority,
                and we look forward to helping you achieve your goals.
              </p>
              <button
                className="apply1-now-button"
                onClick={handleApplyNowClick1}
              >
                Query Form
              </button>
              {showForm1 && <Query />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admission_process;
