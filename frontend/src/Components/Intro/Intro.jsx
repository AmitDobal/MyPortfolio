import React, { useContext, useID } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import MyPic from "../../img/MyPic.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Amit Dobal</span>
          <span>
            Full stack developer with high level of experience in web designing
            and development, producing the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/AmitDobal/"
            target="_blank"
            rel="noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-singh-dobal/"
            target="_blank"
            rel="noreferrer">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://github.com/AmitDobal/"
            target="_blank"
            rel="noreferrer">
            <img src={Instagram} alt="instagrem" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={boy} alt="" /> */}
        <img src={MyPic} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          // style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          // style={{ top: "18rem", left: "0" }}
          >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}></div>
      </div>
    </div>
  );
};

export default Intro;
