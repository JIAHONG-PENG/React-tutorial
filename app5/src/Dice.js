import React from "react"

export default function Dice(props) {
    return (
        <div className={props.choose ? "die choose" : "die"} onClick={() => props.clickHandle(props.index)}>
            <div className="die-value">
                {props.value}
            </div>
        </div>
    )
}