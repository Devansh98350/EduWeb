import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainlogo from "../assets/homepage/IIT_Academy.jpg";
import whatsapp from "../assets/homepage/chatus.gif";
import call from "../assets/homepage/cu4.gif";
import admission from "../assets/homepage/adm.gif";

// JavaScript function to toggle the mobile menu and update the triangle icon
let isMobileMenuOpen = false; // Track the menu state
let mobileMenuTimeout; // Store a reference to the timeout

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector("#navbarTogglerDemo01");
  const menuIcon = document.querySelector(".navbar-toggler::before");

  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    navbarCollapse.classList.add("show");
    menuIcon.textContent = "\u25B2"; // Change the menu icon to an up triangle when the menu is open using Unicode code point
    isMobileMenuOpen = true;

    // Add a mouseleave event listener to close the menu when the cursor moves away
    navbarCollapse.addEventListener("mouseleave", closeMobileMenu);

    // Clear the timeout if it's already set
    clearTimeout(mobileMenuTimeout);
  }

  function closeMobileMenu() {
    navbarCollapse.classList.add("collapsing");
    setTimeout(() => {
      navbarCollapse.classList.remove("show", "collapsing");
    }, 300);
    menuIcon.textContent = "\u2261"; // Change the menu icon back to the hamburger icon using Unicode code point
    isMobileMenuOpen = false;

    // Remove the mouseleave event listener
    navbarCollapse.removeEventListener("mouseleave", closeMobileMenu);

    // Set a timeout to close the menu after a delay (adjust the delay time as needed)
    mobileMenuTimeout = setTimeout(() => {
      navbarCollapse.classList.remove("show", "collapsing");
      menuIcon.textContent = "\u2261"; // Change the menu icon back to the hamburger icon using Unicode code point
      isMobileMenuOpen = false;
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  }

  const menuButton = document.querySelector(".navbar-toggler");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMobileMenu);
  }
});

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="header" style={{ backgroundColor: "blu" }}>
        <div className="row1">
          <div className="container-fluid">
            <div className="header-col1">
              <a className="navbar-brand" href="/">
                <img src={mainlogo} alt="" />
              </a>
            </div>

            <div className="header-col2">
              <div className="header-col3">
                <a
                  className="header-col12"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdhyUZrK-2UP8DbWgEn3M4bcYCtXG5tSyNUrbFYiDgRaAX2XQ/viewform?usp=sf_link"
                >
                  <img src={admission} alt="" />
                </a>
              </div>
              <div className="header-col21">
                <a
                  href="https://wa.me/918453307045?text=Chat With IIT Academy&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                  className="navbar-brand"
                >
                  <img src={whatsapp} alt="" />
                </a>
              </div>
              <div className="header-col22">
                <a href="tel:8453307045" className="navbar-brand">
                  <img src={call} alt="" />
                </a>
              </div>
            </div>
          </div>
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
                onClick={toggleMobileMenu}
                style={{ color: "White" }}
              >
                <span className="navbar-toggler-icon" />
                Menu
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isMobileMenuOpen ? "show" : ""
                }`}
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
                  <li className="nav-item dropdown hover">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href=""
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
                      {/* <li>
                        <NavLink
                          to="/about-director-iit-academy"
                          className="dropdown-item"
                        >
                          About Director
                        </NavLink>
                      </li> */}
                      <li>
                        <NavLink
                          to="/director-message-iit-academy"
                          className="dropdown-item"
                        >
                          CEO Message
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
                    className="nav-item dropdown hover"
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
                    className="nav-item dropdown hover"
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
                    className="nav-item dropdown hover"
                    style={{
                      marginLeft: "25px",
                      marginRight: "25px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none", color: "White" }}
                      aria-expanded="false"
                    >
                      Login Section
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to="/students-login-iit-academy"
                          className="dropdown-item"
                        >
                          Students
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faculty-login-iit-academy"
                          className="dropdown-item"
                        >
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
                      to="/gallery-iit-academy"
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
