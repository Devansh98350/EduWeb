import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Advertisement.css";

const Web = () => {
  return (
    <div className="web-view">
      <p className="text">Admission for different batches is going on.</p>
      <a href="tel:9205704041" className="web-button">
        Call us
      </a>
      or
      <NavLink to="/Admission-form" className="web-button">
        Apply now <span className="arrow">&rarr;</span>
      </NavLink>
    </div>
  );
};
const Mobile = () => {
  return (
    <div className="mobile-view">
      <p className="text">Admission for different batches is going on.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "0px",
          marginBottom: "10px",
        }}
      >
        <NavLink to="/Admission-form" className="apply-button">
          Apply now <span className="arrow">&rarr;</span>
        </NavLink>
        or
        <a href="tel:9205704041" className="apply-button">
          Call us
        </a>
      </div>
    </div>
  );
};

const Advertisement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const handleDismiss = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="advertisement-container">
          <div className="content">
            {/* Content for Web View */}
            {!isMobileView && <Web />}
            {/* Content for Mobile View */}
            {isMobileView && <Mobile />}
          </div>
          <div className="dismiss-button">
            <button type="button" className="button" onClick={handleDismiss}>
              <span className="sr-only">Dismiss</span>
              <span className="dismiss-icon">&#10005;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertisement;
