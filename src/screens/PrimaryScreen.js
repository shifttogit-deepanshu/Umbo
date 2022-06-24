import React,{useEffect,useState} from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import Control from "../components/Control";
import Connection from "../components/Connection";

const PrimaryScreen = (props)=>{
    const [data,setData] = useState(props.DATA.temp)

    useEffect(()=>{
      const intervalId = setInterval(()=>{
        var config = {
          method: 'get',
          url: 'http://umbo-server.herokuapp.com/dbdata',
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

      return ()=>clearInterval(intervalId)       
          
    },[])

    return  (
      <div className={props.shouldDisplay?"main":"main--hidden"}>
            <div className="primary-screen-container">
                <div className="left-container">
                  <Dashboard data={data}/>
                  <Control data={data}/>
                </div>
                <div className="right-container">
                  <Connection />
                </div>         
            </div>       
        </div>         
    )
}

export default PrimaryScreen