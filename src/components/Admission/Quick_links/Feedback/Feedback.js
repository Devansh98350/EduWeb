import React, { useEffect } from "react";
import Layout from "../../../Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Privacy_policy/PrivacyPolicy";

const FeedbackGrievances = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="container mt-5">
        <h3 className="text-center text-danger mb-4">
          PLEASE SHARE THE DETAILS HERE
        </h3>
        <form>
          <div className="row mb-3 mb-sm-0">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          <div className="row mb-3 mb-sm-0">
            <div className="col-md-6">
              <select className="form-select" required>
                <option value="">Select Grievance</option>
                <option value="academic">Academic</option>
                <option value="administrative">Administrative</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-select" required>
                <option value="">Select Program</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
              </select>
            </div>
          </div>
          <div className="row mb-3 mb-sm-0">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="MOTION Roll Number*"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="MOTION Batch*"
                required
              />
            </div>
          </div>
          <div className="row mb-3 mb-sm-0">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Father Name*"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Whatsapp Number *"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Query"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-danger px-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default FeedbackGrievances;
