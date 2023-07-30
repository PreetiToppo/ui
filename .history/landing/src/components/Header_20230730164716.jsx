// Dribble header
import React from "react";
import logo from "../assets/dribble.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logoImage">
          <img src={logo} alt="" />
        </div>
        <div className="navbarGroup">
          <span>Find talent</span>
          <span>For designers</span>
          <span>Inspiration</span>
          <span>Learn design</span>
          <span>Go Pro</span>
        </div>

        <div className="buttonGroup">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}
