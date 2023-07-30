// Dribble header
import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="navbarGroup">
          <img src="../assets/dribbble.jpg" alt="" />
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
