import React, {Component} from "react";

export default class BlogArticles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blog: []
		};
	}

	componentDidMount() {
		fetch("/api/blog")
			.then(res => res.json())
			.then(blog => this.setState({blog}
			));
	}

	render() {
		let content = [];

		this.state.blog.forEach((element) => {
				<p>{element.Content}</p>
			content.push(<div className={"blog-entry"}>
				<h1>{element.Title}</h1>
				<img src={element.image} alt={"Blog Post"}/>
			</div>)
		});

		return (
			<div id={"articles"}>
				{content}
			</div>
		);
	}
}