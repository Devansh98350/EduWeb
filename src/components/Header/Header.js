import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainlogo from "../../assets/homepage/IIT_Academy.jpg";
import mono from "../../assets/homepage/mono.jpg";
import whatsapp from "../../assets/homepage/chatus.gif";
import call from "../../assets/homepage/cu4.gif";
import admission from "../../assets/homepage/adm.gif";
import "./Header.css";

// JavaScript function to toggle the mobile menu and update the triangle icon
let isMobileMenuOpen = false; // Track the menu state
let mobileMenuTimeout; // Store a reference to the timeout

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector("#navbarTogglerDemo01");
  const menuIcon = document.querySelector(".navbar-toggler");

  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    // Check if navbarCollapse is not null
    navbarCollapse.classList.add("show");
    menuIcon.textContent = "\u25B2";
    isMobileMenuOpen = true;

    navbarCollapse.addEventListener("mouseleave", closeMobileMenu);
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
/*Correct format*/
// const Header = (props) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   function toggleMobileMenu() {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   }

//   return (
//     <>
//       <div className="header" style={{ backgroundColor: "blue" }}>
//         <div className="row1">
//           <div className="container-fluid">
//             <div className="header-col1">
//               <a className="navbar-brand" href="/">
//                 <img src={mainlogo} alt="" />
//               </a>
//             </div>

//             <div className="header-col2">
//               <div className="header-col3">
//                 <a
//                   className="header-col12"
//                   href="https://docs.google.com/forms/d/e/1FAIpQLSdhyUZrK-2UP8DbWgEn3M4bcYCtXG5tSyNUrbFYiDgRaAX2XQ/viewform?usp=sf_link"
//                 >
//                   <img src={admission} alt="" />
//                 </a>
//               </div>
//               <div className="header-col21">
//                 <a
//                   href="https://wa.me/918453307045?text=Chat With IIT Academy&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
//                   className="navbar-brand"
//                 >
//                   <img src={whatsapp} alt="" />
//                 </a>
//               </div>
//               <div className="header-col22">
//                 <a href="tel:8453307045" className="navbar-brand">
//                   <img src={call} alt="" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row2">
//           <nav className=" navbar-expand-lg bg-body-tertiary">
//             <div
//               className="container-fluid"
//               style={{ backgroundColor: "#F39C12 " }}
//             >
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarTogglerDemo01"
//                 aria-controls="navbarTogglerDemo01"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//                 onClick={toggleMobileMenu}
//                 style={{ color: "white", justifyContent: "center" }}
//               >
//                 <span className="navbar-toggler-icon" />
//                 Menu
//               </button>
//               <div
//                 className={`collapse navbar-collapse ${
//                   isMobileMenuOpen ? "show" : ""
//                 }`}
//                 id="navbarTogglerDemo01"
//                 class="collapse navbar-collapse"
//               >
//                 <ul
//                   className="navbar-nav mx-auto mb-2 mb-lg-0 "
//                   style={{
//                     fontSize: "20px",
//                     fontFamily: "comforta",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   <li
//                     className="nav-item"
//                     style={{
//                       marginRight: "25px",
//                     }}
//                   >
//                     <NavLink
//                       to="/"
//                       className="nav-link"
//                       activeclassname="active"
//                       style={{ color: "White" }}
//                     >
//                       Home
//                     </NavLink>
//                   </li>
//                   <li className="nav-item dropdown hover">
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href=""
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{
//                         border: "none",
//                         marginLeft: "25px",
//                         marginRight: "25px",
//                         color: "White",
//                       }}
//                       aria-expanded="false"
//                     >
//                       About
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <NavLink
//                           to="/about-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           IIT Academy
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/director-message-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Welcome Message
//                         </NavLink>
//                       </li>

//                       <li>
//                         <NavLink
//                           to="/why-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Why IIT Academy
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/faculty-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Our Faculty
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/frequently-asked-questions-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           FAQ's
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/gallery-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Gallery
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                   <li
//                     className="nav-item dropdown hover"
//                     style={{ marginLeft: "25px", marginRight: "25px" }}
//                   >
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href=" "
//                       role="button"
//                       style={{ border: "none", color: "White" }}
//                       aria-expanded="false"
//                       data-bs-toggle="dropdown"
//                     >
//                       Batches
//                     </NavLink>
//                     <div className="dropdown">
//                       <div className="dropdown-content">
//                         <div className="row">
//                           <div className="column">
//                             <h3>Engineering</h3>
//                             <NavLink
//                               to="/engineering-class-11-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{
//                                   color: "#f39c12",
//                                   marginRight: "5px",
//                                 }}
//                               ></i>
//                               Arjuna
//                             </NavLink>
//                             <NavLink
//                               to="/engineering-class-12-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Chaitanya
//                             </NavLink>
//                             <NavLink
//                               to="/engineering-class-13-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Eklavya
//                             </NavLink>
//                           </div>
//                           <div className="column">
//                             <h3>Medical</h3>
//                             <NavLink
//                               to="/medical-class-11-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Ananta
//                             </NavLink>
//                             <NavLink
//                               to="/medical-class-12-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Sudarshan
//                             </NavLink>
//                             <NavLink
//                               to="/medical-class-13-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Swadhyaya
//                             </NavLink>
//                           </div>
//                           <div className="column">
//                             <h3>Foundation</h3>
//                             <NavLink
//                               to="/foundation-class-06-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Aadhya
//                             </NavLink>
//                             <NavLink
//                               to="/foundation-class-07-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Abhinav
//                             </NavLink>
//                             <NavLink
//                               to="/foundation-class-08-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Abhyas
//                             </NavLink>
//                             <NavLink
//                               to="/foundation-class-09-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Aarohan
//                             </NavLink>
//                             <NavLink
//                               to="/foundation-class-10-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Atal
//                             </NavLink>
//                           </div>
//                           <div className="column">
//                             <h3>DLP</h3>
//                             <NavLink
//                               to="/distance-class-10-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Sankalp
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-11-engg-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Utkarsh
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-12-engg-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Lakshya
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-13-engg-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Abhiyaan
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-11-med-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Yukti
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-12-med-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Sarthak
//                             </NavLink>
//                             <NavLink
//                               to="/distance-class-13-med-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Pragya
//                             </NavLink>
//                           </div>
//                           <div className="column">
//                             <h3>Boards</h3>
//                             <NavLink
//                               to="/boards-class-11-pcm-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Sammarsa
//                             </NavLink>
//                             <NavLink
//                               to="/boards-class-12-pcm-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Vikash
//                             </NavLink>
//                             <NavLink
//                               to="/boards-class-11-pcb-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Daksh
//                             </NavLink>
//                             <NavLink
//                               to="/boards-class-12-pcb-iit-academy"
//                               className="dropright-item"
//                             >
//                               <i
//                                 className="fas fa-angle-double-right"
//                                 style={{ color: "#f39c12", marginRight: "5px" }}
//                               ></i>
//                               Samridhi
//                             </NavLink>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     className="nav-item dropdown hover"
//                     style={{ marginLeft: "25px", marginRight: "25px" }}
//                   >
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{ border: "none", color: "White" }}
//                       aria-expanded="false"
//                     >
//                       Admission
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <NavLink to="/fees-structure" className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Fee Structure
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/admission-process-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Admission Process
//                         </NavLink>
//                       </li>
//                       {/* <li>
//                         <NavLink
//                           to="/our-policy-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Pay Fees Online
//                         </NavLink>
//                       </li> */}
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Pay Fees Online
//                         </div>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/admission-enquiry-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Admission Enquiry
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/our-policy-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Privacy policy
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                   <li
//                     className="nav-item dropdown hover"
//                     style={{
//                       marginLeft: "25px",
//                       marginRight: "25px",
//                       color: "white",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{ border: "none", color: "White" }}
//                       aria-expanded="false"
//                     >
//                       Login Section
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <NavLink
//                           to="/students-login-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Students
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/faculty-login-iit-academy"
//                           className="dropdown-item"
//                         >
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Faculty
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                   <li
//                     className="nav-item dropdown hover"
//                     style={{ marginLeft: "25px", marginRight: "25px" }}
//                   >
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       style={{ border: "none", color: "White" }}
//                       aria-expanded="false"
//                     >
//                       Result
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           JEE-Mains
//                         </div>
//                       </li>
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           JEE-Advance
//                         </div>
//                       </li>
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           NEET
//                         </div>
//                       </li>
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           Boards
//                         </div>
//                       </li>
//                       {/* NavLink to="/" */}
//                       <li>
//                         <div className="dropdown-item">
//                           <i
//                             className="fas fa-angle-double-right"
//                             style={{ color: "#f39c12", marginRight: "5px" }}
//                           ></i>
//                           KVPY
//                         </div>
//                       </li>
//                     </ul>
//                   </li>
//                   <li
//                     className="nav-item"
//                     style={{
//                       marginLeft: "25px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <div
//                       className="nav-link"
//                       activeclassname="active"
//                       style={{ color: "White" }}
//                     >
//                       Contact Us
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRow2Fixed, setIsRow2Fixed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleScroll = () => {
      const row1 = document.querySelector(".row1");
      // const row2 = document.querySelector(".row2");
      const row1Rect = row1.getBoundingClientRect();

      if (row1Rect.bottom <= 0) {
        setIsRow2Fixed(true);
      } else {
        setIsRow2Fixed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderBatchesDropdown = () => {
    if (windowWidth >= 768) {
      return (
        <li
          className="nav-item dropdown hover"
          style={{ marginLeft: "25px", marginRight: "25px" }}
        >
          <NavLink
            className="nav-link dropdown-toggle"
            href=" "
            role="button"
            style={{
              border: "none",
              color: "white",
            }}
            aria-expanded="false"
            data-bs-toggle="dropdown"
          >
            Batches
          </NavLink>
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>Engineering</h3>
                  <NavLink
                    to="/engineering-class-11"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{
                        color: "#f39c12",
                        marginRight: "5px",
                      }}
                    ></i>
                    Arjuna
                  </NavLink>
                  <NavLink
                    to="/engineering-class-12"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Chaitanya
                  </NavLink>
                  <NavLink
                    to="/engineering-class-13"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Eklavya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Medical</h3>
                  <NavLink to="/medical-class-11" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Ananta
                  </NavLink>
                  <NavLink to="/medical-class-12" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sudarshan
                  </NavLink>
                  <NavLink to="/medical-class-13" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Swadhyaya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Foundation</h3>
                  <NavLink to="/foundation-class-06" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Aadhya
                  </NavLink>
                  <NavLink to="/foundation-class-07" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhinav
                  </NavLink>
                  <NavLink to="/foundation-class-08" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhyas
                  </NavLink>
                  <NavLink to="/foundation-class-09" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Aarohan
                  </NavLink>
                  <NavLink to="/foundation-class-10" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Atal
                  </NavLink>
                </div>
                <div className="column">
                  <h3>DLP</h3>
                  <NavLink to="/distance-class-10" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sankalp
                  </NavLink>
                  <NavLink
                    to="/distance-class-11-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Utkarsh
                  </NavLink>
                  <NavLink
                    to="/distance-class-12-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Lakshya
                  </NavLink>
                  <NavLink
                    to="/distance-class-13-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhiyaan
                  </NavLink>
                  <NavLink
                    to="/distance-class-11-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Yukti
                  </NavLink>
                  <NavLink
                    to="/distance-class-12-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sarthak
                  </NavLink>
                  <NavLink
                    to="/distance-class-13-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Pragya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Boards</h3>
                  <NavLink to="/boards-class-11-pcm" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sammarsa
                  </NavLink>
                  <NavLink to="/boards-class-12-pcm" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Vikash
                  </NavLink>
                  <NavLink to="/boards-class-11-pcb" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Daksh
                  </NavLink>
                  <NavLink to="/boards-class-12-pcb" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Samridhi
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }
    // Return null if the screen width is less than 768 pixels (mobile view)
    return null;
  };
  const renderBatchesDropdown1 = () => {
    if (windowWidth >= 768) {
      return (
        <li
          className="nav-item dropdown hover"
          style={{ marginLeft: "25px", marginRight: "25px" }}
        >
          <NavLink
            className="nav-link dropdown-toggle"
            href=" "
            role="button"
            style={{
              border: "none",
              color: "black",
              fontSize: "20px",
              backgroundColor: "white",
              textDecoration: "none",
            }}
            aria-expanded="false"
            data-bs-toggle="dropdown"
          >
            Batches
          </NavLink>
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>Engineering</h3>
                  <NavLink
                    to="/engineering-class-11"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{
                        color: "#f39c12",
                        marginRight: "5px",
                      }}
                    ></i>
                    Arjuna
                  </NavLink>
                  <NavLink
                    to="/engineering-class-12"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Chaitanya
                  </NavLink>
                  <NavLink
                    to="/engineering-class-13"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Eklavya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Medical</h3>
                  <NavLink to="/medical-class-11" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Ananta
                  </NavLink>
                  <NavLink to="/medical-class-12" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sudarshan
                  </NavLink>
                  <NavLink to="/medical-class-13" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Swadhyaya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Foundation</h3>
                  <NavLink to="/foundation-class-06" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Aadhya
                  </NavLink>
                  <NavLink to="/foundation-class-07" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhinav
                  </NavLink>
                  <NavLink to="/foundation-class-08" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhyas
                  </NavLink>
                  <NavLink to="/foundation-class-09" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Aarohan
                  </NavLink>
                  <NavLink to="/foundation-class-10" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Atal
                  </NavLink>
                </div>
                <div className="column">
                  <h3>DLP</h3>
                  <NavLink to="/distance-class-10" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sankalp
                  </NavLink>
                  <NavLink
                    to="/distance-class-11-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Utkarsh
                  </NavLink>
                  <NavLink
                    to="/distance-class-12-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Lakshya
                  </NavLink>
                  <NavLink
                    to="/distance-class-13-engineering"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Abhiyaan
                  </NavLink>
                  <NavLink
                    to="/distance-class-11-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Yukti
                  </NavLink>
                  <NavLink
                    to="/distance-class-12-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sarthak
                  </NavLink>
                  <NavLink
                    to="/distance-class-13-medical"
                    className="dropright-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Pragya
                  </NavLink>
                </div>
                <div className="column">
                  <h3>Boards</h3>
                  <NavLink to="/boards-class-11-pcm" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Sammarsa
                  </NavLink>
                  <NavLink to="/boards-class-12-pcm" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Vikash
                  </NavLink>
                  <NavLink to="/boards-class-11-pcb" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Daksh
                  </NavLink>
                  <NavLink to="/boards-class-12-pcb" className="dropright-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Samridhi
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }
    // Return null if the screen width is less than 768 pixels (mobile view)
    return null;
  };
  const topview = () => {
    if (windowWidth >= 768) {
      return (
        <div className="header-col2">
          <div className="header-col3">
            {/* <a
              className="header-col12"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhyUZrK-2UP8DbWgEn3M4bcYCtXG5tSyNUrbFYiDgRaAX2XQ/viewform?usp=sf_link"
            >
              <img src={admission} alt="" />
            </a> */}
            <li>
              <NavLink to="/Admission-form" className="header-col12">
                <img src={admission} alt="" />
              </NavLink>
            </li>
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
      );
    }
    // Return null if the screen width is less than 768 pixels (mobile view)
    return null;
  };
  const isWebMode = () => {
    // Define the maximum width for the web view
    const maxWebWidth = 768;

    // Check if the window width is greater than the maximum web width
    return window.innerWidth > maxWebWidth;
  };

  document.addEventListener("contextmenu", function (event) {
    var target = event.target;
    if (target.tagName === "IMG") {
      event.preventDefault();
    }
  });
  return (
    <div className={`row1 ${isRow2Fixed ? "row1-fixed" : ""}`}>
      <div className="row1" style={{ display: "row" }}>
        <div className="container-fluid">
          <div className="header-col1">
            <a className="navbar-brand" href="/" onClick={toggleMobileMenu}>
              <img src={mainlogo} alt="" />
            </a>
          </div>

          {topview()}
        </div>
      </div>

      {isWebMode() && isRow2Fixed ? (
        <div className="row2-fixed">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid1"
                // style={{ backgroundColor: "white " }}
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
                  style={{ color: "white", justifyContent: "center" }}
                >
                  <span className="navbar-toggler-icon" />
                  Menu
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isMobileMenuOpen ? "show" : ""
                  }`}
                  id="navbarTogglerDemo01"
                  class="collapse navbar-collapse"
                >
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <NavLink
                        to="/"
                        className="nav-link"
                        activeclassname="active"
                        style={{ color: "black", textDecoration: "none" }}
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
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        About
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/about" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IIT Academy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/director-message"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Welcome Message
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/why-us" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Why IIT Academy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/our-faculty" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Our Faculty
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/frequently-asked-questions"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            FAQ's
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/gallery" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown1()}
                    <div className={`header-col1  text-center`}>
                      <img src={mono} alt="" />
                    </div>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Admission
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/fees-structure"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Fee Structure
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/admission-process"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Process
                          </NavLink>
                        </li>
                        {/* <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </NavLink>
                      </li> */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Pay Fees Online
                          </div>
                        </li>
                        <li>
                          <NavLink
                            to="/admission-enquiry"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Enquiry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/our-policy" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
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
                      }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Login Section
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/students-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Students
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/faculty-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Faculty
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Contact Us
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/careers" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      ) : (
        <div className="row2">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
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
                  style={{ color: "white", justifyContent: "center" }}
                >
                  <span className="navbar-toggler-icon" />
                  Menu
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isMobileMenuOpen ? "show" : ""
                  }`}
                  id="navbarTogglerDemo01"
                  class="collapse navbar-collapse"
                >
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
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
                          <NavLink to="/about" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            IIT Academy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/director-message"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Welcome Message
                          </NavLink>
                        </li>

                        <li>
                          <NavLink to="/why-us" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Why IIT Academy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/our-faculty" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Our Faculty
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/frequently-asked-questions"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            FAQ's
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/gallery" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown()}
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
                            to="/fees-structure"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Fee Structure
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/admission-process"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Process
                          </NavLink>
                        </li>
                        {/* <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "#f39c12", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </NavLink>
                      </li> */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Pay Fees Online
                          </div>
                        </li>
                        <li>
                          <NavLink
                            to="/admission-enquiry"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Admission Enquiry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/our-policy" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
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
                            to="/students-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Students
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/faculty-login"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Faculty
                          </NavLink>
                        </li>
                      </ul>
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
                        Result
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            JEE-Mains
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            JEE-Advance
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            NEET
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Boards
                          </div>
                        </li>
                        {/* NavLink to="/" */}
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            KVPY
                          </div>
                        </li>
                      </ul>
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
                        Contact Us
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/careers" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
