import React from "react";
import SVGThunder from "./SVGThunder";

const ControlBtn = (props)=>{
    return (
        <div className="control-btn-container">
            {props.children}
        </div>
    )
}

export default ControlBtn