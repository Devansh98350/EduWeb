import React, { useEffect } from "react";
import Layout from "../../Layout";
import gopal from "../../../assets/faculty/gopal.jpeg";
import ranjan from "../../../assets/faculty/ranjan.jpeg";
import anupam from "../../../assets/faculty/anupam.jpeg";
import ayushi from "../../../assets/faculty/ayushi.jpeg";
// import devanshu from "../assets/faculty/devanshu.png";
// import suneel from "../../../assets/faculty/suneel.jpeg";
import "./Our_Faculty.css";

const Our_Faculty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Faculty-IIT Academy">
        <div className="faculty">
          <div className="blog-card">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${gopal})` }}
              />
              <ul className="details">
                <li className="author">Er. Gopal Chaudhary</li>
                <li className="date">Physics-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 8 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                {" "}
                Gopal Choudhary is an accomplished individual with a strong
                academic background in Mechanical Engineering. He completed his
                M.Tech from Jaipur, which honed my skills in innovative ideas
                and problem-solving. With a passion for education and a desire
                to share his knowledge, he have amassed seven years of valuable
                experience as a teacher. Throughout his journey, he has been
                dedicated to imparting knowledge and inspiring young minds to
                explore the wonders of engineering and design. Under his
                guidance, several students successfully got into IIT and AIIMS.{" "}
              </p>
            </div>
          </div>

          <div className="blog-card alt">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${ranjan})` }}
              />
              <ul className="details">
                <li className="author">Er. Pratyush Ranjan</li>
                <li className="date">Chemistry-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 5 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                Pratyush Ranjan hold a B.tech degree in Instrumentation and
                Control Engineering from the esteemed Central Institute of
                Technology, Assam. Over the years, he has honed expertise in the
                field of Chemistry, having served as a subject expert for 3
                years with a prominent Global Ed-tech Company. Additionally, he
                worked in Kunduz, Turkey, for 2 year. Furthermore, his passion
                for innovation led him to work as an Instrumentation Engineer in
                the R&D division of Corrosion Intel, where he delved into
                cutting-edge research for 5 enriching months. With a penchant
                for continuous learning and a dedication to excellence, he is
                eager to embark on new challenges and make a meaningful impact
                in every endeavor he undertake.{" "}
              </p>
            </div>
          </div>

          <div className="blog-card">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${anupam})` }}
              />
              <ul className="details">
                <li className="author">Er. Anupam Chaudhary</li>
                <li className="date">Maths-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 7 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                Anupam Chaudhary is a dedicated professional with a strong
                academic background and diverse teaching experience. She had
                done her M.Tech from RTU and a B.Tech from WIT. Over the past
                2.5 years, she had been serving as an Assistant Professor at
                (AEIT), Jaipur, where she contributed to shaping the minds of
                young engineering students. Additionally, she has a passion for
                mathematics, having spent 3 years as a teacher in the subject.
                With her knowledge and commitment to education, she strive to
                make a positive impact on the lives of students and continue to
                explore new avenues for them.{" "}
              </p>
            </div>
          </div>

          <div className="blog-card alt">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${ayushi})` }}
              />
              <ul className="details">
                <li className="author">Dr. Ayushi Ranjan</li>
                <li className="date">Biology-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 4 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                Ayushi Kumari is a passionate educator with a strong academic
                background. She pursued his MBBS from Saint Petersburg State
                Pediatric Medical University. Equipped with a solid foundation
                in both subject expertise and pedagogy, she has honed her skills
                over the past 4 years. During this time, she has had the
                privilege of teaching at a reputed organization for 6 months,
                where she was able to inspire and nurture young minds.
                Additionally, I have devoted 3 years to the role of a dedicated
                biology teacher, fostering a love for the life sciences among
                her students. Education has always been my calling, and she
                eagerly continue to make a positive impact in the lives of those
                she teach.{" "}
              </p>
            </div>
          </div>

          <div className="blog-card">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${" "})` }}
              />
              <ul className="details">
                <li className="author">Prof. S.K. Singh</li>
                <li className="date">Chemistry-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 8 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                Prof. S.K. Singh is a dedicated and accomplished educator who
                has made a significant impact in the field of chemistry
                education. With a name that resonates with excellence, Suneel
                holds a Bachelor's degree that has provided him with a strong
                foundation in his subject of expertise.His commitment to his
                students' success has been truly remarkable, evident through the
                numerous achievements under his guidance. Suneel's guidance has
                propelled several aspiring minds to achieve remarkable
                milestones, with numerous students triumphantly clearing
                prestigious examinations like the IIT JEE and NEET.{" "}
              </p>
            </div>
          </div>

          <div className="blog-card alt">
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${" "})` }}
              />
              <ul className="details">
                <li className="author">Prof. DK Singh</li>
                <li className="date">Maths-Faculty</li>
                <li className="date">IIT Academy</li>
                <li className="date">
                  <strong>Experience-</strong> 8 years
                </li>
              </ul>
            </div>
            <div className="description">
              <p>
                Prof. DK Singh is a dynamic individual who after completed his
                degree, emerged as a passionate mentor. With a flair for guiding
                and inspiring others, he has successfully steered numerous
                students towards achieving their dream college. His commitment
                to help others for reaching their goals has earned him
                admiration and respect within the academic community. His
                diverse skill set and dedication to excellence make him a
                valuable asset in any pursuit.{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Our_Faculty;
