import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const AdmissionProcess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title=" Admission-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">Admission Process</h2>
                <p>🎓📝 Admission Process, super Easy! 🏫🎉</p>
                <p>
                  📩 <strong>Apply Now:</strong> Contact us or visit our office
                  address – whichever is convenient for you! 🏢✉️
                </p>
                <ol>
                  <li>
                    <strong>Provide Info: </strong>Share personal and
                    educational details for the desired batch. 📋📚
                  </li>
                  <li>
                    <strong>Pay Up:</strong> Complete registration and first
                    installment fees – split according to your batch. 💰💳
                  </li>
                  <li>
                    <strong>Join the Journey: </strong>Congratulations! You're
                    all set to embark on an exciting educational adventure with
                    us! 🚀🎓
                  </li>
                </ol>
                <p>Join now and unlock your potential! 🌟✨</p>
              </div>
            </div>
          </div>
          <div className="column2">
            <ContactFormAll />
            <div className="sider2">
              <h3>Admission</h3>
              <ul>
                <li>
                  <Link
                    to="/admission-process-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Admission Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admission-enquiry-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Admission Enquiry
                  </Link>
                </li>
                <li>
                  <Link to="/our-policy-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdmissionProcess;
