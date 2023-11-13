import React from "react";
import "./Group5.css";
import{Link} from 'react-router-dom'

const Group5 = () => {
  return (
    <>
      <div className="holders">
        <div className="skill-side">
          <div className="impore">
            <p className="improve">Improve your tenancy skills</p>
            <p className="assist">
              Let Mich Homes assist you in finding your next rental.
            </p>
            <div>
              <Link to='/shape' className="linkshape">
              <button className="btn-skill">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="interior-gallery"></div>
      </div>
    </>
  );
};

export default Group5;
