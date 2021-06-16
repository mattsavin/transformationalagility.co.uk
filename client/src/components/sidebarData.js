import React from 'react';
import * as FAIcons from 'react-icons/fa';
import * as AIIcons from 'react-icons/ai';
import * as IOIcons from 'react-icons/io';
import * as BSIcons from 'react-icons/bs';
import * as FIIcons from 'react-icons/fi';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AIIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <IOIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Case Studies",
        path: "/casestudies",
        icon: <AIIcons.AiFillFolder />,
        cName: "nav-text"
    },
    {
        title: "Blog",
        path: "/blog",
        icon: <BSIcons.BsFileText />,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FAIcons.FaPhoneAlt />,
        cName: "nav-text"
    },
    {
        title: "Login",
        path: "/login",
        icon: <FIIcons.FiLogIn />,
        cName: "nav-text"
    },

]

