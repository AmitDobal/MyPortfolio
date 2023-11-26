import React from "react";
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Amit Dobal</span>
          <span>
            Full stack developer with high level of experience in web designing
            and development, producing the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
      </div>

      <div className="i-right"></div>
    </div>
  );
};

export default Intro;
