import React from "react";
import "../styles/Footer.css";
import pinkLogo from "../assets/pinkLogo.png";
import Ball from "../assets/dribbleBall.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Pinterest from "../assets/pinterest.svg";

export default function Footer() {
  return (
    <>
      <div className="sections">
        <div className="socialSites">
          <img src={pinkLogo} alt="" />
          <div className="socialIcons">
            <Ball className="my-svg" />
            <Twitter className="my-svg" />
            <Facebook className="my-svg" />
            <Instagram className="my-svg" />
            <Pinterest className="my-svg" />
          </div>
        </div>
      </div>
    </>
  );
}
