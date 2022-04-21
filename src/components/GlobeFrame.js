import React from "react"
import Iframe from 'react-iframe'
import PrimaryScreen from "../screens/PrimaryScreen"

const GlobeFrame = ()=>{
    return (
        <div>
        <PrimaryScreen />      
        <Iframe url="https://radiant-peak-68160.herokuapp.com/"
        id="myId"
        className="frame"
        />
        </div>
    )
}

export default GlobeFrame
