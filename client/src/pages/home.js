import React from "react";
import { Link } from "react-router-dom";
import * as FAIcons from "react-icons/fa";
import { Welcome } from "../components/welcome";
import { Boxes} from "../components/boxes";
import * as content from "../content/home";

function home() {
    return (
        <div className="home">
            <Welcome heading={content.heading}
                     content={content.content}
                     buttonContent={content.buttonContent}
                     buttonLocation={content.buttonLocation}
                     cssClass ={"home"}
                     buttonClassName={"button introduction-button"}
            />
            <Boxes />
            <div className="preboxes-break">
                <h1 className="prebox prebox-title">Our Services</h1>
                <p className="prebox prebox-paragraph">Discover Our Expertise
                    <form>
                        <button type="submit" formAction="/about" className="button prebox-button">Learn More</button>
                    </form>
                </p>
            </div>
            <div className="boxes">
                <div className="first left box-image-1">
                </div>
                <div className="second right">
                    <h3 className="box box-title">Enabling Transformational Change</h3>
                    <h4 className="box box-subtitle">Achieve Your Goals</h4>
                    <p className="box box-paragraph">With over 20 years of experience, our staff has the
                        capabilities and expertise to take your business to the next level. At Transformational Business
                        Agility, we combine our insights and skills to transform your processes and strategies, and in
                        turn, your company. We’re proud to help shape and improve how our clients structure and manage
                        their business.
                        <form>
                            <button type="submit" formAction="/contact" className="button">Contact Us</button>
                        </form>
                    </p>
                </div>
                <div className="third left">
                    <h3 className="box box-title">Succeeding Through Agility</h3>
                    <h4 className="box box-subtitle">Expert Guidance</h4>
                    <p className="box box-paragraph">Looking to develop your business but not sure where to turn?
                        Need help planning or executing your next project? Let us guide you. Any organization can move
                        forward with small incremental changes, but building for the future in today’s rapidly evolving
                        environment means taking bold chances and making insightful decisions.
                        <form>
                            <button type="submit" formAction="/contact" className="button">Contact Us</button>
                        </form>
                    </p>
                </div>
                <div className="fourth right box-image-2">
                </div>
                <div className="fifth left box-image-3">
                </div>
                <div className="sixth right">
                    <h3 className="box box-title">The Only Constant is Change</h3>
                    <h4 className="box box-subtitle">Grow Your Business</h4>
                    <p className="box box-paragraph">We examine what organisations are doing to stay relevant and
                        competitive in this fast-paced world, and which ones are doing it best. We then strategise using
                        smart tools and global resources in order to understand the implications of every choice our
                        clients can make. Get in touch to learn more about how this service can help you.
                        <form>
                            <button type="submit" formAction="/contact" className="button">Contact Us</button>
                        </form>
                    </p>
                </div>
                <div className="seventh left">
                    <h3 className="box box-title">Going Higher</h3>
                    <h4 className="box box-subtitle">Achieve Your Goals</h4>
                    <p className="box box-paragraph">With years of experience, our staff has the capabilities and
                        expertise to take your business to the next level. At Transformational Business Agility, we are
                        here to help you realise your potential, improve leadership, enable high performing teams and
                        for you to match and exceed the winds of the external environment. We’re proud to help shape and
                        improve how our clients structure and manage their business.
                        <form>
                            <button type="submit" formAction="/contact" className="button">Contact Us</button>
                        </form>
                    </p>
                </div>
                <div className="eighth right box-image-4">
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

export default home