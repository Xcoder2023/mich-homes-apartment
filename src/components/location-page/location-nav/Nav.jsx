import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import brand from "../../assets/location-assets/location-nav/Brand Logo Large - Full 4.png";
import tele from "../../assets/location-assets/location-nav/call - text.png";
import Head from "../../landing-page/header-nav/Head";

const Nav = () => {
  return (
    <>
    <div className="mobile-div">
      <Head />
    </div>
      <div className="nav-all">
        <Link to="/">
          <div className="brand-logo">
            <img src={brand} alt="" />
          </div>
        </Link>
        <div className="listing">
          <ul>
            <li>
              <Link to="/Latest">Latest Apartment Listings</Link>
            </li>
            <li>Our Process</li>
            <select className="more">
              <option>More</option>
            </select>
          </ul>
        </div>
        <div className="reach-out">
          <select className="locate">
            <option>location</option>
          </select>
          <div className="tele">
            <div className="tele-logo">
              <img src={tele} alt="tele-icon" />
            </div>
            <p>Call / Text (234) 456 7890</p>
          </div>
          <Link to="/shape">
            <button>Start Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
