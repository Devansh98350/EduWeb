import React from "react";
import { Link } from "react-router-dom";
import ContactFormHome from "./ContactFormHome";
import instagram from "../assets/homepage/instagram.png";
import facebook from "../assets/homepage/facebook.png";
import linkedin from "../assets/homepage/linkedin.png";
import email from "../assets/homepage/gmail.png";
import call from "../assets/homepage/phone.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <ContactFormHome />
            <div className="footer-col">
              <h2>Quick Links</h2>
              <p>
                <Link to="/about-iit-academy">IIT Academy</Link>
              </p>
              <p>
                <Link to="/director-message-iit-academy">
                  Director's Message
                </Link>
              </p>
              <p>
                <Link to="/admission-process-iit-academy">
                  Admission Process
                </Link>
              </p>
              <p>
                <Link to="/admission-enquiry-iit-academy">
                  Admission Enquiry
                </Link>
              </p>
              <p>
                <Link to="/our-policy-iit-academy">Our Policy</Link>
              </p>
              <p>
                <Link to="/"> Result</Link>
              </p>
              <p>
                <Link to="/">Gallery</Link>
              </p>
            </div>
            <div className="footer-col">
              <div className="footer-row">
                <h2>Corporate Office</h2>
                <p>
                  Sobha Sadan
                  <br />
                  Near Gurukul Science Coaching
                  <br />
                  Kashipur, Samastipur, Bihar
                  <br />
                  India – 848101
                </p>
                <p>
                  <a href="mailto:info@iitacademy.in">info@iitacademy.in</a>
                </p>
              </div>
              <div className="footer-row">
                <p className="text-center mt-3">
                  <a href="https://www.instagram.com/iit_academy2.0/">
                    <img
                      src={instagram} // Replace with the actual file path for the Instagram logo
                      alt="Instagram"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>{" "}
                  <a href="https://www.facebook.com/profile.php?id=100095357977617">
                    <img
                      src={facebook} // Replace with the actual file path for the Facebook logo
                      alt="Facebook"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>{" "}
                  <a href="https://www.linkedin.com/company/iit-aacademy/">
                    <img
                      src={linkedin} // Replace with the actual file path for the Instagram logo
                      alt="LinkedIn"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>{" "}
                  <a href="mailto:admin@iitacademy.in">
                    <img
                      src={email} // Replace with the actual file path for the Facebook logo
                      alt="Email"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>{" "}
                  <a href="tel:8453307045">
                    <img
                      src={call} // Replace with the actual file path for the Facebook logo
                      alt="Phone"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>{" "}
                </p>
              </div>
              <div className="footer-row">
                <p>
                  <strong> ALL RIGHTS RESERVED © IIT ACADEMY </strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
