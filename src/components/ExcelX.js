import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const ExcelX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="ExcelX-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">ExcelX</h2>
                <p>
                  <strong> Excel X: Excel Towards a Bright Future!✨💫</strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> Excel X is the perfect
                  platform for students with big dreams and aspirations. Geared
                  towards young minds who strive for excellence, this batch is
                  ideal for those seeking to unleash their true potential and
                  exceed their own expectations.
                </p>
                <p>
                  {" "}
                  <strong>Why and Benefit of this Batch:</strong> At Excel X, we
                  emphasize the importance of personalized mentoring. With our
                  one-on-one counseling sessions, students can receive
                  individualized support, enabling them to learn and achieve
                  their goals effortlessly. This batch empowers students to
                  surpass their limits and excel in their academic pursuits,
                  setting them apart in their journey to success.
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

export default ExcelX;
