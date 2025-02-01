import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import "./Promo.css";
import sammarsa from "../../../assets/popular_courses/Sammarsa.webp";
import daksh from "../../../assets/popular_courses/Daksh.webp";
import vikash from "../../../assets/popular_courses/Vikash.webp";
import samridhi from "../../../assets/popular_courses/Samridhi.webp";
import Breadcrumbs from "../../Breadcrumbs";

const Board = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Board Batches-IIT Academy"
      description="Explore IIT Academy's comprehensive foundation courses, designed to lay a strong educational base for future aspirants with detailed guidance and expert insights"
      keywords="Foundation Courses IIT Academy, Class-6, Class-7,Class-8, Class-9, Class-10, NTSE , Olympiad, 10th Boards"
    >
      <Breadcrumbs />
      <div className="course3">
        <h1 style={{ marginBottom: "10px" }}>Board Batches</h1>
        <p>
          Get a head start on your JEE and NEET preparation with our
          comprehensive foundation batches at IIT Academy. Designed for students
          transitioning between classes, our courses, such as ATAL, AAROHAN,
          ABHYAS, ABHINAV, and AADHYA, cater to each stage of early preparation.
          With expert guidance, curated study materials, and a supportive
          learning environment, we ensure a strong foundation to excel in these
          competitive exams.
        </p>
        <h2 className="hello" style={{ textAlign: "left", fontWeight: "bold" }}>
          Classroom / Offline Programs
        </h2>
        <div className="course-row">
          <div className="card2-detail">
            <img src={sammarsa} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SAMMARSA Course</p>
              <p className="details2-desc1">
                (For PCM students moving from class 10 to 11)
              </p>
              <Link to="/board-batches/sammarsa-class-11-pcm">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={daksh} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">DAKSH Course</p>
              <p className="details2-desc1">
                (For PCB students moving from class 10 to 11)
              </p>
              <Link to="/board-batches/daksh-class-11-pcb">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={vikash} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">VIKASH Course</p>
              <p className="details2-desc1">
                (For PCM students moving from class 11 to 12)
              </p>
              <Link to="/board-batches/vikash-class-12-pcm">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="course-row">
          <div className="card2-detail">
            <img src={samridhi} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SAMRIDHI Course</p>
              <p className="details2-desc1">
                (For PCM students moving from class 10 to 11)
              </p>
              <Link to="/board-batches/samridhi-class-12-pcb">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <p>
          <i
            className="fas fa-angle-double-right"
            style={{
              color: "#f39c12",
              marginRight: "5px",
            }}
          ></i>{" "}
          Also, you can apply directly by clicking{" "}
          <Link to="/Admission-form">
            <button className="details3-btn">Apply Online</button>
          </Link>
        </p>
        {/*<h2 className="hello" style={{ textAlign: "left", fontWeight: "bold" }}>
          Distance / Online Programs
        </h2>
        <div className="course-row">
          <div className="card2-detail">
            <img src={sankalp} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SANKALP Course</p>
              <p className="details2-desc1">
                (For students moving from class 9 to 10)
              </p>
              <Link to="/foundation-courses/distance-class-10">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          {/*} <div className="card2-detail">
            <img src={aadhya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">LAKSHYA Course</p>
              <p className="details2-desc1">
                (For students moving from class 11 to 12)
              </p>
              <Link to="/distance-class-12-engineering">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={aadhya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ABHIYAAN Course</p>
              <p className="details2-desc1">(For 12th passed students)</p>
              <Link to="/distance-class-13-engineering">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
        </div>*/}
        <p>
          For more details, you can call us at{" "}
          <a href="tel:9205704041">9205704041</a> or mail us at{" "}
          <a href="mailto:info@iitacademy.in">info@iitacademy.in</a>
        </p>
      </div>
    </Layout>
  );
};

export default Board;
