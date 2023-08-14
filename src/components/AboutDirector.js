import React, { useEffect } from "react";
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
                  <a
                    href="https://www.iitacademy.in/about-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    IIT Academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/about-director-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    About Director
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/director-message-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Director's Message
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/faculty-message-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Faculty Message
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iitacademy.in/why-iit-academy"
                    className="side-link"
                  >
                    <img src={icon} alt={icon} className="sider-icon" />
                    Why IIT Academy
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

export default AboutDirector;
