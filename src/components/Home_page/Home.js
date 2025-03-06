import React, { useEffect } from "react";
import Layout from "./../Layout";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import img from "../../assets/home_page/main.webp";
import img1 from "../../assets/home_page/IAST.webp";
import Testimonials from "../Home_page/Testimonials";
import { AccordionComponent } from "../Home_page/Accordian";
import { PopularCourse } from "../Home_page/Popular_Courses/Popular_Courses.js";
import { Query } from "../Forms/Query_Form/Query.js";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [img, img1];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: false,
  // };
  return (
    <Layout title="IIT Academy">
      <section className="home-container">
        {/* <div className="w-full mx-auto px-1">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-100 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        */}
        <div className="home-img">
          <img src={img} alt="Loading..." />
        </div>
        {/* Courses */}
        <PopularCourse />
        <div className="home-img">
          <img src={img1} alt="Loading..." />
        </div>
        {/* Testimonial */}
        <Testimonials />
        <Query />
        {/* Accordian */}
        <AccordionComponent />
      </section>
    </Layout>
  );
};

export default Home;
