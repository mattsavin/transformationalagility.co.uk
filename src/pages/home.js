import React from "react";
import "./home.css";

function home() {
    return (
        <div className="home">
            <div className="entry">
                <div className="header">
                    <h1>Transformational Agility for IT and Business Strategies</h1>
                </div>
                <div className="introduction">
                    <p>
                        Driving Business Flexibility, Growth mindset, Enabling Change across IT teams and integrating them
                        back to the business
                        <br />
                        From implementing new business strategies to ultra-efficient work processes,
                        Transformational Business agility is ready to tackle any challenge and put you on the path to success.
                        Since 2010, we’ve helped our clients by delivering IT capabilities that transform the way they do
                        business. Contact us today to schedule a consultation.
                    </p>
                </div>

            </div>
            <div className="boxes">
                <div className="second left">
                </div>
                <div className="third right">
                    <h3 className="box box-title">Enabling Transformational Change</h3>
                    <h4 className="box box-subtitle">Achieve Your Goals</h4>
                    <p className="box box-paragraph">With over 20 years of experience, our staff has the
                        capabilities and expertise to take your business to the next level. At Transformational Business
                        Agility, we combine our insights and skills to transform your processes and strategies, and in
                        turn, your company. We’re proud to help shape and improve how our clients structure and manage
                        their business.</p>
                    <button>Contact Us</button>
                </div>
                <div className="fourth left">
                    <p>this is text</p>
                </div>
                <div className="fifth right">
                </div>
            </div>
            <div className="footer">
                <p>&copy; Copyright 2021 Transformational Agility Ltd.</p>
            </div>
        </div>
    )
}

export default home