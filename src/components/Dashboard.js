import React, { useEffect } from "react"
import BlackContainer from "./BlackContainer"

const Dashboard = ()=>{

    useEffect(()=>{

    },[])

    return (
        <BlackContainer >
            <div className="text-head">Weather</div>
            <div className="temp-container">
                <div className="text-temp">25°</div>
            </div>
        </BlackContainer>
    )
}

export default Dashboard