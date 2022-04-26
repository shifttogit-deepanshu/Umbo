import React from "react";
import {BallTriangle} from "react-loader-spinner";

const LoadScreen = ()=>{
    return (
        <div className="loadscreen-container">
            <div className="umbo-text">Umbo</div>
            <div className="loader"><BallTriangle
                heigth="40"
                width="40"
                color="white"
                ariaLabel="loading-indicator"               
                /></div>
        </div>
    )
}

export default LoadScreen