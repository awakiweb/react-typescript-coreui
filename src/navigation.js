import CIcon from "@coreui/icons-react";
import React, { ReactNode } from "react";
import {cilSettings,cilSpeedometer,cilGif} from '@coreui/icons'

export default [
    {
        _tag: 'CSidebarNavItem',
        name: 'Home',
        to: '/',
        icon:<CIcon  content={cilSpeedometer} customClasses="c-sidebar-nav-icon"/> ,
        badge: {
            color: 'info',
            text: 'NEW',
        }
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Stepper',
        to: '/stepper',
        icon: <CIcon  content={cilGif} customClasses="c-sidebar-nav-icon"/>,
        badge: {
            color: 'danger',
            text: 'STEPPER',
        }
    },
    {
        _tag: 'CSidebarNavDivider'
    },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Label'],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Drop down menu',
        route: '/',
        icon: 'cil-star',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Menu 1',
                icon:<CIcon  content={cilSettings} customClasses="c-sidebar-nav-icon"/>,
                to: '/',
            },
            {
                _tag: 'CSidebarNavItem',
                icon: <CIcon  content={cilSettings} customClasses="c-sidebar-nav-icon"/>,
                name: 'Menu 2',
                to: '/',
            },
        ],
    },
];
