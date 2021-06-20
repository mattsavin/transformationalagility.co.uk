import * as React from "react";
import { FunctionComponent, Component} from "react";


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
			.then(blog => this.setState({blog}
			));
	}

	render() {
		const content: JSX.Element[] = [];

		this.state.blog.forEach((element: any) => {
			content.push(<div className={"blog-entry"}>
				<h1>{element.Title}</h1>
				<img src={element.image} alt={"Blog Post"}/>
			</div>);
		});

		return (
			<div id={"articles"}>
				{content}
			</div>
		);
	}
}