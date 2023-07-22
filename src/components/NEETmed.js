import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const NEETmed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="NEETmed-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">NEETmed</h2>
                <p>
                  <strong> NEETmed: Ace NEET Exam with Confidence!👩🏻‍⚕️👨🏼‍⚕️</strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> For class 12th students with
                  a passion for medicine, NEETmed is the ultimate choice. This
                  batch is designed to ensure that you excel in the NEET exam
                  and secure your place in the medical field.
                </p>
                <p>
                  {" "}
                  <strong>Why and Benefit of this Batch:</strong> NEETmed
                  provides personalized counseling sessions, empowering you to
                  bridge any preparation gaps and face the exam with confidence.
                  With NEETmed, you'll be fully prepared to achieve your goal of
                  acing the NEET exam and embarking on a fulfilling medical
                  career, stress-free.
                </p>
                <p>
                  <strong>
                    Don't miss this incredible opportunity to unleash your
                    potential and achieve your dreams with our dedicated
                    institute and personalized mentoring!
                  </strong>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="column2">
            <ContactFormAll />
            <div className="sider2">
              <h3>Our Batches</h3>
              <ul>
                <li>
                  <a
                    href="/engineering-class-11-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    RiJEEing(Class-11)
                  </a>
                </li>
                <li>
                  <a
                    href="/engineering-class-12-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    JEEneous(Class-12)
                  </a>
                </li>
                <li>
                  <a href="/medical-class-11-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    Medilite(Class-11)
                  </a>
                </li>
                <li>
                  <a href="/medical-class-12-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    NEETmed(Class-12)
                  </a>
                </li>
                <li>
                  <a
                    href="/foundation-class-9-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Foundation 2.0(Class-9)
                  </a>
                </li>
                <li>
                  <a
                    href="/foundation-class-10-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    ExcelX(Class-10)
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

export default NEETmed;
