import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const WhyIitAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Why IIT Academy ">
        <div className="container">
          s
          <div className="column1">
            <h1> Why IIT Academy</h1>
          </div>
          <div className="column2">
            <ContactFormAll />
            <div className="sider2">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/about-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    IIT Academy
                  </a>
                </li>
                <li>
                  <a href="/about-director-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    About Director
                  </a>
                </li>
                <li>
                  <a href="/director-message-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    Director's Message
                  </a>
                </li>
                <li>
                  <a href="/faculty-message-iit-academy" className="side-link">
                    <img src={icon} alt={icon} className="sider-icon" />
                    Faculty Message
                  </a>
                </li>
                <li>
                  <a href="/why-iit-academy" className="side-link">
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

export default WhyIitAcademy;
