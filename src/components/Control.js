import React,{useEffect,useState} from "react";
import ControlBtn from "./ControlBtn";
import SVGThunder from "./SVGThunder";
import SVGGlobe from "./SVGGlobe";
import SVGRain from "./SVGRain";
import SVGCloud from "./SVGCloud";
import SVGLight from "./SVGLight";
import axios from "axios";

const Control = (props)=>{
    const [mode,setMode] = useState(null)
    const [lights,setLights] = useState(null)

    useEffect(()=>{
        setMode(props.data.mode)
        setLights(props.data.lights)
    })   
    
    const handleRoute = (route)=>{
        var config = {
            method: 'get',
            url: 'https://umbo-server.herokuapp.com/'+ route,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });          
    }

    return (
        <div className="control-container">
            {<ControlBtn handleClick={()=>handleRoute("web")} isOn={mode==="web"?1:0}><SVGGlobe color="#C4c4c4"/></ControlBtn>}
            <ControlBtn handleClick={()=>handleRoute("thunder")} isOn={mode==="Thunderstorm"?1:0}><SVGThunder color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleRoute("rain")} isOn={mode==="Rain"?1:0}><SVGRain color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleRoute("clouds")} isOn={mode==="Clouds"?1:0}><SVGCloud color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleRoute("light")} isOn={mode==="web"?0:1}><SVGLight color="#C4c4c4"/></ControlBtn>
        </div>
    )
}

export default Control