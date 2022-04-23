import React,{useEffect,useState} from "react";
import Dashboard from "../components/Dashboard";
import BlurrWall from "../components/BlurWall";
import axios from "axios";

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
                <Dashboard data={data}/>
            </div>
        </BlurrWall>
        
        
    )
}

export default PrimaryScreen