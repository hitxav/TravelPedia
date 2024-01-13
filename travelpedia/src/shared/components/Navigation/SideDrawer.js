import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';

import "./SideDrawer.css";

function SideDrawer(props){ // * adding onClick on aside for sideDrawr  will close it if you click anywhere on side bar }
    const content = (
        <CSSTransition in={props.show} timeout={50} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside> 
        </CSSTransition>
    );
    return ReactDOM.createPortal(content,document.getElementById("drawer-hook"));
}

export default SideDrawer;