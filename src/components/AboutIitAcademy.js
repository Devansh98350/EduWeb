import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const AboutIitAcademy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout title="About IIT Academy">
        <div className="container">
          <div className="column1">
            <div className="procedure-outer">
              <div className="procedure-wrapper">
                <h2 className="special">IIT Academy</h2>
                <p>
                  🚀 Unleash Your Potential at <strong>IIT Academy!</strong> 🌟
                </p>
                <p>
                  Calling all ambitious young minds and parents with big dreams!
                  🌠 Are you ready to embark on a journey of excellence in
                  education? Look no further! Introducing{" "}
                  <strong>IIT Academy</strong>, your gateway to success in the
                  competitive world of IIT and NEET preparations.
                </p>

                <p>🎯 Your Success is Our Priority! 🎯</p>
                <p>
                  At <strong> IIT Academy</strong>, we don't just teach; we
                  inspire and empower young minds to take on challenges with
                  confidence. Together, let's turn your dreams into reality and
                  pave the way for a prosperous future. We are a bunch of young
                  and dynamic members having experience in the field of Ed-tech,
                  Many of us have graduation degrees from Central colleges, and
                  last but not least we all achieved it at the average age of 24
                  years. Looks cool 🤓.
                </p>
                <p>
                  📞 Enroll Today! Limited seats available. Contact us now to
                  secure your spot in the journey of excellence. Remember,
                  success starts with the right guidance - and that's exactly
                  what we offer at <strong>IIT Academy!</strong> 💪
                </p>
              </div>
            </div>
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

export default AboutIitAcademy;
