import React from "react";

const ControlBtn = (props)=>{
    return (
        <div className={props.isOn?"control-btn-container--on":"control-btn-container"}>
            {props.children}
        </div>
    )
}

export default ControlBtn