// import logo from './logo.svg'; Delete this as well
// import './App.css'; Delete App.css 
import React,{useEffect,useState} from "react"
import GlobeFrame from "./components/GlobeFrame"
import LoadScreen from "./screens/LoadScreen"
import axios from "axios";
import "./styles/styles.scss"

function App() {

  const [loading,setLoading] = useState(true)
  const [weatherData,setWeatherData] = useState()

  useEffect(()=>{
    var config = {
        method: 'get',
        url: 'https://umbo-server.herokuapp.com/dbdata',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
        setWeatherData(response.data)
        setLoading(false)       
      })
      .catch(function (error) {
        console.log(error);
        // setLoading(false)
      });
      
    },[])


  return (
    <div className="App">
      {/* {loading?<LoadScreen/>:<GlobeFrame DATA={weatherData}/>} */}
      <LoadScreen />
    </div>
  );
}

export default App;
