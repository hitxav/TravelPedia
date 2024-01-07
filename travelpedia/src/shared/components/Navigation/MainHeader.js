import React from "react";

import './MainHeader.css';

function MainHeader (props){ // props.children allow to add any html tag between the header
    return (
        <header className="main-header">   
            {props.children}        
       </header>
    )
}

export default MainHeader;