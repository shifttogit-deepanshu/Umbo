import React from "react";

const ControlBtn = (props)=>{
    return (
        <button onClick={()=>props.handleClick()} className={props.isOn?"control-btn-container--on":"control-btn-container"}>
            {props.children}
        </button>
    )
}

export default ControlBtn