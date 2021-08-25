import React,{useState} from "react";
import {
    CBreadcrumbRouter,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink, CLink,
    CSubheader,
    CToggler
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import TheHeaderDropdown from "./HeaderDro";
import TheHeaderDropdownNotif from "./HeaderNoti";
import TheHeaderDropdownTasks from "./HeaderTask";
import TheHeaderDropdownMssg from "./HeaderMsg";
import {cilSpeech,cilHamburgerMenu,cilGif} from '@coreui/icons' 

const Header = (props:any) => {
    const routes = [
        {path: '/', exact: true, name: 'Home'},
        {path: '/stepper', name: 'Stepper'},
    ];

    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={() => props.onClickVisible()}
                
            />
            <CToggler
                inHeader
                className="ml-3 d-md-down-none"
                onClick={() => props.onClickVisible()}
                
            />
            <CHeaderBrand className="mx-auto d-lg-none" to="/">
                <CIcon name="logo" height="48" alt="Logo"/>
            </CHeaderBrand>

            <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/">Home</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/stepper">Stepper</CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>

            <CHeaderNav className="px-3">
                <TheHeaderDropdownNotif/>
                <TheHeaderDropdownTasks/>
                <TheHeaderDropdownMssg/>
                <TheHeaderDropdown/>
            </CHeaderNav>

            <CSubheader className="px-3 justify-content-between">
                <CBreadcrumbRouter
                    className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                    routes={routes}
                />
                <div className="d-md-down-none mfe-2 c-subheader-nav">
                    <CLink className="c-subheader-nav-link" href="#">
                        <CIcon content={cilSpeech} alt="Settings"/>
                    </CLink>
                    <CLink
                        className="c-subheader-nav-link"
                        aria-current="page"
                        to="/dashboard"
                    >
                        <CIcon name="cil-graph" alt="Dashboard"/>&nbsp;Dashboard
                    </CLink>
                    <CLink className="c-subheader-nav-link" href="#">
                        <CIcon name="cil-settings" alt="Settings"/>&nbsp;Settings
                    </CLink>
                </div>
            </CSubheader>
        </CHeader>
    )
}

export default Header;