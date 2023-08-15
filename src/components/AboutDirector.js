import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const AboutDirector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Director - IIT Academy">
        <div className="container">
          <div className="column1">
            <h1> About Director</h1>
          </div>
          <div className="column2">
            <ContactFormAll />
            <div className="sider2">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/about-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    IIT Academy
                  </Link>
                </li>
                <li>
                  <Link to="/about-director-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    About Director
                  </Link>
                </li>
                <li>
                  <Link
                    to="/director-message-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Director's Message
                  </Link>
                </li>
                <li>
                  <Link to="/why-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    Why IIT Academy
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

export default AboutDirector;
