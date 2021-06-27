import React, {useEffect, useState} from "react";
import { Redirect } from "react-router";

// eslint-disable-next-line react/display-name,react/prop-types,@typescript-eslint/ban-ts-comment
export default function BlogArticles({match: {params: {id}}}: any): JSX.Element {
	const [articles, setArticles] = useState<any>({});

	useEffect((): any => {
		fetch("/api/blog")
			.then(res => res.json())
			.then(blog => setArticles({blog}));
		return "";
	}, []);
	
	id = parseInt(id);
	if (id != 0 && !id) {
		return <Redirect to={{pathname: "/404"}} />;
	}

	if (articles.blog) {
		const blog = Object.assign({}, articles.blog[id - 1]);
		const title = blog.Title;
		return(
			<div className={"blog-entry"}>
				<h1 className={"blog-title"}>{blog.Title}</h1>
				<img className={"blog-image"} src={blog.image} alt={"Blog Post"}/>
				<p className={"blog-paragaph"}>{blog.Content}</p>
			</div>
		);
	}
	else {
		return (<></>);
	}
}