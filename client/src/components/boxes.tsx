import Link from "next/link";
import * as React from "react";
import * as path from "path";
import * as PropTypes from "prop-types";

export function Boxes(props: any): JSX.Element {
	const content = [];
	let justify;
	for (const key in props.boxes) {
		if (Object.prototype.hasOwnProperty.call(props.boxes, key)) {
			if (+key % 2 === 1) { justify = "left"; } else if (+key % 2 === 0) { justify = "right"; } else {console.log("ERROR!");}
			if ((+key ) % 4 === 1 || (+key) % 4 === 2) {
				content.push(
					<div key={key} className={`box box-${key} ${justify}`}>
						<div className={"box-width"}>
							<h3 className={"box box-title"}>
								{props.boxes[key].heading}
							</h3>
							<h4 className={"box box-subtitle"}>
								{props.boxes[key].subheading}
							</h4>
							<p className={"box box-paragraph"}>
								{props.boxes[key].content}
							</p>
							<div className={"center"}>
								<Link href={`${props.boxes[key].buttonLocation}`}>
									<a className={"button box-button center"}>
										{props.boxes[key].buttonContent}
									</a>
								</Link>
							</div>
						</div>
					</div>
				);
			} else {
				content.push( <div className={`box-${key} ${path.basename(__filename, ".js")}-box-image-${key} ${justify}`}> </div> );
			}
		}
	}

	return <> {content} </>;
}

Boxes.propTypes = {
	boxes: PropTypes.object,
};