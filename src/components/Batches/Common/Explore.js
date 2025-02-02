import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="aders">
      <p>
        <i
          className="fas fa-angle-double-right"
          style={{
            color: "#f39c12",
            marginRight: "5px",
          }}
        ></i>{" "}
        Explore More about different batches offered by IIT Academy.
      </p>
      <div className="all_batches">
        {" "}
        <Link to="/engineering-batches">
          <button className="details4-btn">Engineering Batches</button>
        </Link>
        <Link to="/medical-batches">
          <button className="details4-btn">Medical Batches</button>
        </Link>
        <Link to="/foundation-batches">
          <button className="details4-btn">Foundation Batches</button>
        </Link>
        <Link to="/board-batches">
          <button className="details4-btn">Boards Batches</button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
