import React,{useEffect,useState,Image} from "react";
import Dashboard from "../components/Dashboard";
import BlurrWall from "../components/BlurWall";
import axios from "axios";
import Control from "../components/Control";
import Connection from "../components/Connection";
import globe from "../assets/Frame 1.png";

const PrimaryScreen = (props)=>{
    const [data,setData] = useState(props.DATA.temp)

    useEffect(()=>{
      const interval = setInterval(()=>{
        var config = {
          method: 'get',
          url: 'https://umbo-server.herokuapp.com/dbdata',
          headers: { }
        };
        
        axios(config)
        .then(function (response) {
          console.log(response.data);
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      },3000)

      return ()=>interval()       
          
    },[])

    return  (
        <BlurrWall>
            <div className="primary-screen-container">
                <div class="left-container">
                  <Dashboard data={data}/>
                  <Control data={data}/>
                </div>
                <div class="right-container">
                  <Connection />
                </div>
            </div>
            <img src={globe} width="100%" className="globe"/>
        </BlurrWall>
        
        
    )
}

export default PrimaryScreen