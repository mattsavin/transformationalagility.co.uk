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
		for(let key in this.state.blog) {
			if (Object.prototype.hasOwnProperty.call(this.state.blog, key)) {
				content.push(
					<div className={"blog-entry"}>
						<h1>{this.state.blog[key].Title}</h1>
						<p>{this.state.blog[key].Content}</p>
						<img src={this.state.blog[key].image} alt={"Blog Post Image"}/>
					</div>
				);
			}
		}
		return (
			<div id={"articles"}>
				{content}
			</div>
		);
	}
}