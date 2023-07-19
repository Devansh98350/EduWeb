import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const PagenotFound = () => {
  return (
    <Layout title="Go Back">
      <div className="pnf" style={{ textAlign: "center" }}>
        <h1
          className="pnf-title"
          style={{ fontSize: "48px", margin: "20px 0px", marginUp: "200px" }}
        >
          404
        </h1>
        <h2
          className="pnf-heading"
          style={{ fontSize: "24px", marginBottom: "20px" }}
        >
          Oops! Page Not Found
        </h2>
        <Link
          to="/"
          className="pnf-btn"
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "blue",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PagenotFound;
