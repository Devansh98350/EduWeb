import React from "react";
import "./Testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import zero from "../../assets/home_page/10.jpeg";
import first from "../../assets/home_page/01.png";
import second from "../../assets/home_page/10.jpeg";
import third from "../../assets/home_page/03.png";

function Testimonials() {
  return (
    <>
      <h1 className="testimonial-heading">We are adored by our students!</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper2"
      >
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <img src={first} alt="Loading.." className="testimonial-img" />
            <p className="testimonial1-para">
              " Choosing IIT Academy for my NEET preparation was a wise
              decision. The teachers are not only experts in their fields but
              also approachable and supportive. The study environment is
              conducive to learning, and the regular doubt-solving sessions have
              been invaluable. I feel confident about acing NEET, thanks to IIT
              Academy. "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <img src={third} alt="Loading.." className="testimonial-img" />
            <p className="testimonial1-para">
              " The faculty at IIT Academy are highly experienced and passionate
              about teaching. They make complex concepts easy to understand and
              provide constant support throughout the preparation journey. The
              study material is comprehensive and covers all the important
              topics for the exams. "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <img src={zero} alt="Loading.." className="testimonial-img" />
            <p className="testimonial1-para">
              " As a JEE aspirant, I was looking for a course that could provide
              me with proper guidance and support throughout my preparation
              journey. That's when I came across IIT Academy and it turned out
              to be the best decision I ever made. The regular interaction with
              the faculty team and mentors provided me with the necessary
              guidance to rectify my weak points. "
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <img src={second} alt="Loading.." className="testimonial-img" />
            <p className="testimonial1-para">
              " IIT Academy's NEET program exceeded my expectations. The faculty
              members are passionate about teaching, and the emphasis on
              practical applications of concepts has been immensely helpful. The
              library resources and online study materials are exhaustive,
              leaving no stone unturned in my NEET preparation journey. Highly
              recommended! "
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonials;
