import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function NotFound(): JSX.Element {
	return (
		<div className={"not-found"}>
			<Head>
				<title>Transformational Agility: 404 Not Found</title>
			</Head>
			<h1>404 not found!</h1>
			<Link href="/"><a>Click here to return to the homepage</a></Link>
		</div>
	);
}