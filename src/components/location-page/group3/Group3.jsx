import React from "react";
import "./Group3.css";

const Group3 = () => {
  return (
    <>
      <div className="together">
        <div className="setting-div2" >
          <div className="everyone">
            <p className="needs">
              Everyone needs a place to live, and you deserve a place you adore.
            </p>
            <p className="finding-an">
              Finding an apartment in "Location" might be challenging. Please
              allow us to assist. Our apartment specialists can assist you in
              finding the ideal Fort Worth apartment in the most suitable area
              for your requirements.
            </p>
          </div>
          <div className="pallor-view"></div>
        </div>
        <div className="setting-div">
          <div className="dinning4"></div>
          <div className="bargains">
            <p className="access">
              Having access to Location's top apartment bargains.
            </p>
            <p className="greatest">
              Trying to get the greatest apartment bargain may be stressful. To
              provide our clients with the greatest cost, our staff negotiates
              with properties.
            </p>
            <button className="deals-btn">
              View Latest Deals{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12.6755 21.95L22.1231 12.5L12.6731 3.05003M1.87549 12.5H22.1255H1.87549Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Group3;
