import React from "react";
import "./Group.css";
import { Link } from "react-router-dom";

const Group = () => {
  return (
    <>
      <div className="entire">
        <div className="find-apart">
          <h3 className="right-apartment">Find the right apartment</h3>
          <p className="in-awka">
            In Awka, there are over 190,000 housing units. With no cost to you,
            we help you find your one.
          </p>
          <div className="find-btn">
          <Link to='/latest'>
            <button className="btn-find">View Listings</button>
            </Link>
          </div>
        </div>
        <div className="apartment-sample"></div>
      </div>
    </>
  );
};

export default Group;
