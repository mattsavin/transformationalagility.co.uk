import React, { useState } from "react";
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link';
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <div className={"menu-bars"}>
                    <Link to="#">
                        <FAIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <div className="title">
                    <Link to="/"><img src="../images/logo%20cheat.png" alt="Transformational Agility Logo" className="desktop"/></Link>
                    <Link to="/"><img src="../images/logo%20small.png" alt="Transformational Agility Logo" className="mobile"/></Link>
                </div>

                <div className={"menu-bars"}>

                </div>

            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="" className="menu-bars">
                            <AIIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={`${item.path}#top`}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar