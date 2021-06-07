import {HashLink as Link} from "react-router-hash-link";
import * as FAIcons from "react-icons/fa";

export function Footer () {
    return (
        <>
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
        </>

    );
}