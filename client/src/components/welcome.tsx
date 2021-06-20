import { HashLink as Link } from "react-router-hash-link";
import React from "react";
import nl2br from "react-nl2br";

export function Welcome(props) {
	let button = <Link to={props.buttonLocation} className={`button introduction-button center ${props.buttonClassName}`}>
		{props.buttonContent}
	</Link>;
	return (
		<>
			<div className={"parallax welcome welcome-" + props.cssClass}>
				<div className="header">
					<h1 className={"introduction-heading"}>{props.heading}</h1>
				</div>
				<div className="introduction">
					<p className={"introduction-content"}>{nl2br(props.content)}</p>
				</div>
				<div className={"introduction center"}>
					{button}
				</div>
			</div>
		</>
	);
}