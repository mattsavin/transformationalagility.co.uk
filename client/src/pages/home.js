import React from "react";
import { Link } from "react-router-dom";
import * as FAIcons from "react-icons/fa";
import * as content from "../content/home";
import { Boxes }  from "../components/boxes";
import {BannerBreak} from "../components/banner-break";
import { Welcome } from "../components/welcome";

function home() {
    return (
        <div className="home">

            <Welcome heading={content.intro.heading}
                     content={content.intro.content}
                     buttonContent={content.intro.buttonContent}
                     buttonLocation={content.intro.buttonLocation}
                     cssClass ={"home"}
            />

            <BannerBreak title={content.break.title}
                         content={content.break.content}
                         buttonLocation={content.break.buttonLocation}
                         buttonContent={content.break.buttonContent}

            />
            <div className={"boxes"}>
                <Boxes boxes={content.boxes}
                />
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

export default home