import React from "react";
import "./Act.css";

const Act = () => {
  return (
    <>
      <div className="sockek-all">
        <div className="apartment-listing">
          <div className="latest-Apartment">
            <p className="latest-Apartments">Latest Apartment Listings</p>
            <p className="current-situation">
              This is the current situation with “Location” apartments. Since
              apartment prices fluctuate daily, we'll let you in on a little
              secret: as we come across listings that grab our eye, we'll post
              them here so you can see them, too. After all, it is our duty to
              locate your ideal apartment at no cost to you. Browse through some
              of the most up-to-date apartment listings in Location, Awka below,
              then get in touch if one catches your eye and you require
              information on current rates and availability. Contact a
              representative now for more information!
            </p>
          </div>
          <div className="btn-array">
            <button className="listing-btn">Neighbourhood</button>
            <button className="listing-btn">Budget</button>
            <button className="listing-btn">Layout</button>
            <button className="listing-btn">Sq. Footage</button>
            <button className="listing-btn">All Recent</button>
            <button className="listing-btn">Sort</button>
            <button className="clear-btn">Clear Filters</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Act;
