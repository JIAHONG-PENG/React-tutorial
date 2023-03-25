import React from "react";
// import Star from "../images/star.png"
// import KZ from "../images/katie-zaferes.png"

export default function Card(props) {
    let statusText
    if (props.item.openSpots === 0) {
        statusText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        statusText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="image">
                <img src={"./images/" + props.item.coverImg} alt="kz"></img>
            </div>
            <div className="rate">
                <img className="star" src="./images/star.png" alt="star"></img>
                <div className="rate-num">{props.item.stats.rating}</div>
                <div className="viewed">(
                    <div className="num">{props.item.stats.reviewCount}</div>
                )</div>
                <div className="location">•{props.item.location}</div>
            </div>
            <div className="name">{props.item.title}</div>
            <div className="price">
                <div>From
                    <div> $<div className="price-num">{props.item.price}</div></div>
                </div>
                <div> / person</div>
            </div>
            {statusText && <div className="status">{statusText}</div>}
        </div>
    )
}