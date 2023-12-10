import React, { useEffect } from "react";
import Layout from "../../Layout";
import "./Admission_enquiry.css";

const Admission_enquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title="Admission-IIT Academy">
        <div className="container">
          <div className="procedure-outer">
            <div className="procedure-wrapper">
              <h2 className="special">Admission Enquiry</h2>
              <p>🎓📞 Get Enrolled with Ease! 🏢👋</p>
              <p>
                🤔 Curious about admission? No worries! Reach out to us via
                WhatsApp or visit our corporate office to get all your questions
                answered! 📱💬🏢
              </p>
              <p>
                📞 Contact us: <a href="tel:+91-8453307045">+91-8453307045</a> ,
                <a href="tel:+91-7366831500">+91-7366831500</a>
              </p>
              <p>
                🏢 Corporate Office: [Sobha Sadan, Veer Kunwar Singh Colony,
                Kashipur, Samastipur, Bihar, India – 848101]
              </p>
              <p>
                👉 Discover the perfect educational path for your future! 🌟💼
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admission_enquiry;
