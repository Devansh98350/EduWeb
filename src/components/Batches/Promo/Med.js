import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import "./Promo.css";
import ananta from "../../../assets/popular_courses/Ananta.webp";
import sudarshan from "../../../assets/popular_courses/Sudarshan.webp";
import swadhyaya from "../../../assets/popular_courses/Swadhyaya.webp";
import yukti from "../../../assets/popular_courses/Yukti.webp";
import sarthak from "../../../assets/popular_courses/Sarthak.webp";
import pragya from "../../../assets/popular_courses/Pragya.webp";
import Breadcrumbs from "../../Breadcrumbs";

const Med = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="Medical Batches-IIT Academy"
      description="Discover our comprehensive NEET preparation courses, meticulously designed to guide aspiring medical students towards success with expert faculty and top-notch resources."
      keywords="Medical Courses IIT Academy, NEET Courses IIT Academy"
    >
      <Breadcrumbs />
      <div className="course3">
        <h1 style={{ marginBottom: "10px" }}>Medical Batches</h1>
        <p>
          Discover the pathway to a promising career in medical field with IIT
          Academy's meticulously tailored medical batches. Led by expert
          instructors, our holistic programs empower students from diverse
          backgrounds to pursue their aspirations in healthcare. Whether
          aspiring to be doctors, pharmacists, or researchers, our courses
          provide the essential knowledge and skills to excel in the medical
          field. Join us at IIT Academy and embark on a transformative journey
          toward becoming a future healthcare leader.
        </p>
        <h2 className="hello" style={{ textAlign: "left", fontWeight: "bold" }}>
          Classroom / Offline Programs
        </h2>
        <div className="course-row">
          <div className="card2-detail">
            <img src={ananta} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ANANTA Course</p>
              <p className="details2-desc1">
                (For students moving from class 10 to 11)
              </p>
              <Link to="/medical-batches/ananta-class-11">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={sudarshan} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SUDARSHAN Course</p>
              <p className="details2-desc1">
                (For students moving from class 11 to 12)
              </p>
              <Link to="/medical-batches/sudarshan-class-12">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={swadhyaya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SWADHYAYA Course</p>
              <p className="details2-desc1">(For 12th passed students)</p>
              <Link to="/medical-batches/swadhyaya-class-13">
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
            <img src={yukti} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">YUKTI Course</p>
              <p className="details2-desc1">
                (For students moving from class 10 to 11)
              </p>
              <Link to="/medical-batches/yukti-class-11-distance">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={sarthak} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SARTHAK Course</p>
              <p className="details2-desc1">
                (For students moving from class 11 to 12)
              </p>
              <Link to="/medical-batches/sarthak-class-12-distance">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={pragya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">PRAGYA Course</p>
              <p className="details2-desc1">(For 12th passed students)</p>
              <Link to="/medical-batches/pragya-class-13-distance">
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

export default Med;
