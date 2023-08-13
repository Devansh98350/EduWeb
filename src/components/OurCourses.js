import React from "react";
import { NavLink } from "react-router-dom";
import eng from "../assets/homepage/engg-icon-n.svg";
import med from "../assets/homepage/medical-icon-n.svg";
import fou from "../assets/homepage/foundation-icon-n.svg";

const OurCourses = (props) => {
  return (
    <figure className="snip1560">
      <figcaption>
        <p className="mou-detail">{props.company}</p>
      </figcaption>
      <div className="profile-image">
        <img src={props.img} alt={props.alt} />
      </div>
      <figcaption>
        <ul className="circle-list">
          <li className="message">{props.message}</li>
          <li className="message">{props.message1}</li>
        </ul>
      </figcaption>
      <figcaption>
        <NavLink to={props.courseLink} className="course-link">
          <h3 className="mou-detail1">{props.name}</h3>
        </NavLink>
      </figcaption>
    </figure>
  );
};

const card = (props) => {
  return (
    <div className="contact-outer" style={{ backgroundColor: "white" }}>
      <div className="mou-team">
        <h1 className="mou-heading">Popular Courses</h1>

        <div className="mou-coordinators">
          <div className="mou-coordinators-wrapper">
            <OurCourses
              company="Engineering"
              img={eng}
              alt=""
              message="One Year Power Step Classroom Course for JEE (Main and Advanced)"
              message1="Two Year Integrated Classroom Course for JEE (Main and Advanced)"
              name="Check More.."
              courseLink="/engineering-class-11-iit-academy"
            />
            <OurCourses
              company="Medical"
              img={med}
              alt=""
              message="One Year Regular Medical Classroom Course for NEET"
              message1="Two Year Regular Medical Classroom Course for NEET"
              name="Check More.."
              courseLink="/medical-class-11-iit-academy"
            />
            <OurCourses
              company="Foundation"
              img={fou}
              alt=""
              message="One Year Integrated Classroom Course for Olympiads, NTSE & Class X"
              message1="Two Year Integrated Classroom Course for Olympiads, NTSE & Class IX to X"
              name="Check More.."
              courseLink="/foundation-class-9-iit-academy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
