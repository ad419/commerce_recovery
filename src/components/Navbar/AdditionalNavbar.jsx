import React from "react";
import "../../styles/_additional_nav.css";
import { AiOutlineMenu } from "react-icons/ai";

const AdditionalNavbar = () => {
  return (
    <div className="sticky_add">
      <div className="additional_navbar">
        <ul className="nav_list">
          <li>
            <div style={{ display: "flex", marginTop: "0.2rem" }}>
              <AiOutlineMenu />
              <h5
                style={{
                  fontSize: "15px",
                  marginTop: "-0.2rem",
                  marginLeft: "0.4rem",
                }}
              >
                All
              </h5>
            </div>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            Home
          </li>
          <li>Shop</li>
          <li>Features</li>
          <li>Daily</li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalNavbar;
