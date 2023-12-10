import React, { useEffect } from "react";
import Layout from "./../Layout";
import "./Contact.css";
import building from "../../assets/contact_us/building.jpg";
import call from "../../assets/contact_us/call.png";
import email from "../../assets/contact_us/email.png";
import location from "../../assets/contact_us/location.png";
// import { Link } from "react-router-dom";
import buildings from "../../assets/contact_us/buildings.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Contact Us-IIT Academy">
      <section className="contact-container">
        <div>
          <img src={building} alt="Loading..." className="contact-img" />
        </div>
        <div className="main-container">
          <div className="first-container">
            <h1>Send us message</h1>
            <form>
              <label>Your Name</label>
              <br />
              <input type="text" className="name" required />
              <input type="text" className="name" required />
              <br />
              <label>Your Phone No</label>
              <br />
              <input type="number" className="num" required />
              <br />
              <label>Your Email Id</label>
              <br />
              <input type="email" className="email" required />
              <br />
              <label>Message for Us</label>
              <br />
              <textarea required rows="8" cols="50"></textarea>
              <br />
              <button>Request to Call Back</button>
            </form>
          </div>

          <div className="second-container">
            <div className="contact-page">
              <div className="img-section">
                <img src={call} alt="Loading..." className="contactImgone" />
                <img src={email} alt="Loading..." className="contactImgtwo" />
              </div>
              <div className="contact-info">
                <h2>Call Us</h2>
                <h2>Email Us</h2>
              </div>
              <div className="contact-info">
                <p>1234567890</p>
                <p>info@iitacademy.in</p>
              </div>
            </div>

            <div className="location-page">
              <div className="location-img">
                <img src={location} alt="Loading..." />
              </div>
              <h2>Location</h2>
              <p>Sobha Sadan</p>
              <p>Near Gurukul Science Coaching Kashipur, Samastipur, Bihar</p>
              <p>India – 848101</p>
              <button>
                <a
                  href="https://maps.app.goo.gl/gNPgzMmXsn3nHi2m8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="campus-page">
          <img src={buildings} alt="Loading..." className="campus-img" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
