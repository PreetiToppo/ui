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
            <ul className="list">
              <li className="listItem">Find talent</li>
              <li className="listItem">For designers</li>
              <li className="listItem">Inspiration</li>
              <li className="listItem">Learn design</li>
              <li className="listItem">Go Pro</li>
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
