import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mainlogo from "../../assets/homepage/IIT_Academy.webp";

const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #f39c12;
  padding: 5px 10px;
  .sidenav {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: white; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s;
    font-size: 19px;
  }
  .active {
    background-color: blue;
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 19px;
    background-color: white;
    color: black;
    display: block;
    transition: 0.3s;
  }
  .sidenav .closebtn {
    position: absolute;
    text=align: right;
    top: 0;
    border-bottom: 1px solid white;
    right: 0;
    font-size: 48px;
    color: #111;
    margin-top: -15px;
  }
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 475px) {
    .sidenav {
      width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .sidenav {
      width: 90%;
    }
  }
  @media screen and (max-width: 340px) {
    .sidenav {
      width: 95%;
    }
  }
  @media screen and (max-width: 320px) {
    .sidenav {
      width: 100%;
    }
  }
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const HamburgerIcon = styled.span`
  font-size: 30px;
`;
const UserDetails = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
`;
const UserImage = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const Details = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  border-bottom: 4px solid #f39c12;
  width: 100%;
  padding: 5px 10px;
`;
const Image = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const SidebarContent = styled.div`
  background-color: white;
`;
const CloseButton = styled.a`
  cursor: pointer;
  color: black; /* Add your desired color */
`;
// Styled component for the NavLink (navigation link)
const StyledNavLink = styled(NavLink)`
  color: white;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  background-color: red;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: blue;
  }
`;

// Styled component for the dropdown menu
const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid orange;
  border-top: 1px solid orange;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;
const DropdownMenu1 = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid blue;
  border-top: 1px solid blue;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;

// Styled component for the dropdown toggle (navigation link with dropdown)
const DropdownToggle = styled(StyledNavLink)`
  color: white;
  display: block;
  padding: 1px 1px;
  text-decoration: none;
  transition: 0.3s;
  background-color: white;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownToggle1 = styled(StyledNavLink)`
  color: blue;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownItem = styled.li`
  color: white;
  padding: 2px 2px;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <StyledSidebarContainer>
      <MenuButton onClick={toggleSidebar}>
        <HamburgerIcon>&#9776;</HamburgerIcon>
      </MenuButton>
      <UserDetails>
        <UserImage src={mainlogo} alt="" />
      </UserDetails>
      {isSidebarOpen && (
        <SidebarContent>
          <div id="mySidenav" className="sidenav">
            <CloseButton className="closebtn" onClick={closeSidebar}>
              &times;
            </CloseButton>
            <Details>
              <Image src={mainlogo} alt="" />
            </Details>

            <StyledNavLink to="/" exact>
              Home
            </StyledNavLink>
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("about")}
              className="dropdown-toggle"
            >
              About
            </DropdownToggle>
            {dropdownOpen.about && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/about" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    IIT Academy
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/director-message"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Welcome Message
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/why-us" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Why IIT Academy
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Our Faculty
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/frequently-asked-questions"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    FAQ's
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Gallery
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("admission")}
              className="dropdown-toggle"
            >
              Admission
            </DropdownToggle>
            {dropdownOpen.admission && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/fees-structure" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Fee Structure
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/admission-process"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Admission Process
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Pay Fees Online
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/admission-enquiry"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Admission Enquiry
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/our-policy" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Privacy policy
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("batches")}
              className="dropdown-toggle"
            >
              Batches
            </DropdownToggle>
            {dropdownOpen.batches && (
              <DropdownMenu1>
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("engineering")}
                  className="dropdown-toggle"
                >
                  Engineering
                </DropdownToggle1>
                {dropdownOpen.engineering && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/engineering-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Arjuna
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/engineering-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Chaitanya
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/engineering-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Eklavya
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("medical")}
                  className="dropdown-toggle"
                >
                  Medical
                </DropdownToggle1>
                {dropdownOpen.medical && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/medical-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Ananta
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/medical-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sudarshan
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/medical-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Swadhyaya
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("foundation")}
                  className="dropdown-toggle"
                >
                  Foundation
                </DropdownToggle1>
                {dropdownOpen.foundation && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/class-06"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Aadhya
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/class-07"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Abhinav
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/class-08"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Abhyas
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/class-09"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Aarohan
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/class-10"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Atal
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("distance")}
                  className="dropdown-toggle"
                >
                  Distance Learning
                </DropdownToggle1>
                {dropdownOpen.distance && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/foundation-courses/distance-class-10"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sankalp
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/distance-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Utkarsh
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/distance-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Lakshya
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/engineering-courses/distance-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Abhiyaan
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/distance-class-11"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Yukti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/distance-class-12"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Sarthak
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/medical-courses/distance-class-13"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Pragya
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("boards")}
                  className="dropdown-toggle"
                >
                  Boards
                </DropdownToggle1>
                {dropdownOpen.boards && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/boards-class-11-pcm"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Sammarsa
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/boards-class-12-pcm"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Vikash
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/boards-class-11-pcb"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Daksh
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/boards-class-12-pcb"
                        className="dropdown-item"
                      >
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Samridhi
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownMenu1>
            )}

            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("login")}
              className="dropdown-toggle"
            >
              Login Section
            </DropdownToggle>
            {dropdownOpen.login && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/students-login" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Students
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/faculty-login" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Faculty
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("result")}
              className="dropdown-toggle"
            >
              Result
            </DropdownToggle>
            {dropdownOpen.result && (
              <DropdownMenu>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Mains
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Advance
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NEET
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Boards
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    KVPY
                  </div>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("contact")}
              className="dropdown-toggle"
            >
              Contact Us
            </DropdownToggle>
            {dropdownOpen.contact && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/careers" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Careers
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/internship" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Internship
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    {" "}
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Contact Us
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}

            <DropdownToggle to="/blogs">Blogs</DropdownToggle>

            <StyledNavLink to="https://drive.google.com/file/d/1KEbgiKjF3quvUXWp8hM0KlDqeqZiL0LL/view?usp=sharing">
              Brochure
            </StyledNavLink>
          </div>
        </SidebarContent>
      )}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
