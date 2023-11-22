// import React, { useState, useEffect } from "react";
// import "./Pop.css";
// import flat1 from "../assets/pop-up-assets/Rectangle 29.png";
// import flat2 from "../assets/pop-up-assets/Rectangle 29 (1).png";
// import flat3 from "../assets/pop-up-assets/Rectangle 29 (2).png";
// import flat4 from "../assets/pop-up-assets/Rectangle 29 (3).png";
// import flat5 from "../assets/pop-up-assets/Rectangle 29 (5).png";
// import flat6 from "../assets/pop-up-assets/Rectangle 29 (5).png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Pop = () => {
//   const [swiped, setSwiped] = useState(false);
//   const handleSwipe = () => setSwiped(!swiped);
//   return (
//     <>
//         <div className="swipe-content">
//           <div className="close">
//             <div className="pop-up">
//               <div className="contril-div">
//                 <div className="flat-show" onClick={handleSwipe}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 48 48"
//                     fill="none"
//                     className="delet"
//                   >
//                     <rect width="48" height="48" rx="4" fill="white" />
//                     <path
//                       d="M25.8801 24.0002L36.9335 12.9468C37.1519 12.6918 37.266 12.3637 37.2531 12.0281C37.2401 11.6925 37.101 11.3742 36.8635 11.1367C36.6261 10.8993 36.3078 10.7602 35.9722 10.7472C35.6366 10.7343 35.3085 10.8484 35.0535 11.0668L24.0001 22.1202L12.9468 11.0535C12.6957 10.8024 12.3552 10.6614 12.0001 10.6614C11.6451 10.6614 11.3045 10.8024 11.0535 11.0535C10.8024 11.3046 10.6613 11.6451 10.6613 12.0002C10.6613 12.3552 10.8024 12.6958 11.0535 12.9468L22.1201 24.0002L11.0535 35.0535C10.9139 35.173 10.8005 35.3201 10.7205 35.4855C10.6405 35.651 10.5955 35.8311 10.5884 36.0148C10.5813 36.1984 10.6122 36.3815 10.6793 36.5526C10.7463 36.7237 10.848 36.8791 10.9779 37.009C11.1079 37.139 11.2633 37.2406 11.4344 37.3077C11.6055 37.3747 11.7886 37.4057 11.9722 37.3986C12.1558 37.3915 12.336 37.3465 12.5014 37.2665C12.6668 37.1864 12.8139 37.0731 12.9335 36.9335L24.0001 25.8802L35.0535 36.9335C35.3085 37.1519 35.6366 37.2661 35.9722 37.2531C36.3078 37.2402 36.6261 37.101 36.8635 36.8636C37.101 36.6261 37.2401 36.3078 37.2531 35.9722C37.266 35.6367 37.1519 35.3086 36.9335 35.0535L25.8801 24.0002Z"
//                       fill="#004643"
//                     />
//                   </svg>
//                 </div>
//                 <div className="flat-arrays" data-aos="swipe-right">
//                   <div className="flat1">
//                     <img src={flat1} alt="flat1-home" />
//                   </div>
//                   <div className="flat1">
//                     <img src={flat2} alt="flat2-home" />
//                   </div>
//                   <div className="flat1">
//                     <img src={flat3} alt="flat3-home" />
//                   </div>
//                   <div className="flat1">
//                     <img src={flat4} alt="flat4-home" />
//                   </div>
//                   <div className="flat1">
//                     <img src={flat5} alt="flat5-home" />
//                   </div>
//                   <div className="flat1">
//                     <img src={flat6} alt="flat6-home" />
//                   </div>
//                   <div className="flat2"></div>
//                   <div className="flat3"></div>
//                   <div className="flat4"></div>
//                 </div>
//                 <div className="price-tag">
//                   <div className="neighborhood">
//                     <p className="amount">Neighborhood</p>
//                     <p className="price">Amawbia, Awka</p>
//                     <p className="bath">Bedrooms</p>
//                     <p className="amount">2</p>
//                   </div>
//                   <div className="renta-amout">
//                     <p className="amount">Rental Amout</p>
//                     <p className="price">N240,000/yr</p>
//                     <p className="bath">Bathrooms</p>
//                     <p className="amount">2</p>
//                   </div>
//                 </div>
//                 <div className="price-tag2">
//                   <div className="neighborhood">
//                     <p className="amount">Neighborhood</p>
//                     <p className="amount">Rental Amount</p>
//                     <p className="bath">Bedrooms</p>
//                     <p className="amount">Bathrooms</p>
//                     <p className="amount">Suare Footage</p>
//                     <p className="amount">Listing Found</p>
//                   </div>
//                   <div className="renta-amout">
//                     <p className="price">Amawbia, Awka</p>
//                     <p className="price">N240,000/yr</p>
//                     <p className="bath">1</p>
//                     <p className="price">1</p>
//                     <p className="price">800 sf</p>
//                     <p className="price">2 days ago</p>
//                   </div>
//                 </div>
//                 <button className="pop-btn">
//                   I want something similiar{" "}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                   >
//                     <g clip-path="url(#clip0_3256_795)">
//                       <path
//                         d="M8.45037 14.3001L14.7488 8.00007L8.44877 1.70007M1.25037 8.00007H14.7504H1.25037Z"
//                         stroke="white"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_3256_795">
//                         <rect width="16" height="16" fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   );
// };

// export default Pop;
