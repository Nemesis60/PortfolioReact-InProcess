import React, {useState} from "react";
import '../Styles/NavBar.css';
import HamburgerIcon from "./HamburgerIcon";

function NavBar (){

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className="navbar-container">
            <nav className={`links ${clicked ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <HamburgerIcon clicked={clicked} handleClick={handleClick} />
        </div>
    )
}

export default NavBar;