import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const AdmissionEnquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Admission-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">Admission Enquiry</h2>
                <p>🎓📞 Get Enrolled with Ease! 🏢👋</p>
                <p>
                  🤔 Curious about admission? No worries! Reach out to us via
                  WhatsApp or visit our corporate office to get all your
                  questions answered! 📱💬🏢
                </p>
                <p>
                  📞 Contact us: <a href="tel:+91-8453307045">+91-8453307045</a>{" "}
                  ,<a href="tel:+91-7366831500">+91-7366831500</a>
                </p>
                <p>
                  🏢 Corporate Office: [Sobha Sadan, Near Gurukul Science
                  Coaching, Kashipur, Samastipur, Bihar, India – 848101]
                </p>
                <p>
                  👉 Discover the perfect educational path for your future! 🌟💼
                </p>
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

export default AdmissionEnquiry;
