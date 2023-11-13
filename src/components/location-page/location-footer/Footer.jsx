import React from "react";
import "./Footer.css";
import vector from "../../assets/footer-assets/Brand Logo Large - Full 2.png";
import fb from "../../assets/footer-assets/facebook.png";
import instagram from "../../assets/footer-assets/Instagram.png";
import linkedin from "../../assets/footer-assets/Linkedin.png";
import Foot from "../../landing-page/footer/Foot";

const Footer = () => {
  return (
    <>
    <div className="mobile-footer">
      <Foot />
    </div>
      <div className="footer-general">
        <div className="wrapper">
          <div className="logo-side">
            <div className="foot-logos">
              <img src={vector} alt="" />
            </div>
            <div className="awka-michHome">
              <p>
                Mich Homes is a website for listing homes for rent that features
                houses, apartments, and lodges that are available within Awka
                city, Nigeria.
              </p>
            </div>
          </div>
          <div className="get-started">
            <p>GET STARTED</p>
            <ul>
              <li>Latest Apartment Listings</li>
              <li>Our Process</li>
              <li>Neighbourhood</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="info">
            <p>LEARN MORE</p>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="contact">
            <p>CONTACT</p>
            <address className="adres">
              3, court road Amawbia, Awka, Anambra State. <br />
              info@michhomes.ng <br />
              (+234) 801 2345 678
            </address>
          </div>
          <div className="socials">
            <p>SOCIAL</p>
            <ul>
              <li>
                <img src={fb} alt="fb-logo" />
              </li>
              <li>
                <img src={instagram} alt="instagram-logo" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin-logo" />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="bootom-footer">
          <div className="copyright">
            <p>&copy;2022, All rights reserved!</p>
          </div>
          <div className="policies">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
