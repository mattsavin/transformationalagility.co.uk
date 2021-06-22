import React from "react";
import {Welcome} from "../components/welcome";
import Footer from "../components/footer";
import BlogArticles from "../components/blogArticles";

function blog(): JSX.Element {
	return (
		<>
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

export default blog;