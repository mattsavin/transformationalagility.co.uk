import React, { useState } from "react";
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FAIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className="title">
                    <a href="/"><img src="../images/logo%20cheat.png" onClick="/" alt="Transformational Agility Logo" className="desktop"/></a>
                    <a href="/"><img src="../images/logo%20small.png" onClick="/" alt="Transformational Agility Logo" className="mobile"/></a>
                </div>

            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AIIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
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