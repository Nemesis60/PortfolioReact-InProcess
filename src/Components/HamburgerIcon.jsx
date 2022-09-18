import React from "react";
import '../Styles/HamburgerIcon.css'

function HamburgerIcon (props){

    return(
        <div onClick={props.handleClick}
            class={`icon nav-icon-6 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerIcon;