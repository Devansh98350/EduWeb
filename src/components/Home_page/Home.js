import React, { useEffect } from "react";
import Layout1 from "./../Layout1";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import img from "../../assets/home_page/main.png";
import Testimonials from "../Home_page/Testimonials";
import { AccordionComponent } from "../Home_page/Accordian";
import { PopularCourse } from "../Home_page/Popular_Courses/Popular_Courses.js";
import { Query } from "../Forms/Query_Form/Query.js";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout1 title="IIT Academy">
      <section className="home-container">
        <div className="home-img">
          <img src={img} alt="Loading..." />
        </div>

        {/* Courses */}
        <PopularCourse />

        {/* Testimonial */}
        <Testimonials />
        <Query />
        {/* Accordian */}
        <AccordionComponent />
      </section>
    </Layout1>
  );
};

export default Home;
