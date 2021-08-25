import React,{useState} from "react";
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand, CSidebarMinimizer,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavDropdown, CSidebarNavItem, CSidebarNavTitle
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import navigation from "../navigation.js";
import {cilList,cilSpeedometer} from '@coreui/icons' 


const Sidebar = (props:any) => {
    return (
        <CSidebar className=" "
            show={props.visible}
            onShowChange={()=>props.onClickOutSideClosed()}
        >
            <CSidebarBrand className="" to="/">
                <CIcon
                    className="c-sidebar-brand-minimize"
                    name="logo-negative"
                    height={35}
                />
            </CSidebarBrand>
            <CSidebarNav>
            <CCreateElement
                    items={navigation}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                />

              
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none"/>
        </CSidebar>
    )
}

export default Sidebar;
