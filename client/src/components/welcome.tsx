import { HashLink as Link } from "react-router-hash-link";
import * as React from "react";
import nl2br from "react-nl2br";
import * as PropTypes from "prop-types";

export const Welcome: React.FC = (props: any) => {
	const button = <Link to={props.buttonLocation} className={`button introduction-button center ${props.buttonClassName}`}>
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
};

Welcome.propTypes = {
	buttonLocation: PropTypes.string,
	buttonClassName: PropTypes.string,
	buttonContent: PropTypes.string,
	cssClass: PropTypes.string,
	heading: PropTypes.string,
	content: PropTypes.string,
	children: PropTypes.any
};