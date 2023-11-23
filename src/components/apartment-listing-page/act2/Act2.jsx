import React, { useState } from "react";
import "./Act2.css";
import area from "../../assets/apartment-listing-assets/act2-assets/Location.png";
import bed from "../../assets/apartment-listing-assets/act2-assets/Bed.png";
import bathroom from "../../assets/apartment-listing-assets/act2-assets/Bathroom.png";
import footsqt from "../../assets/apartment-listing-assets/act2-assets/SqFootage.png";
import clock from "../../assets/apartment-listing-assets/act2-assets/Clock.png";
// import Pop from '../../pop-up-page/Pop'

// import flat1 from "../../assets/pop-up-assets/Rectangle 29.png";
// import flat2 from "../../assets/pop-up-assets/Rectangle 29 (1).png";
// import flat3 from "../../assets/pop-up-assets/Rectangle 29 (2).png";
// import flat4 from "../../assets/pop-up-assets/Rectangle 29 (3).png";
// import flat5 from "../../assets/pop-up-assets/Rectangle 29 (5).png";
// import flat6 from "../../assets/pop-up-assets/Rectangle 29 (5).png";
import Pop from "../../pop-up-page/Pop";

const Act2 = () => {
  // const [open, setOpen] = useState(false);
  // const popUp = () =>setOpen((prev)=>(!prev));

  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="housing-gallery">
        <div className="rooms-show">
          <div className="room1">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                {/* {click?( */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
                {/* ):('')} */}
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room2">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room3">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room4">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room5">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room6">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;240,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>2 days</p>
              </div>
            </div>
          </div>
          <div className="room7">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;540,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>12 days ago</p>
              </div>
            </div>
          </div>
          <div className="room8">
            <div className="navigation-arrows">
              <div className="left-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M30.3069 41.3762L14.802 25.8713C14.505 25.6337 14.297 25.3366 14.1782 24.9802C14.0594 24.6238 14 24.297 14 24C14 23.6436 14.0594 23.3014 14.1782 22.9735C14.297 22.6479 14.505 22.3663 14.802 22.1287L30.3069 6.53465C30.6634 6.17822 31.0495 6 31.4653 6C31.8812 6 32.2673 6.17822 32.6238 6.53465C32.9802 6.9505 33.1584 7.36634 33.1584 7.78218C33.1584 8.19802 32.9802 8.58416 32.6238 8.9406L17.5644 24L32.6238 39.0594C32.9802 39.4158 33.1584 39.802 33.1584 40.2178C33.1584 40.6337 32.9802 41.0198 32.6238 41.3762C32.2673 41.7921 31.8812 42 31.4653 42C31.0495 42 30.6634 41.7921 30.3069 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="right-arrow" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M14.5347 41.3762C14.1782 41.0198 14 40.6337 14 40.2178C14 39.802 14.1782 39.4158 14.5347 39.0594L29.5941 24L14.5347 8.9406C14.1782 8.58416 14 8.19802 14 7.78218C14 7.36634 14.1782 6.9505 14.5347 6.53465C14.8911 6.17822 15.2772 6 15.6931 6C16.1089 6 16.4951 6.17822 16.8515 6.53465L32.3564 22.1287C32.6535 22.3663 32.8614 22.6479 32.9802 22.9735C33.099 23.3014 33.1584 23.6436 33.1584 24C33.1584 24.3564 33.099 24.6974 32.9802 25.023C32.8614 25.3509 32.6535 25.6337 32.3564 25.8713L16.8515 41.3762C16.4951 41.7921 16.1089 42 15.6931 42C15.2772 42 14.8911 41.7921 14.5347 41.3762Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tiny-insertions">
              <div className="location-tag">
                <div className="search-icon">
                  <img src={area} alt="icon" />
                  <p>location</p>
                </div>
                <p>&#8358;200,000</p>
              </div>
              <div className="funitures">
                <div className="bathroom">
                  <img src={bed} alt="bed-icon" />
                  <p>1 bd</p>
                </div>
                <div className="bathroom">
                  <img src={bathroom} alt="bathroom" />
                  <p>1 ba</p>
                </div>
                <div className="bathroom">
                  <img src={footsqt} alt="footsqt" />
                  <p>800 sqft</p>
                </div>
              </div>
              <div className="days">
                <img src={clock} alt="clock-icon" />
                <p>16 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={click ? "pop-up active" : "pop-up"}>
        <div className="deleted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            className="delet"
            onClick={handleClick}
          >
            <rect width="48" height="48" rx="4" fill="white" />
            <path
              d="M25.8801 24.0002L36.9335 12.9468C37.1519 12.6918 37.266 12.3637 37.2531 12.0281C37.2401 11.6925 37.101 11.3742 36.8635 11.1367C36.6261 10.8993 36.3078 10.7602 35.9722 10.7472C35.6366 10.7343 35.3085 10.8484 35.0535 11.0668L24.0001 22.1202L12.9468 11.0535C12.6957 10.8024 12.3552 10.6614 12.0001 10.6614C11.6451 10.6614 11.3045 10.8024 11.0535 11.0535C10.8024 11.3046 10.6613 11.6451 10.6613 12.0002C10.6613 12.3552 10.8024 12.6958 11.0535 12.9468L22.1201 24.0002L11.0535 35.0535C10.9139 35.173 10.8005 35.3201 10.7205 35.4855C10.6405 35.651 10.5955 35.8311 10.5884 36.0148C10.5813 36.1984 10.6122 36.3815 10.6793 36.5526C10.7463 36.7237 10.848 36.8791 10.9779 37.009C11.1079 37.139 11.2633 37.2406 11.4344 37.3077C11.6055 37.3747 11.7886 37.4057 11.9722 37.3986C12.1558 37.3915 12.336 37.3465 12.5014 37.2665C12.6668 37.1864 12.8139 37.0731 12.9335 36.9335L24.0001 25.8802L35.0535 36.9335C35.3085 37.1519 35.6366 37.2661 35.9722 37.2531C36.3078 37.2402 36.6261 37.101 36.8635 36.8636C37.101 36.6261 37.2401 36.3078 37.2531 35.9722C37.266 35.6367 37.1519 35.3086 36.9335 35.0535L25.8801 24.0002Z"
              fill="#004643"
            />
          </svg>
        </div>
        <Pop />
      </div>
    </>
  );
};

export default Act2;
