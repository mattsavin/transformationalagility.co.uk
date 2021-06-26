import React from "react";
import * as content from "../content/home.json";
import { Boxes }  from "../components/boxes";
import { BannerBreak } from "../components/banner-break";
import { Welcome } from "../components/welcome";
import Footer from "../components/footer";

export default class Home extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			blog: {}
		};
	}

	componentDidMount() {
		fetch("/api/content/home")
			.then(res => res.json())
			.then(blog => this.setState({blog})
			);
	}

	render(): JSX.Element {

		console.log(this.state.blog);

		return (
			<div className="home">

				<Welcome heading={content.intro.heading}
					content={content.intro.content}
					buttonContent={content.intro.buttonContent}
					buttonLocation={content.intro.buttonLocation}
					cssClass={"home"}
				/>

				<BannerBreak title={content.break.title}
					content={content.break.content}
					buttonLocation={content.break.buttonLocation}
					buttonContent={content.break.buttonContent}

				/>
				<div className={"boxes"}>
					<Boxes boxes={content.boxes}
					/>
					<Boxes boxes={this.state.blog} />
				</div>

				<Footer/>
			</div>
		);
	}
}