import React, { useEffect } from "react";
import Layout from "../../Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import i00 from "../../../assets/gallery/i00.jpeg";
import i01 from "../../../assets/gallery/i01.jpg";
import i02 from "../../../assets/gallery/i02.png";
import i03 from "../../../assets/gallery/i03.jpg";
import i04 from "../../../assets/gallery/i04.jpeg";
import i05 from "../../../assets/gallery/i05.jpg";
import i06 from "../../../assets/gallery/i06.jpg";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <Layout title="Gallery-IIT Academy">
        <div className="row9 m-0">
          <div className="column9">
            <div className="img" data-aos="fade-right">
              <img src={i00} alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src={i01} alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src={i02} alt="" />
              <div className="overlay"></div>
            </div>
            <div className="img" data-aos="fade-right">
              <img src={i03} alt="" />
              <div className="overlay"></div>
            </div>
          </div>

          <div className="column9">
            <div className="img" data-aos="fade-right">
              <img src={i04} alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src={i05} alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-up">
              <img src={i06} alt="" />
              <div className="overlay"></div>
            </div>
          </div>

          {/* <div className="column9">
            <div className="img" data-aos="fade-right">
              <img src={i06} alt="" />
              <div className="overlay"></div>
            </div> */}

          {/* <div className="img" data-aos="fade-right">
              <img src="assets/img/gallery/p3.jpg" alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src="assets/img/gallery/p5.jpg" alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src="assets/img/gallery/p6.jpg" alt="" />
              <div className="overlay"></div>
            </div>

            <div className="img" data-aos="fade-right">
              <img src="assets/img/gallery/p15.jpg" alt="" />
              <div className="overlay"></div>
            </div> */}
          {/* </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Gallery;
