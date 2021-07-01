import React from "react";
import { Boxes }  from "../components/boxes";
import { BannerBreak } from "../components/banner-break";
import { Welcome } from "../components/welcome";
import Footer from "../components/footer";

export default class Home extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			boxes: [],
			intro: [],
			bannerBreak: [],
		};
	}

	componentDidMount() {
		fetch("http://delivery-agility.com/api/content/home/boxes")
			.then(res => res.json())
			.then(boxes => this.setState({boxes}
			));
		fetch("http://delivery-agility.com/api/content/home/intro")
			.then(res => res.json())
			.then(intro => this.setState({intro}
			));
		fetch("http://delivery-agility.com/api/content/home/break")
			.then(res => res.json())
			.then(bannerBreak => this.setState({bannerBreak}
			));
	}

	render(): JSX.Element {
		const intro = Object.assign({}, this.state.intro[0]);
		const bannerBreak = Object.assign({}, this.state.bannerBreak[0]);

		return (
			<div className="home">
				<Welcome heading={intro.heading}
					content={intro.content}
					buttonContent={intro.buttonContent}
					buttonLocation={intro.buttonLocation}
					cssClass={"home"}
				/>

				<BannerBreak title={bannerBreak.title}
					content={bannerBreak.content}
					buttonLocation={bannerBreak.buttonLocation}
					buttonContent={bannerBreak.buttonContent}

				/>
				<div className={"boxes"}>
					<Boxes boxes={Object.assign({}, this.state.boxes)} />
				</div>

				<Footer/>
			</div>
		);
	}
}