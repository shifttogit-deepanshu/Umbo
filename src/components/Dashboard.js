import React, { useState,useEffect } from "react"
import BlackContainer from "./BlackContainer"
import Moment from "react-moment"
import "moment-timezone"

const Dashboard = (props)=>{

    const [tempe,setTempe] = useState(null)
    const [location,setLocation] = useState(null)
    const [currentTime,setCurrentTime] = useState(null)
    const [timeZone,setTimeZone] = useState(null)
    const [description,setDescription] = useState(null)

    useEffect(()=>{
        console.log(props.data.location)
        setTempe(props.data.temp)
        setLocation(props.data.location)
        setCurrentTime(props.data.currentTime)  
        setTimeZone(props.data.timezone)
        setDescription(props.data.desc)
    })

    

    return (
        <BlackContainer >
            <div className="text-head">Weather</div>
            <div className="temp-container">
                {tempe && <div className="text-temp">{(tempe-273).toFixed(2)}°</div>}
                {location && <div className="text-loc">{location}</div>}
                
                <div class="time-container">{location && <div className="text-loc text-time-loc">Time in {location}</div>}
                {(currentTime && timeZone) && <Moment className="text-time" format="DD MMM   h:mm a">{currentTime - 19800*1000}</Moment>}
                </div>
                {description && <div className="text-loc desc">{description}</div>}
                <div className="sun"></div>
            </div>
        </BlackContainer>
    )
}

export default Dashboard