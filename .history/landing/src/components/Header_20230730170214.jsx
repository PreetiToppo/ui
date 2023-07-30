// Dribble header
import React from "react";
import logo from "../assets/dribble.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logoImage">
            <img src={logo} alt="" />
          </div>
          <div className="navbarGroup">
            <ul>
              <li>
                <button>Find talent</button>
              </li>
              <li>For designers</li>
              <li>Inspiration</li>
              <li>Learn design</li>
              <li>Go Pro</li>
            </ul>
          </div>
        </div>
        <div className="buttonGroup">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}
