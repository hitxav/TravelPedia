import React, {useState} from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';
import Backdrop from "../UIElements/Backdrop";

function MainNavigation(props){
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    function openDrawer(){
        setDrawerIsOpen(true);
    }

    function closeDrawer(){
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            { drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
            { drawerIsOpen ? 
                <SideDrawer>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks/>
                    </nav>
                </SideDrawer> : null
            }
                  
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>  {/* this will redirect to home page on clicking it*/}
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;

