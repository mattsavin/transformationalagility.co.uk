import React from "react";
import * as FAIcons from "react-icons/fa";
import * as RIIcons from "react-icons/ri";
import smoothscroll from "smoothscroll-polyfill";
//import { init } from 'emailjs-com';
import { Welcome } from "../components/welcome";
import * as content from "../content/contact";
import { HashLink as Link } from "react-router-hash-link";
import { ContactInfo } from "../components/contact-info";
import { Footer } from "../components/footer";


//init("user_c02JIaEj90UAVhXU8Op5n");
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

            <ContactInfo />

            <Footer />
        </div>
    )
}

export default contact
