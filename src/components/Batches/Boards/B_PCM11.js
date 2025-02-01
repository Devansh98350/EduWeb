import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Layout from "../../Layout";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Boards.css";
import img from "../../../assets/batches/Sammarsa.webp";
import Benefits from "../Common/Benefits";
import Breadcrumbs from "../../Breadcrumbs";

const B_PCM11 = () => {
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
        title="Sammarsa(BS)-IIT Academy"
        description="Sammarsa batch is designed for Class 11 students preparing for PCM board exams, offering exceptional support and resources to build a strong foundation."
        keywords="Sammarsa, Sammarsa Batch IIT Academy, Best Batch for class 11 Boards Exam, 10th to 11th Moving Students Board Batch, PCM Board Exam Coaching Class 11, Best Physics Chemistry Math Preparation class 11 Boards, Top Board Classes for PCM class 11"
      >
        <Breadcrumbs />
        <section id="section">
          <div className="image">
            <img src={img} alt="Loading..." />
          </div>
          <div className="about">
            <h1>Why Sammarsa?</h1>
            <p>
              <i
                className="fas fa-angle-double-right"
                style={{ color: "#f39c12", marginRight: "5px" }}
              ></i>
              Sammarsa course is designed for the students who want to command
              in Class 11th (PCM). This course will build a strong foundation of
              basic concepts for School and Board Exams.
            </p>
            <p>
              <i
                className="fas fa-angle-double-right"
                style={{ color: "#f39c12", marginRight: "5px" }}
              ></i>
              Students joining this program have more time to clear their
              fundamentals and practice extensively for board exams, their
              ultimate goal!
            </p>
          </div>
          <div className="details" id="details">
            <h2 className="heading-details">Fee & Scholarship Details</h2>

            <div className="detail-box">
              <h5 className="heading-box">
                Fee Structure For SAMMARSA Course (1 Year)
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
                    <td>2100</td>
                    <td>11500</td>
                    <td>1500</td>
                    <td>15100</td>
                    <td>10100</td>
                    <td>5000</td>
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

export default B_PCM11;
