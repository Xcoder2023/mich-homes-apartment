import React from "react";
import "./Pop.css";
import flat1 from "../assets/pop-up-assets/Rectangle 29.png";
import flat2 from "../assets/pop-up-assets/Rectangle 29 (1).png";
import flat3 from "../assets/pop-up-assets/Rectangle 29 (2).png";
import flat4 from "../assets/pop-up-assets/Rectangle 29 (3).png";
import flat5 from "../assets/pop-up-assets/Rectangle 29 (5).png";
import flat6 from "../assets/pop-up-assets/Rectangle 29 (5).png";
import "aos/dist/aos.css";

const Pop = () => {
  return (
    <>
      <div className="swipe-content">
        <div className="flat-show"></div>
        <div className="flat-arrays" data-aos="swipe-right">
          <div className="flat1">
            <img src={flat1} alt="flat1-home" />
          </div>
          <div className="flat1">
            <img src={flat2} alt="flat2-home" />
          </div>
          <div className="flat1">
            <img src={flat3} alt="flat3-home" />
          </div>
          <div className="flat1">
            <img src={flat4} alt="flat4-home" />
          </div>
          <div className="flat1">
            <img src={flat5} alt="flat5-home" />
          </div>
          <div className="flat1">
            <img src={flat6} alt="flat6-home" />
          </div>
          <div className="flat2"></div>
          <div className="flat3"></div>
          <div className="flat4"></div>
        </div>
        <div className="price-tag">
          <div className="neighborhood">
            <p className="amount">Neighborhood</p>
            <p className="price">Amawbia, Awka</p>
            <p className="bath">Bedrooms</p>
            <p className="amount">2</p>
          </div>
          <div className="renta-amout">
            <p className="amount">Rental Amout</p>
            <p className="price">N240,000/yr</p>
            <p className="bath">Bathrooms</p>
            <p className="amount">2</p>
          </div>
        </div>
        <div className="price-tag2">
          <div className="neighborhood">
            <p className="amount">Neighborhood</p>
            <p className="amount">Rental Amount</p>
            <p className="bath">Bedrooms</p>
            <p className="amount">Bathrooms</p>
            <p className="amount">Suare Footage</p>
            <p className="amount">Listing Found</p>
          </div>
          <div className="renta-amout">
            <p className="price">Amawbia, Awka</p>
            <p className="price">N240,000/yr</p>
            <p className="bath">1</p>
            <p className="price">1</p>
            <p className="price">800 sf</p>
            <p className="price">2 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pop;
