import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { Welcome } from "../components/welcome";
import * as content from "../content/contact.json";
import { ContactInfo } from "../components/contact-info";
import { Footer } from "../components/footer";

smoothscroll.polyfill();

declare global {
	interface Window {
		__forceSmoothScrollPolyfill__: boolean
	}
}

window.__forceSmoothScrollPolyfill__ = true;

function contact() {
	return (
		<div className="contact">
			<Welcome heading={content.heading}
				content={content.content}
				cssClass={"contact"}
				buttonContent={<img alt="Arrow Down Icon" src={content.imageURL} />}
				buttonClassName={"ct-btn-scroll"}
				buttonLocation={content.buttonLocation}/>

			<ContactInfo />

			<Footer />
		</div>
	);
}

export default contact;
