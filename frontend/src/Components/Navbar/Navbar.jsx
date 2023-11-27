import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className="n-name">Amit</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="navbar" smooth activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to={"services"} smooth={true}>
              <li>Services</li>
            </Link>

            <Link spy={true} to={"experience"} smooth>
              <li>Experience</li>
            </Link>
            <Link spy={true} to={"portfolio"} smooth>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to={"testimonial"} smooth>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
