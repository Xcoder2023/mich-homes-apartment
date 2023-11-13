import React from 'react'
import "./Foot.css"
import vector from "../../assets/footer-assets/Brand Logo Large - Full 2.png"
import fb from '../../assets/footer-assets/facebook.png'
import instagram from '../../assets/footer-assets/Instagram.png'
import linkedin from '../../assets/footer-assets/Linkedin.png'

const Foot = () => {
  return (
    <>
        <div className="foot-general">
           <div className='wrapper'>
                <div className="logo-side">
                    <div className="foot-logo">
                        <img src={vector} alt="" />
                    </div>
                    <div className="awka-michHomes">
                        <p>Mich Homes is a website for listing homes for rent that features houses, apartments, and lodges that are available within Awka city, Nigeria.</p>
                    </div>
                </div>
                <div className="infos">
                    <p>LEARN MORE</p>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="contacts">
                    <p>CONTACT</p>
                    <address>
                        3, court road Amawbia, Awka, Anambra State. <br />
                        info@michhomes.ng <br />
                        (+234) 801 2345 678
                    </address>
                </div>
                <div className="social">
                        <p>SOCIAL</p>
                        <ul>
                            <li><img src={fb} alt="fb-logo" /></li>
                            <li><img src={instagram} alt="instagram-logo" /></li>
                            <li><img src={linkedin} alt="linkedin-logo" /></li>
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

        <div className="mobile-footer">
            <div className="socila-media-handles">
                <p>SOCIAL</p>
                    <div className='socil-media-links'>
                    <img src={fb} alt="fb-logo" />
                    <img src={instagram} alt="instagram-logo" />
                    <img src={linkedin} alt="linkedin-logo" />
                    </div>
            </div>
            <div className="contact-us">
            <p>CONTACT</p>
                    <address className='adressy'>
                        3, court road Amawbia,<br /> Awka, Anambra State. <br />
                        info@michhomes.ng <br />
                        (+234) 801 2345 678
                    </address>
            </div>
            <div className="learn-more-aboutus">
                    <p>LEARN MORE</p>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                     </ul>     
            </div>
            <hr />
           <div className='after-line'>
           <div className="foot-logo">
                <img src={vector} alt="" />
            </div>
            <div className="policies">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Disclaimer</li>
                </ul>
            </div>
            <div className="copyright">
                    <p>&copy;2022, All rights reserved!</p>
                </div>
           </div>
        </div>
    </>
  )
}

export default Foot