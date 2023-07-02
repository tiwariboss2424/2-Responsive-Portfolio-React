import React from "react";
import "./Projects.css";

import amazon from "../../img/amazon.png";
import heart from "../../img/heartemoji.png";
import fiverr from "../../img/fiverr.png";
import git from "../../img/github.png";
import humble from "../../img/humble.png";
import musicapp from "../../img/musicapp.png";
// import Portfolio from "../portfolio/Portfolio";
export default function Projects() {
  return (
    <>
      <div className="projects">
        <div class="awesome">
          <span>My Projects</span>
          <span>During-Btech</span>
          <spane>
              I Am giving the link of one of my projects in react.js that is IMDB clone .
              I have created this project in the 2nd year of my btech in 2 days.
              you can see it if you want 
          </spane>
          <a href="http://yfv5nl-3000.csb.app/">
          
          <button className="button s-button">Live-Website</button>
        
          </a>
        
          <div
            className="blur s-blur1"
            style={{ background: "#AVF1FF94" }}
          ></div>
        </div>
        {/* rightsize */}
        <div className="p-right">
          <div className="p-main-circle">
            <div className="p-sec-circle">
              <img src={heart} alt="loading" />
            </div>
            <div className="p-sec-circle">
              <img src={git} alt="loading" />
            </div>
            <div className="p-sec-circle">
              <img src={fiverr} alt="loading" />
            </div>
            <div className="p-sec-circle">
              <img src={musicapp} alt="loading" />
            </div>
            <div className="p-sec-circle">
              <img src={amazon} alt="loading" />
            </div>
          </div>
          {/* backgorund circles */}
          <div className="e-backCircle blueCircle"></div>
          <div className="e-backCircle yellowCircle"></div>
        </div>
      </div>
      
    </>
  );
}
