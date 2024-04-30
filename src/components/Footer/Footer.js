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

              {/* <p>
                <Link to="/about-iit-academy">IIT Academy</Link>
              </p> */}
              <p>JEE-Main 2023 Question Paper</p>
              <p>JEE-Advanced 2023 Question Paper</p>
              <p>NEET 2023 Question Paper</p>
              <p>NTSE 2023 Question Paper</p>
              <p>Boards 2023 Question Paper</p>
              <p>NCERT Solutions</p>
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
                <Link to="/why-us">Why IIT Academy</Link>
              </p>
              <p>
                <Link to="/foundation-courses">Foundation Batches</Link>
              </p>
              <p>
                <Link to="/engineering-courses">Engineering Batches</Link>
              </p>
              <p>
                <Link to="/admission-process">Admission Process</Link>
              </p>
              <p>
                <Link to="/medical-courses">Medical Batches</Link>
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
            All Rights Reserved @ IIT Academy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
