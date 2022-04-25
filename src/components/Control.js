import React,{useEffect,useState} from "react";
import ControlBtn from "./ControlBtn";
import SVGThunder from "./SVGThunder";
import SVGGlobe from "./SVGGlobe";
import SVGRain from "./SVGRain";
import SVGCloud from "./SVGCloud";
import SVGLight from "./SVGLight";

const Control = (props)=>{
    const [mode,setMode] = useState(null)
    const [lights,setLights] = useState(null)

    useEffect(()=>{
        setMode(props.data.mode)
        setLights(props.data.lights)
    })   


    return (
        <div className="control-container">
            {<ControlBtn isOn={mode==="web"?1:0}><SVGGlobe color="#C4c4c4"/></ControlBtn>}
            <ControlBtn isOn={mode==="thunder"?1:0}><SVGThunder color="#C4c4c4"/></ControlBtn>
            <ControlBtn isOn={mode==="rain"?1:0}><SVGRain color="#C4c4c4"/></ControlBtn>
            <ControlBtn isOn={mode==="clouds"?1:0}><SVGCloud color="#C4c4c4"/></ControlBtn>
            <ControlBtn isOn={mode==="web"?0:1}><SVGLight color="#C4c4c4"/></ControlBtn>
        </div>
    )
}

export default Control