import React from "react";
import "../styles/Footer.css";
import pinkLogo from "../assets/pinkLogo.png";
import { ReactComponent as Ball } from "../assets/dribbleBall.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as Pinterest } from "../assets/pinterest.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="sections">
        <div className="socialSites">
          <img src={pinkLogo} alt="" className="pinkLogo" />
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
        <div className="designers">
          <h5>For designers</h5>
          <p>Go Pro! </p>
          <p>Explore design work</p>
          <p>Design blog</p>
          <p>Overtime podcast</p>
          <p>Playoffs</p>
          <p>Code of Conduct</p>
        </div>
        <div className="designers">
          <h5>Hire designers</h5>
          <p>Post a job opening</p>
          <p>Post a freelance project</p>
          <p>Search for designers</p>
          <h5>Brands</h5>
          <p>Advertise with us</p>
        </div>
        <div className="designers">
          <h5>Company</h5>
          <p>About</p>
          <p>Careers</p>
          <p>Support</p>
          <p>Media kit</p>
          <p>Testimonials</p>
          <h5>API</h5>
          <p>Terms of service</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
        <div className="designers">
          <h5>Directories</h5>
          <p>Design jobs</p>
          <p>Designers for hire</p>
          <p>Freelance designers</p>
          <p>Freelance hire</p>
          <p>Tags</p>
          <p>Places</p>
          <h5>Design assets</h5>
          <p>Creative Market</p>
          <p>Fontspring</p>
          <p>Font Squirrel</p>
        </div>
        <div className="designers">
          <h5>Design Resources</h5>
          <p>Freelancing</p>
          <p>Design Hiring</p>
          <p>Design Portfolio</p>
          <p>Design Education</p>
          <p>Creative Process</p>
          <p>Design Trends</p>
        </div>
      </div>
      <div>
        <hr />
        <p>&copy; {currentYear} Dribble. All rights reserved.</p>
      </div>
    </>
  );
}
