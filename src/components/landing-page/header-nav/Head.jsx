import React, { useState, useEffect } from "react";
import "./Head.css";
import logo from "../../assets/logo/Brand Logo Large - Full 4.png";
import {Link} from 'react-router-dom'
import MobileMenu from "../../mobile-menu/MobileMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const Head = () => {

  const [open, setOpen] = useState(false);
  const sideShow = () => {
    setOpen((prev) => !prev);
  };

      useEffect(()=>{
      AOS.init();
    }, [])
  
  return (
    <>
      <div className="mobile-view">
      {open && (
              <div data-aos="fade-right" className="mobile-overlay">
                <MobileMenu />
              </div>
            )}
        <div className="mobile-carrier">
        <div class="harmbuger" onClick={sideShow} >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
        </div>
          <div><p className="loop">Mich Homes</p></div>
        <Link to='/center'><button id="mobile-header-btn">Choose Location</button></Link>
        </div>
      </div>

      <div className="general">
        <div className="logo">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="about">
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
        </div>
        <Link to="/center" className="location">
          <button>
            Choose location{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="35"
              viewBox="0 0 34 36"
              fill="none"
            >
              <path
                d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                fill="#0C1618"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Head;
