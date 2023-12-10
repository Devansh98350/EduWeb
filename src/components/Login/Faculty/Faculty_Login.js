import React, { useState } from "react";
import Layout from "../../Layout"; // Assuming you have a Layout component
import googleIcon from "../../../assets/homepage/google.png";
import "./Faculty_Login.css";

const Faculty_Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Layout title={"Faculty Login-IIT Academy"}>
      {/* Pills navs */}
      <div className="container-box">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabSwitch("login")}
              href=" "
              role="tab"
              aria-controls=" "
              aria-selected={activeTab === "login"}
            >
              Faculty Login
            </a>
          </li>
        </ul>
        {/* Pills navs */}
        {/* Pills content */}
        <div className="tab-content">
          <div
            className={`tab-pane fade show ${
              activeTab === "login" ? "active" : ""
            }`}
            id=""
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <img src={googleIcon} alt="Google" />
                </button>
              </div>
              <p className="text-center">or:</p>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Faculty Name
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="subject"
                  id="loginSubject"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginSubject">
                  Subject
                </label>
              </div>
              {/* 2 column grid layout */}
              <div className="row mb-4">
                <div className="col-md-6 col-12 d-flex justify-content-center">
                  {/* Checkbox */}
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="loginCheck"
                      defaultunChecked
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  {/* Simple link */}
                  <a href=" ">Forgot password?</a>
                </div>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </form>
          </div>
        </div>
        {/* Pills content */}
      </div>
    </Layout>
  );
};

export default Faculty_Login;
