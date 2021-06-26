import React from "react";
import { Welcome } from "../components/welcome";
import Footer from "../components/footer";

export default class about extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			intro: []
		};
	}

	componentDidMount() {
		fetch("/api/content/about/intro")
			.then(res => res.json())
			.then(intro => this.setState({intro}
			));
	}

	render(): JSX.Element {
		const intro = Object.assign({}, this.state.intro[0]);

		console.log(this.state.intro);

		return (
			<div className="home">

				<Welcome heading={intro.heading}
					content={intro.content}
					buttonContent={intro.buttonContent}
					buttonLocation={intro.buttonLocation}
					cssClass={"home"}
				/>
				<Footer/>
			</div>
		);
	}
}