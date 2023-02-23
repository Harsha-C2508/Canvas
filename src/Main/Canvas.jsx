import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'
import Colorpicker from '../component/Colorpicker';
import NumberInput from '../component/NumberInput';
import Dropdown from '../component/Dropdown';
import Styles from '../Style/Canvas.module.css'
const Canvas = () => {
    const canvasRef = useRef(null);
    const [bg,setBg] = useState("#FFFFFF");
    const [num,setNum] = useState(0)
    const [palette, setPalette] = useState([]);
    // const [canvasWidth, setCanvasWidth] = useState(700);
    // const [canvasHeight, setCanvasHeight] = useState(500)

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = bg;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = 'bold 50px Arial';
        context.fillStyle = '#000000';
        context.textAlign = 'center';
        context.fillText(num>10?num:`0${num}`,canvas.width/2,canvas.height/2)
    },[bg,num])
  return (
    <div>
      <h1>Canvas</h1>
        <div id={Styles.topBox}>
            <Colorpicker setBg={setBg} bg={bg}/>
            <NumberInput setNum={setNum} num={num}/>
            <Dropdown setPalette={setPalette} setBg={setBg} palette={palette}/>
        </div>
        <canvas   
        ref={canvasRef}
        id={Styles.canvas}
        />
    </div>
  )
}

export default Canvas 