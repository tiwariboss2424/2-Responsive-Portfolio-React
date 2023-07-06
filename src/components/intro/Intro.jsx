import "../.././styles.css";
import "./intro.css";
import FloatingDiv from "../floatingdiv/FloatingDiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Yimg from "../../img/Vector2.png";
import Bimg from "../../img/Vector1.png";
import boy from "../../img/boy.png";
import Thumsup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassEmogy from "../../img/glassesimoji.png";
// import Services from "../services/Services";
export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy! This is </span>
            <span>Niranjan Tiwari</span>
            <span className="n-toggle">
              I am the first year student of gaya college of engineering gaya{" "}
              <br />
              <span style={{ color: "magenta", fontSize: "1rem" }}>
                Computer Science branch{" "}
              </span>{" "}
              and a
              <span style={{ color: "magenta", fontSize: "1rem" }}>
                {" "}
                React develper{" "}
              </span>
              . I have started developent from the first year of my college and
              now after giving my time to it , I am in love with it.{" "}
            </span>
          </div>
          <button className="buttons i-button">Hire Me </button>
          <div className="i-socialmedia">
            <a href="">
              <img src={Github} alt="Loading icon " />
            </a>
            <a href="">
              <img src={Linkedin} alt="Loading icon " />
            </a>
            <a href="">
              <img src={Instagram} alt="Loading icon " />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img src={Bimg} alt="Loading icon " />
          <img src={Yimg} alt="Loading icon " />
          <img src={boy} alt="Loading icon " />
          <img
            src={GlassEmogy}
            style={{
              transform: "scale(0.6)",
            }}
            alt="Loading icon "
          />

          <div style={{ top: "10%", right: "10%" }}>
            <FloatingDiv images={Crown} text1="Web" text2="Developer" />
          </div>
          <div style={{ top: "80%", right: "99%" }}>
            <FloatingDiv images={Thumsup} text1="Design" text2="Lover" />
          </div>
        </div>
        <div className="blur"></div>
        <div className="blur1"></div>
      </div>
      {/* <Services/> */}
    </>
  );
}
