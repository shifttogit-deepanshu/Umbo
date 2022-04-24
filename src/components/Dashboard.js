import React, { useState,useEffect } from "react"
import BlackContainer from "./BlackContainer"
import Moment from "react-moment"
import "moment-timezone"
import axios from "axios"
import logo from "../assets/clouds.png"
import snow from "../assets/snow.png"
import rain from "../assets/rain.png"
import thunder from "../assets/thunder.png"

const Dashboard = (props)=>{

    const [tempe,setTempe] = useState(null)
    const [currentTime,setCurrentTime] = useState(null)
    const [timeZone,setTimeZone] = useState(null)
    const [description,setDescription] = useState(null)
    const [locName,setLocName] = useState(null)
    const [state,setState] = useState(null)
    const [country,setCountry] = useState(null)
    const [lat,setLat] = useState(null)
    const [lon,setLon] = useState(null)
    const [main,setMain] = useState(null)

    useEffect(()=>{
        setTempe(props.data.temp)
        // setLocation(props.data.location)
        setCurrentTime(props.data.currentTime)  
        setTimeZone(props.data.timezone)
        setDescription(props.data.desc)
        setLat(props.data.lat)
        setLon(props.data.lon)
        setMain(props.data.main)

        if (lat & lon)
        {
            console.log("lat..........",lat)
            var config = {
            method: 'get',
            url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${props.data.lat}&lon=${props.data.lon}&limit=1&appid=b38e7738b387d4dc0bbf9fe1dfe668cb`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const res = response.data[0]
            setLocName(res.name)
            setCountry(res.country)
            setState(res.state)
          })
          .catch(function (error) {
            console.log(error);
          });}
        
    })

    return (
        <BlackContainer >
            <div className="text-head">Weather</div>
            <div className="temp-container">
                {tempe && <div className="text-temp">{(tempe-273).toFixed(2)}°</div>}
                {(locName && state && country) && <div className="text-loc text-location">{locName}, {state}<br/> {country}</div>}
                
                <div class="time-container">{locName && <div className="text-loc text-time-loc">Time in {locName}</div>}
                {(currentTime && timeZone) && <Moment className="text-time" format="DD MMM   h:mm a">{currentTime - 19800*1000}</Moment>}
                </div>
                {description && <div className="text-loc desc">{description}</div>}
                <div className="weth-logo">
                    {main == "Clear" && <div className="sun" ></div>}
                    {main == "Thunder" && <div className="logo"><img src={thunder} className="thunder" width="180px"/></div>}
                    {main == "Clouds" && <div className="sun" ><img src={logo} className="sun-clouds" width="100%"/></div>}
                    {main == "Snow" && <img src={snow} width="200"/>}
                    {main == "Rain" && <img src={rain} className="rain-logo" width="200"/>} 
                </div>
            </div>
        </BlackContainer>
    )
}

export default Dashboard