import React from "react";
import * as content from "../content/home";
import { Boxes }  from "../components/boxes";
import {BannerBreak} from "../components/banner-break";
import { Welcome } from "../components/welcome";
import { Footer } from "../components/footer";

function home() {
	return (
		<div className="home">

			<Welcome heading={content.intro.heading}
				content={content.intro.content}
				buttonContent={content.intro.buttonContent}
				buttonLocation={content.intro.buttonLocation}
				cssClass ={"home"}
			/>

			<BannerBreak title={content.break.title}
				content={content.break.content}
				buttonLocation={content.break.buttonLocation}
				buttonContent={content.break.buttonContent}

			/>
			<div className={"boxes"}>
				<Boxes boxes={content.boxes}
				/>
			</div>

			<Footer />
		</div>
	);
}

export default home;