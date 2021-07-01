import React from "react";
import Link from "next/link";

export default function NotFound(): JSX.Element {
	return (
		<div className={"not-found"}>
			<h1>404 not found!</h1>
			<Link href="/"><a>Click here to return to the homepage</a></Link>
		</div>
	);
}