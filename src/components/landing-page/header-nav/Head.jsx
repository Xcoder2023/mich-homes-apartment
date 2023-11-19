import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Head = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="harmburger" onClick={handleClick}>
          {click ? (
            <>
              <svg
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
            </>
          ) : (
            <div class="harmbuger">
              <span class="bar">lor</span>
              <span class="bar">lor</span>
              <span class="bar">lor</span>
            </div>
          )}
        </div>
        <div className={click ? "projects active" : "projects"}>
          <ul className="list">
            <li>our Process</li>
            <li>latest Apartment Listing</li>
            <li>Neighbourhoods</li>
            <li>Relocation</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">Mich</Link>
        </div>
      </div>
    </>
  );
};
export default Head;
