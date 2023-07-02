import React, { useState, useContext } from "react";
import "./Navbar.css";
import "../../styles.css";
import { FaTh, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import {ChangeBg} from '../Context';
// import Intro from "../intro/Intro";

const bg = document.body;
const logo = document.querySelector(".n-toggle");
// const navshow = document.getElementById("navshow");
const Navbar = () => {
  const [show, setShow] = useState(true);
  const ShowIcons = () => {
    if (show) {
      document.getElementById("navshow").style.display = "block";
      setShow(false);
    } else {
      document.getElementById("navshow").style.display = "none";
      setShow(true);
    }
  };
  const [toggleBg, setToggleBg] = useState("dark");
  // const ToggleBg=useContext(ChangeBg);
  const ToggleBg = () => {
    if (toggleBg === "dark") {
      setToggleBg("light");
      bg.style.background = "black";
    
    } else {
      setToggleBg("dark");
      bg.style.background = "white";
    
    }
  };
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left-top">
          <div className="n-logo n-toggle">React</div>
          <button
            onClick={ToggleBg}
            style={{
              borderRadius: "10px",
              outline: "none",
              border: "none",
              background: "black",
              color: "cyan"
            }}
          >
            {toggleBg}
          </button>
        </div>
        <div className="n-right-top" id="navshow">
          <div className="n-list">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/experience">
                <li>Experience</li>
              </Link>
              <Link to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link to="/testimonial">
                <li>Testimonial</li>
              </Link>
            </ul>
          </div>
          <button className="buttons n-button">Contact</button>
        </div>
        <div
          className="showIcon "
          onClick={() => ShowIcons()}
          style={{ margin: "20px" }}
        >
          {show ? <FaTh /> : <FaTimes />}
        </div>
      </div>
    </>
  );
};
export default Navbar;
