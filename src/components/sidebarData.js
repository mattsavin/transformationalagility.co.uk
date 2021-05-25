import React from 'react';
import * as FAIcons from 'react-icons/fa';
import * as AIIcons from 'react-icons/ai';
import * as IOIcons from 'react-icons/io';
import * as BSIcons from 'react-icons/bs';

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
        title: "Contact",
        path: "/contact",
        icon: <FAIcons.FaPhoneAlt />,
        cName: "nav-text"
    },
    {
        title: "Blog",
        path: "/blog",
        icon: <BSIcons.BsFileText />,
        cName: "nav-text"
    },
]

