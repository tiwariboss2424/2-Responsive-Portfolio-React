import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import Experience from "../experience/Experience";
const Services = () => {
  return (
    <>
      <div className="services">
        {/* leftDiv */}
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <spane>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officia cum repudiandae dicta architecto culpa fuga ea magnam id
            quo!
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#AVF1FF94" }}
          ></div>
        </div>
        {/* Rightdiv */}
        <div className="cards">
          <div style={{ left: "14rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Python , C,CPP, Django, Webdeveopement Etc. "}
            />
          </div>
          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"HTML, CSS, JavaScript, JQuery, Django, React  "}
            />
          </div>
          <div style={{ top: "19rem", left: "12rem" }}>
            <Card
              emoji={Humble}
              heading={"OS"}
              detail={" Windows, Linux, Mac , IOS "}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
