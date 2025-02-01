import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../Layout";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Medical.css";
import img from "../../../assets/batches/Sudarshan.webp";
import Benefits from "../Common/Benefits";
import Breadcrumbs from "../../Breadcrumbs";

const M_Twelve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  document.addEventListener("contextmenu", function (event) {
    var target = event.target;
    if (target.tagName === "IMG") {
      event.preventDefault();
    }
  });
  return (
    <>
      <Layout
        title="Sudarshan(MD)-IIT Academy"
        description="Sudarshan Course is designed for students moving to 12th class, offering comprehensive NEET preparation, board exam support, and extensive practice with the best faculty and resources."
        keywords="Sudarshan, Sudarshan Batch NEET Preparation IIT Academy, 11th to 12th Moving Students NEET Preparation, Best NEET Coaching Classes for class 12, NEET 2025 Preparation Courses for class 12, Top Medical Entrance Preparation Classes"
      >
        <Breadcrumbs />
        <section id="section">
          <div className="image">
            <img src={img} alt="Loading..." />
          </div>
          <div className="about">
            <h1>Why Sudarshan?</h1>
            <p>
              <i
                className="fas fa-angle-double-right"
                style={{ color: "#f39c12", marginRight: "5px" }}
              ></i>
              Sudarshan Course is specially designed for class XI to class XII
              moving students and want to put in their best effort to crack NEET
              (UG). This Course helps students to build up strong fundamentals
              for achieving success in NEET (UG) with a focused approach.
            </p>
            <p>
              <i
                className="fas fa-angle-double-right"
                style={{ color: "#f39c12", marginRight: "5px" }}
              ></i>
              Students joining this program get the maximum time to focus their
              energies for cracking NEET (UG), their ultimate goal!
            </p>
          </div>
          <div className="details" id="details">
            <h2 className="heading-details">Fee & Scholarship Details</h2>

            <div className="detail-box">
              <h5 className="heading-box">
                Fee Structure For SUDARSHAN Course (1 Year)
              </h5>
              <table className="fees-table">
                <thead>
                  <tr>
                    <th className="table-head">
                      Admission + Infra. + Study material free
                    </th>
                    <th className="table-head">Tution Fee(TF)</th>
                    <th className="table-head">Caution Money</th>
                    <th className="table-head">
                      Gross Total Fee (if paid in inst.)
                    </th>
                    <th className="table-head">1st inst.</th>
                    <th className="table-head">2nd inst.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3100</td>
                    <td>30500</td>
                    <td>1500</td>
                    <td>35100</td>
                    <td>20100</td>
                    <td>15000</td>
                  </tr>
                </tbody>
              </table>
              <p className="details-para">
                1st Installment is 60% of the total fee & 2nd Installment is 40%
                in Single Year Course. 1st Installment at the time of admission
                while 2nd installment on or before 60 days of course
                commencement. For students who deposit the fees in 2
                installment, it is mandatory for them to submit a Post Dated
                Cheque (PDC) of the remaining installment.
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="scholar-box">
                    <h3 className="scholar-head">Scholarship Criteria</h3>
                    <ul className="box-ul">
                      <li>
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Scholarship based on <b>Board Exam Marks.</b>
                      </li>
                      <li>
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Scholarship based on{" "}
                        <b>Competitive Exam Performance.</b>
                      </li>
                      <li>
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        To Know More{"   "}
                        <HashLink to="/fees-structure#section">
                          <button className="btn-one buttn"> Click Here</button>
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="scholars-box">
                    <h3 className="scholar-head">Scholarship Test Details</h3>
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    <button className="btn btn-secondary buttn">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="apply">
                <NavLink to="/Admission-form">
                  <button
                    className="apply-btn btn btn-primary"
                    style={{ backgroundColor: "green" }}
                  >
                    Apply Online
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <Benefits />
      </Layout>
    </>
  );
};

export default M_Twelve;
