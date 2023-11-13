import React from "react";
import "./Group4.css"
import Slider from "react-slick";
import passport from '../../assets/location-assets/group4-asset/Idle status.png'
import mathias from '../../assets/location-assets/group4-asset/frame4.jpg'
import codex from '../../assets/location-assets/group4-asset/IMG_20231014_082738_758.jpg'

const Group4 = () => {
    const settings = {
      dott: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (
      <div className="holds">
         <div className="customers-say">
           <p>What our customers are saying</p>
         </div>
        <div className="set-center">
        <Slider {...settings} className="tes">
          <div className="testimonials">
         <div className="card-summary">
           <div className="customer-card">
             <div className="passport">
               <img src={passport} alt="customer-passport" />
             </div>
             <div className="lorem">
               <p>
                 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                 tristique suspendisse semper vestibulum pharetra ut nec. Amet
                 mollis commodo duis odio cursus.”
               </p>
             </div>
             <hr />
             <div className="customer-name">
               <p className="john">John Doe</p>
               <p>Via facebook</p>
             </div>
           </div>
         </div>
          </div>

          <div className="testimonials">
         <div className="card-summary">
           <div className="customer-card">
             <div className="passport">
               <img src={mathias} alt="customer-passport" />
             </div>
             <div className="lorem">
               <p>
                 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                 tristique suspendisse semper vestibulum pharetra ut nec. Amet
                 mollis commodo duis odio cursus.”
               </p>
             </div>
             <hr />
             <div className="customer-name">
               <p className="john">Math Ede</p>
               <p>Via facebook</p>
             </div>
           </div>
         </div>
          </div>

          <div className="testimonials">
         <div className="card-summary">
           <div className="customer-card">
             <div className="passport">
               <img src={codex} alt="customer-passport" />
             </div>
             <div className="lorem">
               <p>
                 “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                 tristique suspendisse semper vestibulum pharetra ut nec. Amet
                 mollis commodo duis odio cursus.”
               </p>
             </div>
             <hr />
             <div className="customer-name">
               <p className="john">GewinCodex </p>
               <p> facebook</p>
             </div>
           </div>
         </div>
          </div>
        </Slider>
        </div>
      </div>
    );
}

export default Group4;