import React from "react";
import "./Part3.css";

const Page3 = () => {
  return (
    <>
      <div className="base">
        <div className="blog-line">
          <div className="single">
            <p>A single, universal blog</p>
          </div>
          <div className="read-more">
            <p>Read more insights from our team</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.676 21.45L22.1236 12L12.6736 2.55002M1.87598 12H22.126H1.87598Z"
                  stroke="#004643"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid-boxes">
          <div className="box1">
          <h5 className="hacks">APARTMENT HACKS, RENTING</h5>
            <p>The Ultimate Guide to Renting an Apartment</p>
            <a href="#">READ MORE</a>
          </div>
          <div className="box1">
          <h5 className="renting">RENTING</h5>
            <p>5 Things to Look For in a Great Apartment Finder</p>
            <a href="#">READ MORE</a>
          </div>
          <div className="box1">
          <h5 className="people">PEOPLE, RENTING</h5>
            <p>Renting with roommates: Your Guide</p>
            <a href="#">READ MORE</a>
          </div>
          <div className="box1">
          <h5 className="hacks">APARTMENT HACKS, RENTING</h5>
            <p>The Ultimate Guide to Renting an Apartment</p>
            <a href="#">READ MORE</a>
          </div>
          <div className="box1">
          <h5 className="hacks">APARTMENT HACKS, RENTING</h5>
            <p>The Ultimate Guide to Renting an Apartment</p>
            <a href="#">READ MORE</a>
          </div>
          <div className="box1">
          <h5 className="hacks">APARTMENT HACKS, RENTING</h5>
            <p>The Ultimate Guide to Renting an Apartment</p>
            <a href="#">READ MORE</a>
          </div>


          <div className="box1A">
          <h5 className="renting">RENTING</h5>
            <p>The Ultimate Guide to Renting an Apartment</p>
            <a href="#">READ MORE</a>
          </div>

          <div className="box2A">
          <h5 className="hacks">APARTMENT HACKS, RENTING</h5>
            <p>5 Things to Look For in a Great Apartment Finder</p>
            <a href="#">READ MORE</a>
          </div>

          <div className="box2B">
          <h5 className="people">PEOPLE, RENTING</h5>
            <p>Renting with roommates: Your Guide</p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
