import React from "react";
import "./Group2.css";
import pix from "../../assets/location-assets/group2-assets/Frame 38.png";
import pix2 from "../../assets/location-assets/group2-assets/Frame 38 (1).png";
import pix3 from "../../assets/location-assets/group2-assets/Frame 38 (2).png";

const Group2 = () => {
  return (
    <>
      <div className="drum">
        <div className="startment">
          <p>How it works</p>
        </div>
        <div className="wrap">
          <div className="partition1">
            <div className="pic">
              <img className="photo" src={pix} alt="" />
            </div>
            <div className="bio">
              <p className="tell-us">Tell us a bit about yourself</p>
              <p className="our-team">
                Our team of industry professionals can do the rest if you just
                give them a little information about yourself and what you're
                searching for.
              </p>
            </div>
          </div>

          <div className="partition2">
            <div className="pic2">
              <img className="photo" src={pix2} alt="" />
            </div>
            <div className="bio2">
              <p className="tell-us">A match for you</p>
              <p className="our-team">
                Your realtor will compile a hand-selected, unique list of flats
                that fit your needs and way of life.
              </p>
            </div>
          </div>
          <div className="partition3">
            <div className="pic3">
              <img className="photo" src={pix3} alt="" />
            </div>
            <div className="bio2">
              <p className="tell-us">
                Celebrate! You've just located the ideal residence.
              </p>
              <p className="our-team">
                Our team of industry professionals can do the rest if you just
                give them a little information about yourself and what you're
                searching for..
              </p>
            </div>
          </div>
        </div>
        <div className="partition-btn">
          <button className="btn-partition">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.676 21.45L22.1236 12L12.6736 2.55005M1.87598 12H22.126H1.87598Z"
                stroke="#0C1618"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Group2;
