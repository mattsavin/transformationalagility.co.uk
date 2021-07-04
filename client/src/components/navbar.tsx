import React, { useState } from "react";
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import Link from "next/link";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import logo_small from "../../public/images/logo_small.png";

let rotation = 0;

function Navbar(): JSX.Element {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		rotation += 180;
		setSidebar(!sidebar);
		document.querySelector<HTMLElement>("#navArrows")!.style.transform = `rotate(${rotation}deg)`;
		document.querySelector<HTMLElement>("#navArrows")!.style.transition = "transform 500ms ease-in-out";
	};


	return (
		<>
			<IconContext.Provider value={{color: "#fff"}}>
				<div className="navbar">
					<div className={"menu-bars"}>
						<Link href="">
							<a>
								<FAIcons.FaAngleDoubleRight onClick={showSidebar} id={"navArrows"}/>
							</a>
						</Link>
					</div>

					<div className="title">
						<a className={"desktop"} href="/"><img src="/images/logo.png" alt="Transformational Agility Logo"/></a>
						<a href="/"><img src="/images/logo_small.png" className={"mobile"} alt="Transformational Agility Logo"/></a>
					</div>
					<div className={"menu-bars"}> </div>
				</div>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<div className={"menu-bars"}>
								<Link href="#">
									<a className={"menu-bars"}>
										<AIIcons.AiOutlineClose />
									</a>
								</Link>
							</div>

						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link href={`${item.path}`}>
										<a>
											{item.icon}
											<span>{item.title}</span>
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;