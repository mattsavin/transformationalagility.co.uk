import React from "react";
import {Welcome} from "../components/welcome";
import Footer from "../components/footer";
import BlogArticles from "../components/blogLinks";
import Head from "next/head";

export default function blog(): JSX.Element {
	return (
		<>
			<Head>
				<title>Transformational Agility Blog</title>
			</Head>
			<Welcome
				heading={"Blog"}
				content={"Welcome to the blog"}
				buttonContent={"Read the blog"}
				buttonLocation={"#articles"}
				cssClass={"home"}/>
			<BlogArticles />
			<Footer />
		</>
	);
}