import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout";
import { Query } from "../../Forms/Query_Form/Query";
import "./Admission_enquiry.css";
import Explore from "../../Batches/Common/Explore";
import Breadcrumb from "../../Breadcrumbs";

const Admission_enquiry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout
        title="Admission Enquiry-IIT Academy"
        description="Get personalized guidance and answers to all your queries about joining IIT Academy – your pathway to a brighter future!"
        keywords="Contact IIT Academy, Admission Enquiry IIT Academy, Helpline IIT Academy"
      >
        <Breadcrumb />
        <div className="container">
          <div className="procedure-outer">
            <div className="procedure-wrapper">
              <h2 className="special">Admission Enquiry</h2>
              <p>
                Welcome to IIT Academy, where we are dedicated to
                revolutionizing the education sector and guiding students
                towards a brighter future. If you have any questions or would
                like to inquire about the admission process, our team is here to
                assist you.
              </p>
              <p style={{ color: "orange", fontSize: "20px" }}>
                <strong>How to Make an Admission Inquiry:</strong>
              </p>
              <p>
                <strong>1. Fill out the Inquiry Form:</strong> Complete the
                admission inquiry form below with your details and any specific
                questions you may have. This will help us understand your needs
                better.
              </p>
              <p>
                <strong>2. Contact Our Admissions Team:</strong> If you prefer
                direct communication, feel free to reach out to our admissions
                team at <a href="tel:9205704041">+91-9205704041</a> ,{" "}
                <a href="tel:9472008599">+91-9472008599</a>. We are here to
                answer your queries and provide the information you need.
              </p>
              <p>
                <strong>3. Visit our Campus:</strong> Interested in seeing our
                facilities in person? Schedule a visit to our campus, and our
                staff will be delighted to show you around and address any
                concerns you may have.
              </p>
              <p>
                🏢 Corporate Office: [Sobha Sadan, Veer Kunwar Singh Colony,
                Kashipur, Samastipur, Bihar, India – 848101]
              </p>
              <Explore />
              <Query />
              <p>
                We appreciate your interest in IIT Academy and look forward to
                assisting you on your educational journey.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admission_enquiry;
