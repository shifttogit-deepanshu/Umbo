import React,{useState,useEffect} from "react"
import { HuePicker }   from 'react-color'
import axios from "axios"

const ColorPicker = (props)=>{

    const [color,setColor] = useState({r:props.setColors[0],g:props.setColors[1],b:props.setColors[2]})

    useEffect(()=>{
      setColor({r:props.setColors[0],g:props.setColors[1],b:props.setColors[2]})
    })
    
    const handleChangeComplete = (color,event)=>{
        console.log(color.r)
        var config = {
            method: 'get',
            url: `http://umbo-server.herokuapp.com/lights?r=${color.rgb.r}&g=${color.rgb.g}&b=${color.rgb.b}`,
            headers: { }
          };          
          axios(config)
          .then(function (response) {
            console.log("lights set.........")
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