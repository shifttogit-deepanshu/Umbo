import React from "react";
import ControlBtn from "./ControlBtn";
import SVGThunder from "./SVGThunder";
import SVGGlobe from "./SVGGlobe";
import SVGRain from "./SVGRain";
import SVGCloud from "./SVGCloud";
import SVGLight from "./SVGLight";

const Control = ()=>{
    return (
        <div className="control-container">
            <ControlBtn><SVGGlobe color="#C4c4c4"/></ControlBtn>
            <ControlBtn ><SVGThunder color="#C4c4c4"/></ControlBtn>
            <ControlBtn ><SVGRain color="#C4c4c4"/></ControlBtn>
            <ControlBtn ><SVGCloud color="#C4c4c4"/></ControlBtn>
            <ControlBtn ><SVGLight color="#C4c4c4"/></ControlBtn>
        </div>
    )
}

export default Control