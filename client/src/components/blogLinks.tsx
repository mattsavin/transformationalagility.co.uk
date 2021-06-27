import * as React from "react";
import { Component} from "react";
import { Link } from "react-router-dom";


export default class BlogArticles extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			blog: []
		};
	}

	componentDidMount() {
		fetch("/api/blog")
			.then(res => res.json())
			.then(blog => this.setState({blog}));
	}

	render(): JSX.Element {
		const content: JSX.Element[] = [];
		this.state.blog.forEach((element: any) => {
			content.push(<div className={"blog-link"}><Link to={`/blog/${element.id}`}>{`${element.Title}`}</Link> <br /></div>);
		});
		return (
			<>
				<>
					<h2  id={"articles"}className={"blog-link-title"}>Articles</h2>
					{content}
					
				</>
			</>
		);
	}
}