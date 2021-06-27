import React from "react";
import { Welcome } from "../components/welcome";
import { ContactInfo } from "../components/contact-info";
import Footer from "../components/footer";

export default class contact extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			intro: []
		};
	}

	componentDidMount() {
		fetch("/api/content/contact/intro")
			.then(res => res.json())
			.then(intro => this.setState({intro}
			));
	}

	render(): JSX.Element {
		const intro = Object.assign({}, this.state.intro[0]);

		return (
			<div className="home">
				<Welcome heading={intro.heading}
					content={intro.content}
					buttonContent={intro.buttonContent}
					buttonLocation={intro.buttonLocation}
					cssClass={"home"}
				/>
				<ContactInfo />
				<Footer/>
			</div>
		);
	}
}