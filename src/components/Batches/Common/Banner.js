import React from "react";
import { Link } from "react-router-dom";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container-fluid fullBlog-third">
      <h3>What to do next? Ask Our experts in a Free Counselling</h3>
      <p>
        24 Years of Excellence in Classes for Medical | IIT-JEE, Now learn from
        the best teachers of India
      </p>
      <div className="button-container">
        <Link to="/Admission-form">
          <button className="btn">
            <FaRegKeyboard className="icon" />
            Enroll Now
          </button>
        </Link>
        <a href="tel:9205704041">
          <button className="btn">
            <FaHeadphones className="icon" />
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
