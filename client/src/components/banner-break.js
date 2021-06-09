import React from "react";
import { Link } from "react-router-dom";

export function BannerBreak(props) {
    return (
        <>
            <div className="break-section">
                <h1 className={"break break-title"}>{props.title}</h1>
                <p className={"break break-content center"}>
                    {props.content}

                </p>
                <div className={"center"}>
                    <Link to={props.buttonLocation}
                          className={"button center"}>
                        {props.buttonContent}
                    </Link>
                </div>
            </div>
        </>
    );
}