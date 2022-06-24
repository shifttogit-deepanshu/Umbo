import React from "react"
import SVGConnection from "./SVGConnect"

const ChangeCred = (props)=>{
    
    return(
        <button className="change_cred" onClick={()=>{props.handleClick()}}>
            <SVGConnection />
        </button>
    )
}

export default ChangeCred
