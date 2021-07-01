import Link from "next/link";
import * as React from "react";
import nl2br from "react-nl2br";

export const Welcome: React.FC<Props> = (props: any) => {
	let button;

	if (props.buttonLocation) {
		button = <Link href={props.buttonLocation}>
			<a className={`button introduction-button center ${props.buttonClassName}`}>
				{props.buttonContent}
			</a>
		</Link>;
	}
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

interface Props {
	buttonLocation: string,
	content: string,
	buttonClassName?: string,
	buttonContent: any,
	cssClass: string,
	heading: string,

}