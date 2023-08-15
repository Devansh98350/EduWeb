import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const RiJeeing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="RiJEEing-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">RiJEEing</h2>
                <p>
                  <strong>
                    RiJEEing: Your Gateway to JEE Mains and Advanced!🎯
                  </strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> Are you in class 11th and
                  aspiring to crack JEE mains and advanced? Look no further than
                  RiJEEing, the ultimate batch designed to harness your talents
                  and prepare you for the prestigious JEE examinations.
                </p>
                <p>
                  {" "}
                  <strong>Why and Benefit of this Batch:</strong> RiJEEing
                  understands the significance of early preparation. Through our
                  one-on-one counseling, students can receive personalized
                  guidance to ensure effective and stress-free learning. Join
                  RiJEEing to unleash your true potential, and achieve your
                  dream of succeeding in JEE mains and advanced.
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
                  <Link
                    to="/engineering-class-11-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    RiJEEing(Class-11)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/engineering-class-12-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    JEEneous(Class-12)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/medical-class-11-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Medilite(Class-11)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/medical-class-12-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    NEETmed(Class-12)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foundation-class-9-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Foundation 2.0(Class-9)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foundation-class-10-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    ExcelX(Class-10)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RiJeeing;
