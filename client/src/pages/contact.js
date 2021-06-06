import React from "react";
import {Link} from "react-router-dom";
import * as FAIcons from "react-icons/fa";
import * as RIIcons from "react-icons/ri";
import smoothscroll from "smoothscroll-polyfill";
import { init } from 'emailjs-com';
import { Welcome} from "../components/welcome";
import * as content from "../content/contact";


init("user_c02JIaEj90UAVhXU8Op5n");
smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

function contact() {
    return (
        <div className="contact">
            <Welcome heading={content.heading}
                     content={content.content}
                     cssClass={"contact"}
                     buttonContent={<img alt="Arrow Down Icon" src={content.imageURL} />}
                     buttonClassName={"ct-btn-scroll"}
                     buttonLocation={content.buttonLocation}/>
            <div className="contact-holder" id="section2">
                <div className="contact contact-title">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact contact-info">
                    <div className="contact-entry">
                        <RIIcons.RiMailSendLine className="contact-icon"/>
                        <p>
                            <a href="mailto:00savin@gmail.com">Mike Savin</a>
                        </p>
                    </div>
                </div>
                <div className="contact contact-form">

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
