import React from "react";
import {Link} from "react-router-dom";
import "./contact.css";
import * as FAIcons from "react-icons/fa";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

window.__forceSmoothScrollPolyfill__ = true;

function contact() {
    return (
        <div className="contact">
            <div className="entry-contact">
                <div className="header">
                    <h1>Contact Us</h1>
                </div>
                <div className="introduction">
                    <p>
                        If you have any questions or queries, or would like to enquire about our services, our team
                        is but a short email away.
                        <br />
                        We'll be sure to get back to you as soon as possible
                        <a className="ct-btn-scroll" href="#section2"><img alt="Arrow Down Icon" src="https://raw.githubusercontent.com/solodev/scroll-down-anchor/master/images/arrow-down-1.png" /></a>
                    </p>
                </div>
            </div>
            <div className="contact-holder" id="section2">
                <div className="contact contact-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact contact-info">

                </div>
            </div>
            <div className="socials">
                <p>Connect with us on Social Media</p>
                <br />
                <div>
                    <Link to={{ pathname: "https://twitter.com/" }} target="_blank" className="social-icon twitter-icon">
                        <FAIcons.FaTwitter />
                    </Link>
                    <Link to={{ pathname: "https://twitter.com/" }} target="_blank" className="social-icon">
                        <FAIcons.FaTwitter />
                    </Link>
                </div>
            </div>
            <div className="footer">
                <p className="copyright">&copy; Copyright 2021 Transformational Agility Ltd.</p>
                <br />
            </div>
        </div>
    )
}

export default contact