import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const Foundation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Foundation 2.0-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">Foundation 2.0</h2>
                <p>
                  <strong>
                    Foundation 2.0: Ignite Your Potential at an Early Age!💪🏻
                  </strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> Welcome to Foundation 2.0,
                  an exclusive program tailored for class 9th students who are
                  eager to unlock their full potential from a young age. Our
                  institute is dedicated to nurturing the budding talents of
                  young minds and guiding them towards a bright future.
                </p>

                <p>
                  <strong>Why and Benefit of this Batch:</strong> In Foundation
                  2.0, we believe in the power of early preparation and
                  personalized attention. Through our one-on-one counseling
                  sessions, each student will receive customized guidance,
                  ensuring they learn and achieve without unnecessary stress.
                  This batch is designed to build a strong foundation for their
                  academic journey, setting them on the path to success from the
                  very beginning.
                </p>
                <p>
                  <strong>
                    Don't miss this incredible opportunity to unleash your
                    potential and achieve your dreams with our dedicated
                    institute and personalized mentoring!
                  </strong>
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

export default Foundation;
