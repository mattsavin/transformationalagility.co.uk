import React from "react";
import Link from "next/link";
import * as FAIcons from "react-icons/fa";

export default function Footer (): JSX.Element {
	return (
		<>
			<div className="socials">
				<p>Connect with us on Social Media</p>
				<br />
				<div>
					<Link href="https://twitter.com" passHref={true}>
						<a className={"social-icon twitter-icon"}>
							<FAIcons.FaTwitter />
						</a>
					</Link>
				</div>
			</div>
			<div className="footer">
				<p className="copyright">&copy; Copyright 2021 Transformational Agility Ltd.</p>
				<br />
			</div>
		</>

	);
}