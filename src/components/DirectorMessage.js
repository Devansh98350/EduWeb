import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import ContactFormAll from "./ContactFormAll";
import icon from "../assets/homepage/side-link-icon.png";

const DirectorMess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="CEO Message-IIT Academy">
        <div className="container">
          <div
            className="column1"
            style={{ textAlign: "justify", fontSize: "16px" }}
          >
            <br />
            <h1
              style={{
                color: "blue",
                fontWeight: "bold",
                fontFamily: "Roboto",
                textAlign: "center",
                fontSize: "50px",
              }}
            >
              From CEO Office
            </h1>
            <br />
            <p>Dear Parents,</p>
            <p>
              I hope this message finds you well. As the CEO of IIT Academy, I
              want to take a moment to emphasize the profound impact education
              has on shaping the character and future of our children.
            </p>
            <p>
              "Education isn't only collecting degrees, rather it is an
              instrument which shapes your character in a way that you are
              liked, loved & respected by all." These words resonate deeply with
              our mission and philosophy. We believe that education extends far
              beyond textbooks and classrooms. It is a transformative journey
              that empowers our children with essential life skills, values, and
              the ability to make informed decisions.
            </p>
            <p>
              In today's fast-paced world, where information is abundant but
              wisdom is scarce, we recognize the critical role we play in
              nurturing not just the intellect but also the hearts and minds of
              our students. Our commitment goes beyond academic excellence; it
              extends to instilling respect for elders, fostering loyalty to
              commitments, and encouraging objective thinking.
            </p>
            <p>
              We understand that the challenges our children face in the modern
              world are evolving rapidly. Therefore, we are continuously
              updating our curriculum, embracing innovative teaching methods,
              and integrating technology to ensure your child receives a
              holistic education that prepares them for the complexities of the
              21st century.
            </p>
            <p>
              We are also proud to inform you about the recent initiatives like
              personalized learning, character development programs, and
              parent-teacher collaboration that we have launched to enhance your
              child's educational experience.
            </p>
            <p>
              Thank you for entrusting us with your child's education. We look
              forward to a year filled with growth, learning, and meaningful
              achievements.
            </p>
            <p></p>
            <p>Warm regards,</p>
            <p>
              <strong>A.K. Choudhary</strong>
            </p>
            <p>
              <strong>CEO, IIT Academy</strong>
            </p>
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

export default DirectorMess;
