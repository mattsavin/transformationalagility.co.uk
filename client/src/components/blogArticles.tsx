import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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
		return(
			<div className={"blog-entry"}>
				<div className={"blog-title"}>
					<Link to={"/blog"}>Back</Link>
					<h1>{blog.Title}</h1>
				</div>
				<div className={"blog-image"}>
					{blog.image && <img src={blog.image} alt={"Blog Post"}/>}
				</div>
				<div className={"blog-paragaph"}>
					<p>{blog.Content}</p>
				</div>
			</div>
		);
	}
	else {
		return (<> </>);
	}
}