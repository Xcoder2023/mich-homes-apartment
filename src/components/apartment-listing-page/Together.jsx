import React from "react";
import Act from "./act1/Act";
import Nav from "../location-page/location-nav/Nav";
import Act2 from "./act2/Act2";
import Act3 from "./act3/Act3";
import Footer from "../location-page/location-footer/Footer";

const Together = () => {
  return (
    <>
      <Nav />
      <Act />
      <Act2 />
      <Act3 />
      <Footer />
    </>
  );
};

export default Together;
