import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
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
                  <a href="tel:9205704041">+91-9205704041</a>
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
                    href="tel:9205704041"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faPhone} className="linkedin-icon" />
                  </a>{" "}
                  <a
                    href="https://wa.me/919205704041?text=I have a query.&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="whatsapp-icon"
                    />
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2>Resources</h2>
              <p>
                <a
                  href="https://www.resources.iitacademy.in/exams/neet"
                  rel="noopener noreferrer"
                >
                  NEET
                </a>
              </p>
              <p>
                <a
                  href="https://www.resources.iitacademy.in/exams/jee-main"
                  rel="noopener noreferrer"
                >
                  JEE Main
                </a>
              </p>
              <p>
                <a
                  href="https://www.resources.iitacademy.in"
                  rel="noopener noreferrer"
                >
                  Resources
                </a>
              </p>
              <p>
                <a
                  href="https://www.counselling.iitacademy.in"
                  rel="noopener noreferrer"
                >
                  Counselling
                </a>
              </p>
              <p>
                <Link to="/refund-rules">Refund Policy</Link>
              </p>
              <p>
                <a
                  href="https://www.resources.iitacademy.in/exams/jee-advanced"
                  rel="noopener noreferrer"
                >
                  JEE Advanced
                </a>
              </p>

              <p>
                <a
                  href="https://www.internship.iitacademy.in"
                  rel="noopener noreferrer"
                >
                  Internship
                </a>
              </p>
              <p>
                <Link to="/careers">Careers</Link>
              </p>
            </div>
            <div className="footer-col">
              <h2>Quick Links</h2>
              <p>
                <Link to="/fees-structure">Fee Structure</Link>
              </p>
              <p>
                <Link to="/board-batches">Board Batches</Link>
              </p>
              <p>
                <Link to="/terms-and-conditions">Terms & Condition</Link>
              </p>
              <p>
                <Link to="/foundation-batches">Foundation Batches</Link>
              </p>
              <p>
                <Link to="/engineering-batches">Engineering Batches</Link>
              </p>
              <p>
                <Link to="/admission-process">Admission Process</Link>
              </p>
              <p>
                <Link to="/medical-batches">Medical Batches</Link>
              </p>
              <p>
                <Link to="/our-policy">Privacy & Policy</Link>
              </p>
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
            All Rights Reserved @ IIT Academy 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
