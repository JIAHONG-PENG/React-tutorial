import React from "react";
import logo from "../logo192.png"

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo"></img>  
                <div className="logo-text">ReactFacts</div>
            </div>
            <div className="title">React Course - Project 1</div>
        </div>
    )
}