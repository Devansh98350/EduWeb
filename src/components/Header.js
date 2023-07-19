import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = (e) => {
  return (
    <>
      <div className="header" style={{ backgroundColor: "blu" }}>
        <div className="row1">
          <nav className="navbar-expand-lg bg-body-tertiary">
            <div
              className="container-fluid"
              style={{
                backgroundColor: "white",
              }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <Link className="navbar-brand">
                  <img
                    src="/IIT_Academy.jpeg"
                    style={{
                      marginRight: "10px",
                      marginDown: "90px",
                      fontSize: "30px",
                      width: "300px",
                      height: "80px",
                    }}
                    alt=""
                  />
                  <span style={{ marginLeft: "5px" }}></span>
                </Link>
                <Link
                  to="https://wa.me/918453307045?text=Chat With IIT Academy&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                  className="navbar-brand"
                >
                  <img
                    src="/chatus.gif"
                    style={{
                      marginLeft: "50px",
                      fontSize: "30px",
                      width: "150px",
                      height: "50px",
                      cursor: "pointer",
                    }}
                    alt=""
                  />
                  <span style={{ marginLeft: "5px" }}></span>
                </Link>
                <Link to="" className="navbar-brand">
                  <img
                    src="/testser.png"
                    style={{
                      marginLeft: "50px",
                      fontSize: "30px",
                      width: "200px",
                      height: "60px",
                    }}
                    alt=""
                  />
                  <span style={{ marginLeft: "5px" }}></span>
                </Link>
                <Link to="tel:8453307045" className="navbar-brand">
                  <img
                    src="/cu2.jpg"
                    style={{
                      marginLeft: "250px",
                      fontSize: "30px",
                      width: "200px",
                      height: "60px",
                    }}
                    alt=""
                  />
                  <span style={{ marginLeft: "5px" }}></span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="row2">
          <nav className=" navbar-expand-lg bg-body-tertiary">
            <div
              className="container-fluid"
              style={{ backgroundColor: "#F39C12 " }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{}}
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul
                  className="navbar-nav ms-auto mb-2 mb-lg-0 "
                  style={{
                    fontSize: "18px",
                    fontFamily: "comforta",
                    fontWeight: "bold",
                  }}
                >
                  <li
                    className="nav-item"
                    style={{
                      marginLeft: "20px",
                      marginRight: "25px",
                    }}
                  >
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{
                        border: "none",
                        marginLeft: "25px",
                        marginRight: "25px",
                        color: "White",
                      }}
                      aria-expanded="false"
                    >
                      About
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/about-iit-academy"
                          className="dropdown-item"
                        >
                          IIT Academy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about-director-iit-academy"
                          className="dropdown-item"
                        >
                          About Director
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/director-message-iit-academy"
                          className="dropdown-item"
                        >
                          Director's Message
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faculty-message-iit-academy"
                          className="dropdown-item"
                        >
                          Faculty Message
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/why-iit-academy"
                          className="dropdown-item"
                        >
                          Why IIT Academy
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "25px",
                      marginRight: "25px",
                    }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Batches
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/engineering-class-11-iit-academy"
                          className="dropdown-item"
                        >
                          RiJEEing(Class-11)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/engineering-class-12-iit-academy"
                          className="dropdown-item"
                        >
                          JEEneous(Class-12)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/medical-class-11-iit-academy"
                          className="dropdown-item"
                        >
                          Medilite(Class-11)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/medical-class-12-iit-academy"
                          className="dropdown-item"
                        >
                          NEETmed(Class-12)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/foundation-class-9-iit-academy"
                          className="dropdown-item"
                        >
                          Foundation 2.0(Class-9)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/foundation-class-10-iit-academy"
                          className="dropdown-item"
                        >
                          ExcelX(Class-10)
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    style={{
                      marginLeft: "25px",
                      marginRight: "25px",
                    }}
                  >
                    <NavLink
                      to="/faculty-iit-academy"
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Faculty
                    </NavLink>
                  </li>
                  <li
                    className="nav-item dropdown"
                    style={{ marginLeft: "25px", marginRight: "25px" }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Admission
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/admission-process-iit-academy"
                          className="dropdown-item"
                        >
                          Admission Process
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/admission-enquiry-iit-academy"
                          className="dropdown-item"
                        >
                          Admission Enquiry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          Privacy policy
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item dropdown"
                    style={{
                      marginLeft: "25px",
                      marginRight: "25px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Login Section
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/" className="dropdown-item">
                          Students
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="dropdown-item">
                          Faculty
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    style={{ marginLeft: "25px", marginRight: "25px" }}
                  >
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Result
                    </NavLink>
                  </li>
                  <li
                    className="nav-item"
                    style={{
                      marginLeft: "25px",
                      marginRight: "220px",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeclassname="active"
                      style={{ color: "White" }}
                    >
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
