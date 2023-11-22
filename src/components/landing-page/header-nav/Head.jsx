import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Head.css";

const Head = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
          <div className="desk-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="56"
              viewBox="0 0 47 56"
              fill="none"
              className="logo-icon"
            >
              <path
                d="M43.2511 49.7763L39.6451 47.6959V24.8451L23.4298 34.1969L7.21458 24.8451V47.6959L3.60854 49.7763V18.6201L23.4298 30.0523L43.2511 18.6201V49.7763ZM36.0403 45.6179L32.4343 43.5375V33.153L36.0403 31.0713V45.6179ZM14.4254 43.5375L10.8181 45.6179V31.0713L14.4254 33.153V43.5375ZM10.8181 8.30664L14.4254 6.22624V20.713L10.8181 18.6351V8.30789V8.30664ZM32.433 6.22624L36.0403 8.30664V18.6338L32.433 20.7117V6.22499V6.22624ZM39.6438 16.5534V6.23996L28.8257 0V22.7934L23.4286 25.9053L18.0314 22.7934V0L7.21333 6.23996V16.5534L0 12.3964V56L18.0314 45.6005V35.2296L23.4286 38.344L28.8257 35.2296V45.6005L46.8571 56V12.3964L39.6438 16.5534Z"
                fill="#D1AC00"
              />
            </svg>
            <p className="mich-homes">Mich Homes</p>
          </div>
          <ul className="desk-list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
          <Link to="/center">
            <button className="location-site">
            Choose location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="36"
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

        {/* mobile view  */}

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
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          )}
        </div>
        <div className={click ? "projects active" : "projects"}>
          <ul className="list">
            <li>our Process</li>
            <li><Link to="/latest">latest Apartment Listing</Link></li>
            <li>Neighbourhoods</li>
            <li>Relocation</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="homes">
          <p className="home-name"><Link to='/'>Mich Homes</Link></p>
        <Link to="/center"><button className={click?"locate-site":"location-sites"}>
            Choose location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
            >
              <path
                d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                fill="#ffff"
              />
            </svg>
            </button>
            </Link>
        </div>
      </div>
    </>
  );
};
export default Head;
