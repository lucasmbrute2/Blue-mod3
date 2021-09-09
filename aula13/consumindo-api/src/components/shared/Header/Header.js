import React from "react";
import "./Header.scss"

const Header = ()=>{
    return(
        <header className="header"> 
            <ul className="header-list">   
                <a href="/">
                    <li className="header-list-item">Home</li>
                </a>
                <a href="/add">
                    <li className="header-list-item">Add</li>
                </a>
            </ul>
        </header>
    )
}

export default Header;
            
            