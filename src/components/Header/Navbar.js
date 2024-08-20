import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styled from "styled-components";
import mono from "../../assets/homepage/mono.webp";
import mainlogo from "../../assets/homepage/IIT_Academy.webp";
import whatsapp from "../../assets/homepage/chatus.gif";
// import call from "../../assets/homepage/call_now.gif";
// import admission from "../../assets/homepage/Admission.gif";
import call from "../../assets/homepage/call_now.gif";
// import admission from "../../assets/homepage/adm.gif";

const StyledDiv10 = styled.div`
  /* Header row1*/

  .container-fluid {
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  .header {
    margin-top: 0px;
  }
  .header-col1,
  .header-col2,
  .header-col3 {
    display: flex;
    align-items: center;
  }
  .header-col1 img {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    height: 75px;
    width: auto;
  }
  img {
    pointer-events: none; /* Disable click events */
    user-select: none; /* Disable selection */
  }

  .header-col12 img {
    display: flex;
    align-items: center;
    font-size: 30px;
    width: auto;
    height: 100px;
  }

  .header-col21 img {
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-size: 30px;
    width: auto;
    height: 65px;
  }

  .header-col22 img {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 80px;
    font-size: 30px;
    width: auto;
    height: 50px;
  }

  /*Header Row 2*/

  .row2 {
    transition: all 0.1s ease;
    margin-bottom: 20px;
  }

  .row2-fixed {
    position: fixed;
      padding-top: 50 px;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 4px solid #F39C12;
    /* transition: background-color 0.1s, transform 0.1s; */
  }
 
  .container-fluid1 {
    background-color: white;
  }

  .nav-item {
    position: relative;
    display: inline-block;
    align-items: center;
  }

  .nav-link {
    color: white;
    border: none;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff; /* Background color for the dropdown menu */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* Box shadow for the dropdown */
    z-index: 100;
    width: 1000px;
  }

  .hover:hover .dropdown-menu {
    display: block;
    width: auto;
    text-decoration: none;
  }

  .nav-item.dropdown {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  .nav-link.dropdown-toggle {
    color: black;
    border: none;
    cursor: pointer;
  }
 .nav-link.dropdown-toggle.active {
    color: black;
    border: none;
    cursor: pointer;
  }
  .dropdown-item {
    color: black;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 0; /* Adjust padding as needed */
    text-align: left;
    text-decoration: none;
    display: block;
    padding: 10px;
  }
  .dropdown-item:hover{
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }
  .active{
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }
  .dropdown-heading {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    text-decoration: none;
  }

  /*For Batches*/

  .column a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .column h3 {
    color:#F39C12;
  }

  .nav-item.dropdown .nav-link.dropdown-toggle {
    background-color: #F39C12;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .nav-item.dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 100;
    width: 1000px; 
    left: 40%; 
    transform: translateX(-35%);
    border-bottom: 2px solid orange;
  }

  .nav-item.dropdown:hover .dropdown-content {
    display: block;
  }

  .nav-item.dropdown .column {
    float: left;
    width: 20%;
    padding: 10px;
    height: 400px; 
  }

  .nav-item.dropdown .column h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
  }

  .nav-item.dropdown .column a {
    color: black;
    font-weight: light;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .nav-item.dropdown .column a:hover,
  .nav-item.dropdown .column a .active {
    background-color: #2904F9;
    color:white;
    border-radius:20px; 
    text-decoration: none;
  }

  .nav-item.dropdown .column a:hover i {
    color: #fff; /* Change text color of the icon to white on hover */
  }
  .dropright-item{
    font-size: 18px;
  }
  .nav-item.dropdown .column h3 {
    border-bottom: 1px solid black; /* Add a white line below each h3 element */
    padding-bottom: 5px; /* Add some padding for better visual separation */
    margin-bottom: 0px; /* Adjust margin as needed */
  }
}
`;

const Navbar = (props) => {
  const [isRow2Fixed, setIsRow2Fixed] = useState(false);
  useEffect(() => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const renderBatchesDropdown = () => {
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
                <NavLink to="/engineering-class-11" className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "#f39c12",
                      marginRight: "5px",
                    }}
                  ></i>
                  Arjuna
                </NavLink>
                <NavLink to="/engineering-class-12" className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Chaitanya
                </NavLink>
                <NavLink to="/engineering-class-13" className="dropright-item">
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
  };
  const renderBatchesDropdown1 = () => {
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
                <NavLink to="/engineering-class-11" className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "#f39c12",
                      marginRight: "5px",
                    }}
                  ></i>
                  Arjuna
                </NavLink>
                <NavLink to="/engineering-class-12" className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "#f39c12", marginRight: "5px" }}
                  ></i>
                  Chaitanya
                </NavLink>
                <NavLink to="/engineering-class-13" className="dropright-item">
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
  };
  return (
    <StyledDiv10>
      <div className="row1" style={{ display: "row" }}>
        <div className="container-fluid">
          <div className="header-col1">
            <a className="navbar-brand" href="/">
              <img src={mainlogo} alt="" />
            </a>
          </div>
          <div className="header-col2">
            {/*<div className="header-col3">
              <NavLink to="/Admission-form" className="header-col12">
                <img src={admission} alt="" />
              </NavLink>
            </div>*/}
            <div className="header-col21">
              <a
                href="https://wa.me/919205704041?text=I have a query.&utm_medium=&utm_campaign=&utm_term=&utm_content=&lang=en"
                className="navbar-brand"
              >
                <img src={whatsapp} alt="" />
              </a>
            </div>
            <div className="header-col22">
              <a href="tel:9205704041" className="navbar-brand">
                <img src={call} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isRow2Fixed ? (
        <div className="row2-fixed">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid1"
                // style={{ backgroundColor: "white " }}
              >
                <div
                  className="navbarTogglerDemo01"
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
                        style={{
                          color: "black",
                          textDecoration: "none",
                          backgroundColor: "white",
                        }}
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
                      <img src={mono} alt="" style={{ height: "50px" }} />
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
                          <NavLink to="/internship" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Internship
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
                        <li>
                          <NavLink
                            to="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing"
                            className="dropdown-item"
                            target="_blank"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Brochure
                          </NavLink>
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
                style={{ backgroundColor: "#F39C12" }}
              >
                <div
                  className="navbarTogglerDemo01"
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
                        style={{
                          color: "White",
                          textDecoration: "none",
                          backgroundColor: "#F39C12",
                        }}
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
                          <NavLink to="/internship" className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Internship
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
                        <li>
                          <NavLink
                            to="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing"
                            className="dropdown-item"
                            target="_blank"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "#f39c12", marginRight: "5px" }}
                            ></i>
                            Brochure
                          </NavLink>
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
    </StyledDiv10>
  );
};

export default Navbar;
