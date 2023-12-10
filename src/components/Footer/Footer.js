import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <div className="footer-row">
                <h2>Corporate Office</h2>
                <p>
                  Sobha Sadan
                  <br />
                  Veer Kunwar Singh Colony
                  <br />
                  Kashipur, Samastipur, Bihar
                  <br />
                  India – 848101
                </p>
                <p>
                  Email:-
                  <a href="mailto:info@iitacademy.in"> info@iitacademy.in</a>
                </p>
                <p>
                  Ph:-
                  <a href="7366831500">+91-7366831500</a>
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
            </div>
            <div className="footer-col">
              <h2>Resources</h2>

              {/* <p>
                <Link to="/about-iit-academy">IIT Academy</Link>
              </p> */}
              <p>JEE-Main 2023 Question Paper</p>
              <p>JEE-Advanced 2023 Question Paper</p>
              <p>NEET 2023 Question Paper</p>
              <p>KVPY 2023 Question Paper</p>
              <p>NTSE 2023 Question Paper</p>
              <p>Boards 2023 Question Paper</p>
              <p>NCERT Solutions</p>
            </div>
            <div className="footer-col">
              <h2>Quick Links</h2>
              <p>
                <Link to="/fees-structure">Fee Structure</Link>
              </p>
              <p>Pay Fees Online</p>
              <p>
                <Link to="/why-iit-academy">Why IIT Academy</Link>
              </p>
              <p>
                <Link to="/admission-process-iit-academy">
                  Admission Process
                </Link>
              </p>
              <p>
                <Link to="/our-policy-iit-academy">Privacy & Policy</Link>
              </p>
              <p>Articles & Blogs</p>
              <p>Resources</p>
            </div>
          </div>
          <div
            className="footer-row"
            style={{
              color: "orange",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "5px",
            }}
          >
            All Rights Reserved @ IIT Academy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
