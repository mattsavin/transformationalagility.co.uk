import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className={"not-found"}>
			<h1>404 not found!</h1>
			<Link to="/">Click here to return to the homepage</Link>
		</div>
	);
}