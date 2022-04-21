import React from "react"
import Iframe from 'react-iframe'
import PrimaryScreen from "../screens/PrimaryScreen"

const GlobeFrame = (props)=>{
    return (
        <div>
        <PrimaryScreen DATA={props.DATA}/>      
        <Iframe url="https://radiant-peak-68160.herokuapp.com/"
        id="myId"
        className="frame"
        />
        </div>
    )
}

export default GlobeFrame
