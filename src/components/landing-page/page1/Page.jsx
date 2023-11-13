import React from "react";
import "./Page1.css";
import Head from "../header-nav/Head";
import search from "../../assets/page1-assets/Icon only.png";
import Page2 from "../page2/Page2";

const Page = () => {
  return (
    <>
      <div className="all">
        <div className="city-location">
          <div className="best-place">
            <p>
              The best place to{" "}
              <span className="apartment">find an Apartment in Awka.</span>
            </p>
          </div>
          <div className="tiny-print">
            <p>
              In a number of Awka Capital City locations, Mich Homes offers the
              greatest local apartment locators ready to find you a rad place to
              live for the lowest possible price.
            </p>
          </div>
          <div className="location-type">
            <input
              type="text"
              placeholder="search by location or Type"
              id="type-search"
            />
            <button id="type-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.7301 26.3898L25.7402 26.4011C25.8189 26.4897 25.9087 26.5333 26.0505 26.5333C26.1923 26.5333 26.3047 26.4881 26.413 26.3798C26.5255 26.2672 26.5665 26.1587 26.5665 26.0333C26.5665 25.8903 26.5242 25.7981 26.4463 25.7202L18.7463 18.0202L18.4245 17.6985L18.7147 17.3479C19.2075 16.7523 19.6024 16.0487 19.8959 15.2311C20.1869 14.4206 20.3332 13.5668 20.3332 12.6667C20.3332 10.5066 19.5943 8.70156 18.113 7.22022C16.6306 5.73787 14.8363 5 12.6999 5C10.5409 5 8.73628 5.74339 7.25471 7.23493L25.7301 26.3898ZM25.7301 26.3898L25.7193 26.379M25.7301 26.3898L25.7193 26.379M25.7193 26.379L18.0193 18.7123L17.6965 18.3909M25.7193 26.379L17.6965 18.3909M17.6965 18.3909L17.3464 18.6826M17.6965 18.3909L17.3464 18.6826M17.3464 18.6826C16.7274 19.1984 16.0126 19.6035 15.1976 19.8961M17.3464 18.6826L15.1976 19.8961M15.1976 19.8961C14.3845 20.1879 13.5528 20.3333 12.6999 20.3333M15.1976 19.8961L12.6999 20.3333M12.6999 20.3333C10.5398 20.3333 8.73476 19.5944 7.25342 18.1131M12.6999 20.3333L7.25342 18.1131M7.25342 18.1131C5.77209 16.6318 5.0332 14.8268 5.0332 12.6667M7.25342 18.1131L5.0332 12.6667M5.0332 12.6667C5.0332 10.5302 5.77114 8.72941 7.25461 7.23503L5.0332 12.6667ZM17.4057 17.3853L17.4058 17.3852C18.6883 16.0902 19.3332 14.5076 19.3332 12.6667C19.3332 10.8257 18.6883 9.24316 17.4058 7.94816L17.4057 7.94803C16.1211 6.65194 14.5424 6 12.6999 6C10.8371 6 9.24713 6.65054 7.96207 7.94803C6.67862 9.243 6.0332 10.8256 6.0332 12.6667C6.0332 14.5077 6.67857 16.0902 7.96194 17.3852C9.24703 18.6827 10.837 19.3333 12.6999 19.3333C14.5424 19.3333 16.1211 18.6814 17.4057 17.3853Z"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="house"></div>
      </div>
    </>
  );
};

export default Page;
