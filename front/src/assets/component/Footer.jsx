import React from 'react';
import "/src/assets/scss/Footer.css";

import localisation from "/public/img/localisation.png";
import phone from "/public/img/phone.png";
import fax from "/public/img/fax.png";
import facebook from "/public/img/facebook.png";
import twitter from "/public/img/twitter.png";
import linkedin from "/public/img/linkedin.png";
import youtube from "/public/img/youtube.png";
import instagram from "/public/img/instagram.png";
import google from "/public/img/GooglePlus.png";
import pinterest from "/public/img/pinterest.png";
import rss from "/public/img/rss.png";

const Footer = () => {
    return (
        <section className='section_footer'>
            <hr className='yellow_line' />
            <div className='info_content'>
                <h4 className='logo_footer'>COGIP</h4>
                <div className='info_loc_rs'>
                    <div className='info_loc'>
                        <div className='content_localisation'>
                            <a href="https://www.google.com/maps/place/Sq.+des+Martyrs,+6000+Charleroi/@50.4053612,4.4369442,17z/data=!3m1!4b1!4m5!3m4!1s0x47c226759b15803b:0xcc51f879d97b9c78!8m2!3d50.4053578!4d4.4391329">
                                <div className='localisation'>
                                    <img src={localisation} alt="localisation"/>
                                </div>
                                <p>Square des Martyrs, 6000 Charleroi</p>
                            </a>
                            
                        </div>
                        <div className='content_phone'>
                            <a href="tel:123-456-7890">
                                <div className='phone'>
                                    <img src={phone} alt="phone"/>
                                </div>
                                <p>(123) 456-7890</p>
                            </a>
                        </div>
                        <div className='content_fax'>
                            <a href="fax:123-456-7890">
                                <div className='fax'>
                                    <img src={fax} alt="fax"/>
                                </div>
                                <p>(123) 456-7890</p>
                            </a>
                        </div>
                    </div>
                    <div className='info_rs'>
                        <p className='social_media'>Social Media</p>
                        <div className='logo'>
                            <a href="#"><img src={facebook} alt="facebook"/></a>
                            <a href="#"><img src={twitter} alt="twitter"/></a>
                            <a href="#"><img src={linkedin} alt="linkedin"/></a>
                            <a href="#"><img src={youtube} alt="youtube"/></a>
                            <a href="#"><img src={instagram} alt="instagram"/></a>
                            <a href="#"><img src={google} alt="google"/></a>
                            <a href="#"><img src={pinterest} alt="pinterest"/></a>
                            <a href="#"><img src={rss} alt="rss"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='grey_line'/>
            <div className='under_links'>
                <div className='links'>
                    <a href="#">HOME</a>
                    <a href="#">INVOICES</a>
                    <a href="#">COMPANIES</a>
                    <a href="#">CONTACTS</a>
                    <a href="#">PRIVACY POLICY</a>
                </div>
                <p className="copy">Copyright © 2023 • COGIP Inc.</p>
            </div>
        </section>
    );
};

export default Footer;