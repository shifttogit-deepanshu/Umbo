import React,{useEffect,useState} from "react";
import ControlBtn from "./ControlBtn";
import SVGThunder from "./SVGThunder";
import SVGGlobe from "./SVGGlobe";
import SVGRain from "./SVGRain";
import SVGCloud from "./SVGCloud";
import SVGLight from "./SVGLight";
import axios from "axios";
import ColorPicker from "./ColorPicker";

const Control = (props)=>{
    const [mode,setMode] = useState(null)
    // const [lights,setLights] = useState(null)
    const [isLight,setIsLight] = useState(false
      )
    const [lights_r,setLights_r] = useState(0)
    const [lights_g,setLights_g] = useState(0)
    const [lights_b,setLights_b] = useState(0)

    useEffect(()=>{
        setMode(props.data.mode)
        setLights_r(props.data.lights_r)
        setLights_g(props.data.lights_g)
        setLights_b(props.data.lights_b)
       
    },[props.data])   
    
    const handleRoute = (route)=>{
        var config = {
            method: 'get',
            url: 'http://umbo-server.herokuapp.com/'+ route,
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
    
    const handleLight=()=>{
      setIsLight(!isLight)   
      // console.log("////ilight///////////////////",isLight)   
    }

    return (
        <div className="control-container">
            {<ControlBtn handleClick={()=>handleRoute("web")} isOn={mode==="web"?1:0}><SVGGlobe color="#C4c4c4"/></ControlBtn>}
            <ControlBtn handleClick={()=>handleRoute("thunder")} isOn={mode==="Thunderstorm"?1:0}><SVGThunder color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleRoute("rain")} isOn={mode==="Rain"?1:0}><SVGRain color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleRoute("clouds")} isOn={mode==="Clouds"?1:0}><SVGCloud color="#C4c4c4"/></ControlBtn>
            <ControlBtn handleClick={()=>handleLight()} isOn={isLight}><SVGLight color="#C4c4c4"/></ControlBtn>
            <div>{isLight && <ColorPicker setColors={[lights_r,lights_g,lights_b]}/>}</div>
        </div>
    )
}

export default Control