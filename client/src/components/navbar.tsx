import React, { useState } from "react";
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
import logo from "../images/logo.png";
import logo_small from "../images/logo_small.png";

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
						<Link to="#">
							<FAIcons.FaAngleDoubleRight onClick={showSidebar} id={"navArrows"}/>
						</Link>
					</div>

					<div className="title">
						<Link to="/#top"><img src={logo} alt="Transformational Agility Logo" className="desktop"/></Link>
						<Link to="/#top"><img src={logo_small} alt="Transformational Agility Logo" className="mobile"/></Link>
					</div>
					<div className={"menu-bars"}> </div>
				</div>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<div className={"menu-bars"}>
								<Link to="#" className="menu-bars">
									<AIIcons.AiOutlineClose />
								</Link>
							</div>

						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={`${item.path}#top`}>
										{item.icon}
										<span>{item.title}</span>
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