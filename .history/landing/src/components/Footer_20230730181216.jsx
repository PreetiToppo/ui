import React from "react";
import "../styles/Footer.css";
import pinkLogo from "../assets/pinkLogo.png";
import { ReactComponent as Ball } from "../assets/dribbleBall.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as Pinterest } from "../assets/pinterest.svg";

export default function Footer() {
  return (
    <>
      <div className="sections">
        <div className="socialSites">
          <img src={pinkLogo} alt="" />
          <p>Dribbble is the world’s leading</p>
          <p>community for creatives to share,</p>
          <p>grow, and get hired.</p>
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
