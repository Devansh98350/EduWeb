import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import { courseData } from "../Popular_Courses/Courses_Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import previous from "../../../assets/home_page/previous.png";
import next from "../../../assets/home_page/next.png";

export const PopularCourse = () => {
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const engineer = courseData.filter((course) => course.item === "engineering");
  const medicalCourse = courseData.filter(
    (course) => course.item === "medical"
  );
  const foundations = courseData.filter(
    (course) => course.item === "foundation"
  );
  const distanceLearning = courseData.filter(
    (course) => course.item === "distance"
  );
  const boards = courseData.filter((course) => course.item === "board");

  const data =
    tab === 1
      ? engineer
      : tab === 2
      ? medicalCourse
      : tab === 3
      ? foundations
      : tab === 4
      ? distanceLearning
      : tab === 5
      ? boards
      : null;

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    previous: <CustomPrevArrow />,
    next: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="course-container">
      <h1 className="course-heading">Our Courses</h1>
      <p className="course-para">
        Being true mentors, our objective is to guide the students on the track
        of their academic growth by bringing out their latent potential
      </p>
      <div className="course">
        <div className="course">
          <div
            onClick={() => activeTab(1)}
            className={`course-btn course-btns radius ${
              tab === 1 ? "active-tab" : ""
            }`}
          >
            Engineering
          </div>
          <div
            onClick={() => activeTab(2)}
            className={`course-btn course-btns ${
              tab === 2 ? "active-tab" : ""
            }`}
          >
            Medical
          </div>
          <div
            onClick={() => activeTab(3)}
            className={`course-btn course-btns ${
              tab === 3 ? "active-tab" : ""
            }`}
          >
            Foundation
          </div>
          <div
            onClick={() => activeTab(4)}
            className={`course-btn course-btns ${
              tab === 4 ? "active-tab" : ""
            }`}
          >
            Distance Learning
          </div>
          <div
            onClick={() => activeTab(5)}
            className={`course-btn course-btns radius1 ${
              tab === 5 ? "active-tab" : ""
            }`}
          >
            Boards
          </div>
        </div>
      </div>

      <div className="detail1-box">
        <Slider {...settings}>
          {data &&
            data.map((value, index) => {
              return (
                <div key={index} className="card1-detail">
                  <img
                    src={value.img}
                    alt={value.description}
                    className="card1-img"
                  />
                  <div className="details1-btns">
                    <p className="details1-desc">{value.description}</p>
                    <p className="details1-desc1">{value.description1}</p>
                    <Link to={`/${value.to}`}>
                      <button className="details1-btn">Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "5px",
        height: "px",
        backgroundImage: `url(${previous})`, // Fix: Change prevArrow to previous
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        backgroundImage: `url(${next})`, // Fix: Change nextArrow to next
      }}
      onClick={onClick}
    />
  );
};
