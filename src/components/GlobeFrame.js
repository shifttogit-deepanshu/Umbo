import React,{useState} from "react"
import Iframe from 'react-iframe'
import PrimaryScreen from "../screens/PrimaryScreen"
import globe from "../assets/Frame 1.png"


const GlobeFrame = (props)=>{
    const [earth,setEarth] = useState(true)
    
    return (
        <div>
        <PrimaryScreen DATA={props.DATA} shouldDisplay={earth}/> 
        <Iframe url="https://umbo-server.herokuapp.com/"
        id="myId"
        className="frame"
        />
        <div onClick={()=>setEarth(!earth)}><img src={globe} className="globe" alt="globe"/></div>     
        </div>
    )
}

export default GlobeFrame
