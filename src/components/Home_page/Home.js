import React, { useEffect } from "react";
import Layout from "./../Layout";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import img from "../../assets/home_page/main.png";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import engineer from "../../assets/home_page/engineer.png";
// import doctor from "../../assets/home_page/doctor.png";
// import foundation from "../../assets/home_page/foundation.png";
import Testimonials from "../Home_page/Testimonials";
import { AccordionComponent } from "../Home_page/Accordian";
import { PopularCourse } from "../Home_page/Popular_Courses/Popular_Courses.js";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="IIT Academy">
      <section className="home-container">
        <div className="home-img">
          <img src={img} alt="Loading..." />
        </div>

        {/* Courses */}
        <PopularCourse />

        {/* Testimonial */}
        <Testimonials />

        {/* Accordian */}
        <AccordionComponent />
      </section>
    </Layout>
  );
};

export default Home;
