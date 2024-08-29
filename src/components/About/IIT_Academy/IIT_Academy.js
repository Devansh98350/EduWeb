import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
// import ContactFormAll from "./ContactFormAll";
// import icon from "../assets/homepage/side-link-icon.png";
import "./IIT_Academy.css";

const IIT_Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout
        title="About IIT Academy"
        description="Know more about IIT Academy"
        keywords="About IIT Academy"
      >
        <div className="container">
          <div className="procedure-outer">
            <div className="procedure-wrapper">
              <h2 className="special">About IIT Academy</h2>
              <p>
                IIT Academy is an innovative Ed-Tech company committed to
                transforming the education sector. The organization's primary
                goal is to revolutionize the way students approach their
                academic journeys by offering comprehensive guidance and
                support. One of our key focuses is to provide holistic
                counseling services that go beyond traditional academic
                assistance. Through personalized counseling sessions, the
                academy aims to understand the unique needs and aspirations of
                each student, fostering an environment where individuals can
                thrive and excel.
              </p>

              <p>
                At IIT Academy, a core element of our approach is helping
                students navigate the complex landscape of exams and academic
                challenges. The academy recognizes that success extends beyond
                just academic excellence; it encompasses a well-rounded
                development that prepares students for the competitive world. By
                offering a range of services, from exam selection guidance to
                personalized study plans, we empowers students to make informed
                decisions about their educational paths.
              </p>
              <p>
                The academy takes pride in its commitment to staying at the
                forefront of educational innovation. Leveraging cutting-edge
                technology and modern teaching methodologies, we provides a
                dynamic and engaging learning environment. This ensures that
                students not only excel in their exams but also develop critical
                thinking, problem-solving skills, and a passion for lifelong
                learning.
              </p>
              <p>
                Furthermore, we distinguishes ourself by fostering a sense of
                community and mentorship. The academy understands the importance
                of a supportive network in a student's educational journey.
                Through experienced faculty and mentorship programs, we creates
                a nurturing ecosystem where students can seek guidance, share
                experiences, and grow both academically and personally.
              </p>
              <p>
                IIT Academy is a one-stop solution for students seeking
                educational excellence. We stands as a beacon in the Ed-Tech
                landscape, redefining education by offering comprehensive
                counseling, exam selection guidance, and a holistic learning
                experience. With a commitment to excellence, innovation, and
                fostering student success, we emerges as a transformative force
                in shaping the future of education.
              </p>
              <p>
                <i
                  className="fas fa-angle-double-right"
                  style={{
                    color: "#f39c12",
                    marginRight: "5px",
                  }}
                ></i>{" "}
                Explore More about different batches offered by IIT Academy.
              </p>
              <div className="all_batches">
                {" "}
                <Link to="/engineering-courses">
                  <button className="details4-btn">Engineering Batches</button>
                </Link>
                <Link to="/medical-courses">
                  <button className="details4-btn">Medical Batches</button>
                </Link>
                <Link to="/foundation-courses">
                  <button className="details4-btn">Foundation Batches</button>
                </Link>
                <Link to=" ">
                  <button className="details4-btn">Boards Batches</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IIT_Academy;
