import React, { useState, useEffect } from "react";
import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";
import AboutPage from "../../pages/AboutPage/AboutPage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
    ;


  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar_heading">
          <GiBeard style={{ fontSize: "60px", color: "white" }} />
        </div>

        <div className="navbar_list">
          <p>
            {" "}
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/reservation">Reservation</Link>
          </p>
          <p>
            <Link to="/#map-section">Find</Link>
          </p>
        </div>
        <div className="navbar_sign">
          <Button style="navbar_button" name="Sign in" to="/signlogin" />
        </div>
      </div>
    
  );
}
