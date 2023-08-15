import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const Medilite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Medilite-IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">Medilite</h2>
                <p>
                  <strong> Medilite: Light Your Path to NEET Success!🎯</strong>
                </p>
                <p>
                  <strong>About the Batch:</strong> Medilite is an exclusive
                  batch for class 11th students aspiring to shine in the NEET
                  exam. This batch provides comprehensive support and guidance
                  to set you on the right track from the beginning.
                </p>
                <p>
                  {" "}
                  <strong>Why and Benefit of this Batch:</strong>Medilite's
                  one-on-one counseling sessions offer personalized attention,
                  helping students learn and achieve their goals with ease. With
                  Medilite, you'll be equipped with the knowledge and confidence
                  needed to excel in the NEET exam, fulfilling your dream of
                  becoming a medical professional.
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

export default Medilite;
