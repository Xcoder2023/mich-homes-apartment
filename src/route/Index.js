import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Center from "../components/location-page/Center";
import Together from "../components/apartment-listing-page/Together";
import Pop from "../components/pop-up-page/Pop";
import Alpha from "../components/forms/form-two/Alpha";
import Beta from "../components/forms/form-three/Beta";
import Gama from "../components/forms/appreciation-page/Gama";
import Shape from "../components/forms/form-one/Shape";
import ScrollToTop from "../ScrollUp"
const index = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/center" element={<Center />} />
        <Route path="/latest" element={<Together />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/shape" element={<Shape />} />
        <Route path="/alpha" element={<Alpha />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/gama" element={<Gama />} />
      </Routes>
    </>
  );
};

export default index;
