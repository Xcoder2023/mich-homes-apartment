import React, { useState, useEffect } from "react";
import "./Head.css";
import logo from "../../assets/logo/Brand Logo Large - Full 4.png";
import { Link } from "react-router-dom";
// import MobileMenu from "../../mobile-menu/MobileMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const Head = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    // setOpen((prev) => !prev);
    setOpen(!open)
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [swipedIn, setSwipedIn] = useState(false);

  const handleSwipe = () => {
    setSwipedIn((prev) => !prev);
  };

  return (
    <>
      <div className="mobile-view">
        <div className="mobile-carrier">
          <div class="harmbuger" onClick={toggleMenu}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <div>
            <p className="loop">Mich Homes</p>
          </div>
          <Link to="/center">
            <button id="mobile-header-btn">Choose Location</button>
          </Link>
        </div>
      </div>

      <div className="general">
        <div className="logo">
          <img src={logo} alt="logo-img" />
        </div>
        <div className="about">
          <ul>
            <li key="about">About us</li>
            <li key="Career">Career</li>
            <li key="Blog">Blog</li>
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
      {open && (
        <div
          className={`mobile-overlay ${swipedIn ? "mobile-view" : "mobile-overlay"}`}
          data-aos="fade-left"
        >
          <div className="swipe-content">
            <div className="mobile-nav">
              <svg
                onClick={handleSwipe}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" fill="#0C1618" />
                <path
                  d="M17.2533 16L24.6222 8.63115C24.7678 8.4611 24.8439 8.24237 24.8353 8.01866C24.8266 7.79495 24.7339 7.58273 24.5756 7.42443C24.4173 7.26612 24.2051 7.17338 23.9814 7.16474C23.7577 7.1561 23.5389 7.23219 23.3689 7.37782L16 14.7467L8.63109 7.36893C8.46371 7.20155 8.2367 7.10751 7.99998 7.10751C7.76327 7.10751 7.53625 7.20155 7.36887 7.36893C7.20149 7.53631 7.10746 7.76333 7.10746 8.00004C7.10746 8.23675 7.20149 8.46377 7.36887 8.63115L14.7466 16L7.36887 23.3689C7.27582 23.4486 7.20025 23.5467 7.14689 23.657C7.09354 23.7672 7.06356 23.8874 7.05883 24.0098C7.0541 24.1322 7.07473 24.2543 7.11942 24.3683C7.1641 24.4824 7.23189 24.586 7.31852 24.6726C7.40514 24.7592 7.50874 24.827 7.62281 24.8717C7.73687 24.9164 7.85895 24.937 7.98136 24.9323C8.10378 24.9276 8.2239 24.8976 8.33418 24.8442C8.44446 24.7909 8.54252 24.7153 8.6222 24.6223L16 17.2534L23.3689 24.6223C23.5389 24.7679 23.7577 24.844 23.9814 24.8353C24.2051 24.8267 24.4173 24.734 24.5756 24.5757C24.7339 24.4173 24.8266 24.2051 24.8353 23.9814C24.8439 23.7577 24.7678 23.539 24.6222 23.3689L17.2533 16Z"
                  fill="white"
                />
              </svg>
              <div className="mobile-p">
                <p>Mich Homes</p>
              </div>
              <button id="mobile-nav-btn">
                location
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99999 10.6667L2.66666 5.33333H13.3333L7.99999 10.6667Z"
                    fill="#0C1618"
                  />
                </svg>
              </button>
            </div>
            <div className="mobile-holder">
              <div className="mobile-pop">
                <p>our Process</p>
                <p>latest Apartment Listing</p>
                <p>Neighbourhoods</p>
                <p>Relocation</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>FAQs</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Head;
