import React from "react";

const SVGThunder = (props)=>{
    return(
        <svg width="50" height="50" viewBox="0 0 256 488" fill="none" xmlns="https://www.w3.org/2000/svg">
            <path d="M256 0H0L24.5 168.5H78.5L0 487.5L256 168.5H179.5L256 0Z" fill={props.color}/>
        </svg>
    )   
}

export default SVGThunder