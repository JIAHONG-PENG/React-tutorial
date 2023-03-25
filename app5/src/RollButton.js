import React from "react"

export default function RollButton(props) {
    return (
        <div className="rollButton" 
             onClick={() => {
                    if (props.text === "Roll") {
                        props.buttonHandle()
                    } else {
                        props.replayHandle()
                    }
                }}>
            {props.text}
        </div>
    )
}