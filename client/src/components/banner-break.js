import React from "react";
import { Link } from "react-router-dom";

export function BannerBreak(props) {
    return (
        <>
            <div className="break-section">
                <h1 className={"break break-title"}>{props.title}</h1>
                <p className={"break break-content"}>
                    {props.content} <br />
                    <Link to={props.buttonLocation}
                    className={"button break-button"}>
                        {props.buttonContent}
                    </Link>
                </p>
            </div>
        </>
    );
}