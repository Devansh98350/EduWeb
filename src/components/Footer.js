import React from "react";
import { Link } from "react-router-dom";
import ContactFormHome from "./ContactFormHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
                  <a
                    href="https://www.instagram.com/iit_academy2.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/company/iit-aacademy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100095357977617"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="mailto:admin@iitacademy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="linkedin-icon"
                    />
                  </a>{" "}
                  <a
                    href="tel:8453307045"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPhone} className="linkedin-icon" />
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
