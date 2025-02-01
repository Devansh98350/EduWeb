import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import "./Promo.css";
import arjuna from "../../../assets/popular_courses/Arjuna.webp";
import chaitanya from "../../../assets/popular_courses/Chaitanya.webp";
import eklavya from "../../../assets/popular_courses/Eklavya.webp";
import utkarsh from "../../../assets/popular_courses/Utkarsh.webp";
import lakshya from "../../../assets/popular_courses/Lakshya.webp";
import abhiyaan from "../../../assets/popular_courses/Abhiyaan.webp";
import Breadcrumbs from "../../Breadcrumbs";

const Eng = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Engineering Batches-IIT Academy"
      description="Explore IIT Academy's comprehensive engineering courses tailored to ace your engineering exams with expert guidance and unmatched preparation."
      keywords="Engineering Courses IIT Academy, JEE Main Courses, JEE Advanced Courses"
    >
      <Breadcrumbs />
      <div className="course3">
        <h1 style={{ marginBottom: "10px" }}>Engineering Batches</h1>
        <p>
          Explore the exciting possibilities with IIT Academy's carefully
          curated engineering courses, crafted to support students in their
          academic pursuits and guide them toward rewarding careers in
          engineering. Led by seasoned educators, our comprehensive programs
          offer the essential knowledge, skills, and confidence required to
          excel in competitive exams and thrive in the dynamic field of
          engineering. Choose from our diverse range of courses tailored to suit
          every student's aspirations and learning needs. Embark on a
          transformative educational experience with us and unlock your
          potential for success.
        </p>
        <h2 className="hello" style={{ textAlign: "left", fontWeight: "bold" }}>
          Classroom / Offline Programs
        </h2>
        <div className="course-row">
          <div className="card2-detail">
            <img src={arjuna} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ARJUNA Course</p>
              <p className="details2-desc1">
                (For students moving from class 10 to 11)
              </p>
              <Link to="/engineering-batches/arjuna-class-11">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={chaitanya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">CHAITANYA Course</p>
              <p className="details2-desc1">
                (For students moving from class 11 to 12)
              </p>
              <Link to="/engineering-batches/chaitanya-class-12">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={eklavya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">EKLAVYA Course</p>
              <p className="details2-desc1">(For 12th passed students)</p>
              <Link to="/engineering-batches/eklavya-class-13">
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
        <h2 className="hello" style={{ textAlign: "left", fontWeight: "bold" }}>
          Distance / Online Programs
        </h2>
        <div className="course-row">
          <div className="card2-detail">
            <img src={utkarsh} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">UTKARSH Course</p>
              <p className="details2-desc1">
                (For students moving from class 10 to 11)
              </p>
              <Link to="/engineering-batches/utkarsh-class-11-distance">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={lakshya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">LAKSHYA Course</p>
              <p className="details2-desc1">
                (For students moving from class 11 to 12)
              </p>
              <Link to="/engineering-batches/lakshya-class-12-distance">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={abhiyaan} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ABHIYAAN Course</p>
              <p className="details2-desc1">(For 12th passed students)</p>
              <Link to="/engineering-batches/abhiyaan-class-13-distance">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
        </div>
        <p>
          For more details, you can call us at{" "}
          <a href="tel:9205704041">9205704041</a> or mail us at{" "}
          <a href="mailto:info@iitacademy.in">info@iitacademy.in</a>
        </p>
      </div>
    </Layout>
  );
};

export default Eng;
