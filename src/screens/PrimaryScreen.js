import React from "react";
import Dashboard from "../components/Dashboard";
import BlurrWall from "../components/BlurWall";

const PrimaryScreen = ()=>{
    return  (
        <BlurrWall>
            <div class="primary-screen-container">
                <Dashboard />
            </div>
        </BlurrWall>
        
        
    )
}

export default PrimaryScreen