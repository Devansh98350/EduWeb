import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import "./Promo.css";
import atal from "../../../assets/popular_courses/Atal.png";
import aarohan from "../../../assets/popular_courses/Aarohan.png";
import abhyas from "../../../assets/popular_courses/Abhyas.png";
import abhinav from "../../../assets/popular_courses/Abhinav.png";
import aadhya from "../../../assets/popular_courses/Aadhya.png";
import sankalp from "../../../assets/popular_courses/Sankalp.png";

const Found = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Foundation Course-IIT Academy">
      <div className="course3">
        <h1 style={{ marginBottom: "10px" }}>Foundation Batches</h1>
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
            <img src={atal} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ATAL Course</p>
              <p className="details2-desc1">
                (For students moving from class 9 to 10)
              </p>
              <Link to="/foundation-class-10">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={aarohan} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">AAROHAN Course</p>
              <p className="details2-desc1">
                (For students moving from class 8 to 9)
              </p>
              <Link to="/foundation-class-09">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={abhyas} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ABHYAS Course</p>
              <p className="details2-desc1">
                (For students moving from class 7 to 8)
              </p>
              <Link to="/foundation-class-08">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={abhinav} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">ABHINAV Course</p>
              <p className="details2-desc1">
                (For students moving from class 6 to 7)
              </p>
              <Link to="/foundation-class-07">
                <button className="details2-btn">Details</button>
              </Link>
            </div>
          </div>
          <div className="card2-detail">
            <img src={aadhya} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">AADHYA Course</p>
              <p className="details2-desc1">
                (For students moving from class 5 to 6)
              </p>
              <Link to="/foundation-class-06">
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
            <img src={sankalp} alt="" className="card2-img" />
            <div className="details2-btns">
              <p className="details2-desc">SANKALP Course</p>
              <p className="details2-desc1">
                (For students moving from class 9 to 10)
              </p>
              <Link to="/distance-class-10">
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
          </div>*/}
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

export default Found;
