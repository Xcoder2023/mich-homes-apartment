import React from "react";
import "./Act3.css";
import{Link} from "react-router-dom"

const Act3 = () => {
  return (
    <>
      <div className="ideal-container">
        <div className="ideal">
          <p>Discover your ideal apartment</p>
        </div>
        <div className="discover-btn">
          <Link to='/shape'>
          <button className="ideal-btn">
            Get Started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.6755 21.45L22.1231 12L12.6731 2.55003M1.87549 12H22.1255H1.87549Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Act3;
