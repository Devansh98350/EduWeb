import React, { useEffect } from "react";
import Layout from "../../Layout";

const Admission_process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout title=" Admission-IIT Academy">
        <div className="container">
          <div className="procedure-outer">
            <div className="procedure-wrapper">
              <h2 className="special">Admission Process</h2>
              <p>🎓📝 Admission Process, super Easy! 🏫🎉</p>
              <p>
                🎓For Admission, fill out the form by clicking on the link
                below:-🎓
              </p>
              <p style={{ textAlign: "center" }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdhyUZrK-2UP8DbWgEn3M4bcYCtXG5tSyNUrbFYiDgRaAX2XQ/viewform?usp=sf_link"
                  style={{ textColor: "blue", fontSize: "30px" }}
                >
                  Admission Form
                </a>
              </p>
              <p>
                📩 <strong>Apply Now:</strong> Contact us or visit our office
                address – whichever is convenient for you! 🏢✉️
              </p>
              <ol>
                <li>
                  <strong>Provide Info: </strong>Share personal and educational
                  details for the desired batch. 📋📚
                </li>
                <li>
                  <strong>Pay Up:</strong> Complete registration and first
                  installment fees – split according to your batch. 💰💳
                </li>
                <li>
                  <strong>Join the Journey: </strong>Congratulations! You're all
                  set to embark on an exciting educational adventure with us!
                  🚀🎓
                </li>
              </ol>
              <p>Join now and unlock your potential! 🌟✨</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Admission_process;
