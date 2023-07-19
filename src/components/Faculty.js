import React, { useEffect } from "react";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";

const Faculty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Faculty-IIT Academy">
        <div className="container">
          <div className="column1">
            <h1> Faculty Section</h1>
          </div>
          <div className="column2">
            <ContactFormAll />
            {/* <div className="sider2">
              <h3>Courses</h3>
              <ul>
                <li>
                  <a href="/courses/foundation/" className="side-link">
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    Foundation
                  </a>
                </li>
                <li>
                  <a href="/courses/engineering/" className="side-link">
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="/courses/medical/" className="side-link">
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    Medical
                  </a>
                </li>
                <li>
                  <a href="/courses/crash-course/" className="side-link">
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    Crash Course
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/distance-learning-program-/"
                    className="side-link"
                  >
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    Distance Learning Program (DLP)
                  </a>
                </li>
                <li>
                  <a href="/courses/neet-medical/" className="side-link">
                    <img
                      src="https://www.mentorsedu.com/template/template71cms/image/side-link-icon.png"
                      alt
                      className="sider-icon"
                    />
                    NEET
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faculty;
