import React from "react";
// import airbnb_icon from "../images/airbnb-logo.png"
// import photo_grid from "../images/photo-grid.png"

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="icon">
                    <img src="./images/airbnb-logo.png" alt="airbnb logo"></img>
                </div>
            </div>
            <div className="photo-grid">
                <img src="./images/photo-grid.png" alt="grid"></img>
            </div>
            <h1 className="title">Online Experiences</h1>
            <div className="text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</div>
        </div>
    )
}