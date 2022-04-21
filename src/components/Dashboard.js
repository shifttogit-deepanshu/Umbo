import React, { useEffect } from "react"
import BlackContainer from "./BlackContainer"

const Dashboard = (props)=>{


    return (
        <BlackContainer >
            <div className="text-head">Weather</div>
            <div className="temp-container">
                <div className="text-temp">{(Number(props.data.temp)-273).toFixed(1) }°</div>
            </div>
        </BlackContainer>
    )
}

export default Dashboard