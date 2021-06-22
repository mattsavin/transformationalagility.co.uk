import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";

interface Props {
	content: string,
	title: string,
	buttonLocation: string,
	buttonContent: string
}


export const BannerBreak: FunctionComponent<Props> = (props) => {	
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
};

BannerBreak.propTypes = {
	content: PropTypes.any,
	title: PropTypes.any,
	buttonLocation: PropTypes.any,
	buttonContent: PropTypes.any

};