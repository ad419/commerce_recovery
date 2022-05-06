import React from "react";
import "../../styles/_sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "@material-ui/core";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className="sidebar">
      <div
        style={{
          position: "absolute",
          top: "1rem",
          color: "white",
          cursor: "pointer",
          left: "0.4rem",
        }}
      >
        <AiOutlineClose size={25} onClick={() => setOpen(false)} />
      </div>
      <ul className="sidebar_list">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default Sidebar;
