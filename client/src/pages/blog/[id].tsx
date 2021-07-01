import React, {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name,react/prop-types,@typescript-eslint/ban-ts-comment
export default function BlogArticles(): JSX.Element {
	const [articles, setArticles] = useState<any>({});
	const router = useRouter();
	let { id }: any = router.query;

	useEffect((): any => {
		fetch("http://delivery-agility.com/api/blog")
			.then(res => res.json())
			.then(blog => setArticles({blog}));
		return "";
	}, []);

	id = parseInt(id as string);
    
	if (articles.blog) {
		const blog = Object.assign({}, articles.blog[id - 1]);
		return(
			<div className={"blog-entry"}>
				<div className={"blog-title"}>
					<Link href={"/blog"}>Back</Link>
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