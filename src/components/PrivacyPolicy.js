import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Our Policy-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">Privacy & Policy</h2>
                <p>
                  {" "}
                  🔒 Your Privacy Matters! Our Commitment to Safeguarding Your
                  Data 🔒
                </p>
                <p>
                  At our cutting-edge institute, we are thrilled to bring you
                  top-notch coaching in the fields of JEE, NEET, and
                  foundations. However, we understand that with great
                  educational opportunities comes the responsibility to protect
                  your privacy and personal information.
                </p>
                <p>
                  Your trust is paramount to us, which is why we have crafted a
                  robust and transparent Privacy Policy to ensure your data is
                  safe and secure. Here's what you can expect:
                </p>
                <p>
                  <strong>Secure Data Storage:</strong> Your data will reside in
                  a state-of-the-art, secure environment, shielded from
                  unauthorized access. We employ cutting-edge encryption
                  techniques and strict access controls to safeguard your
                  information.
                </p>
                <p>
                  <strong> Usage Limitations:</strong> Rest assured, your data
                  will be used solely for educational and administrative
                  purposes. We will never sell, trade, or share your information
                  with third parties for marketing or any other unrelated
                  activities.
                </p>
                <p>
                  <strong>Data Access and Updates:</strong> You can request
                  access to your personal information, as well as update or
                  correct any inaccuracies. We will promptly address your
                  requests and ensure your data remains accurate.
                </p>
                <p>
                  <strong>Legal Compliance: </strong> Our Privacy Policy aligns
                  with relevant data protection laws and regulations to ensure
                  your rights are respected.
                </p>
                <p>
                  We take pride in being entrusted with your educational journey
                  and are fully committed to safeguarding your privacy
                  throughout your time with us. Together, let's nurture your
                  dreams while protecting what matters most - your privacy! 🌟
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
                  <a
                    href="https://www.iitacademy.in/admission-process-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Admission Process
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/admission-enquiry-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Admission Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/our-policy-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
