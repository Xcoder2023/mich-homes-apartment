import React from "react";
import "./FormNav.css";
import brands from "../../assets/location-assets/location-nav/Brand Logo Large - Full 4.png";
import teles from "../../assets/location-assets/location-nav/call - text.png";
import { Link } from "react-router-dom";

const FormNav = () => {
  return (
    <>
      <div className="mobile-form-nav">
        <Link to="/" className="link-set">
          <div className="mobile-carrier2">
            <div className="hambuer">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <p>Mich Homes</p>
          </div>
        </Link>
      </div>

      <div className="nave-all">
        <Link to="/">
          <div className="brands-logo">
            <img src={brands} alt="" />
          </div>
        </Link>
        <div className="listings">
          <ul>
            <li>
              <Link to="/latest" className="linksto">
                Latest Apartment Listings
              </Link>
            </li>
            <li>Our Process</li>
            <select className="mores">
              <option>More</option>
            </select>
          </ul>
        </div>
        <div className="reaches-out">
          <select className="locates">
            <option>location</option>
          </select>
          <div className="teles">
            <div className="teles-logo">
              <img src={teles} alt="tele-icon" />
            </div>
            <p>Call / Text (234) 456 7890</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormNav;
