import React,{useState,useEffect} from "react"
import { HuePicker }   from 'react-color'
import axios from "axios"

const ColorPicker = (props)=>{

    const [color,setColor] = useState({rgb:{r:0,g:0,b:0}})

    const handleChangeComplete = (color,event)=>{
        console.log(color)
        var config = {
            method: 'get',
            url: `https://umbo-server.herokuapp.com/lights?r=${color.rgb.r}&g=${color.rgb.g}&b=${color.rgb.b}`,
            headers: { }
          };          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setColor(color)
            props.colorPicked(color.rgb.r,color.rgb.g,color.rgb.b)
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
    return (
        <div className="color-picker">
            <HuePicker  
            color={ color }
            onChangeComplete={ handleChangeComplete }
      />
        </div>
        
    )
}

export default ColorPicker