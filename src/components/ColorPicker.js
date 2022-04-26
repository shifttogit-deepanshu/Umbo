import React,{useState,useEffect} from "react"
import {SketchPicker}  from 'react-color';

const ColorPicker = ()=>{

    const [color,setColor] = useState(null)

    const handleChangeComplete = (res)=>{
        console.log(res)
        setColor(res)
    }
    return (
        <SketchPicker
        color={ color }
        onChangeComplete={ ()=>handleChangeComplete() }
      />
    )
}

export default ColorPicker