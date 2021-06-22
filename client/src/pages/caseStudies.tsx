import React, {Component} from "react";
import {Welcome} from "../components/welcome";
import {Boxes} from "../components/boxes";
import Footer from "../components/footer";


export default class CaseStudies extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			db: []
		};
	}

	componentDidMount() {
		fetch("/api/content")
			.then(res => res.json())
			.then(db => this.setState({db}
			));
	}

	render(): JSX.Element {
		console.log(this.state.db);
		const content: any = [];

		this.state.db.forEach((element: any) => {
			content.push(
				element
			);
		});

		console.log(content);

		return (
			<>
				<Welcome buttonLocation = {"/contact"}
					buttonContent = {"Contact Us"}
					buttonClassName = {""}
					content = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
						" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
						" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
						" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
					cssClass = {"home"}
					heading = {"Case Studies"}
				/>
				<Footer />
			</>
		);
	}
}