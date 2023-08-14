import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const JEEneous = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="JEEneous-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">JEEneous</h2>
                <p>
                  <strong>
                    {" "}
                    JEEneous: Your Journey to JEE Mains and Advance Made
                    Smooth!👨🏻‍🔬👩🏼‍🔬
                  </strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> If you're a class 12th
                  student aiming to conquer JEE mains and advance on time and
                  with confidence, JEEneous is the perfect fit for you. This
                  batch is designed to provide you with all the necessary tools
                  to excel in your preparation.
                </p>
                <p>
                  {" "}
                  <strong>Why and Benefit of this Batch:</strong> JEEneous
                  offers a unique advantage with one-on-one counseling, ensuring
                  that no student faces any preparation gaps or undue stress.
                  With JEEneous, you'll confidently face the JEE examinations,
                  making your dreams a reality without compromise.
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
                    href="https://www.iitacademy.in/engineering-class-11-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    RiJEEing(Class-11)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/engineering-class-12-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    JEEneous(Class-12)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/medical-class-11-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Medilite(Class-11)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/medical-class-12-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    NEETmed(Class-12)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/foundation-class-9-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Foundation 2.0(Class-9)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/foundation-class-10-iit-academy"
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

export default JEEneous;
