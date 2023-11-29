import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


export default function App(){
  // let back="https://cdn-icons-png.flaticon.com/128/3916/3916837.png"
  let [color,setColor] = useState('bisque')
  let changeColor=(value)=>{
    setColor(value)
  }

  return(
    <div className="screen" style={{backgroundColor:color}}>
      <div className='bstrip'>
        <button className='butts'  
          style={{backgroundColor:"bisque"}} 
          onClick={()=>changeColor("bisque")}>
          default
          <img src="https://cdn-icons-png.flaticon.com/128/3916/3916837.png"
            style={{height:"20px"}}
          ></img>
        </button>
        
        <button className='butts'  style={{backgroundColor:"white"}} onClick={()=>changeColor("white")}>white</button>
        <button className='butts'  style={{backgroundColor:"black",color:"white"}} onClick={()=>changeColor("black")}>black</button>
        <button className='butts'  style={{backgroundColor:"green"}} onClick={()=>changeColor("green")}>green</button>
      </div>
    </div>
  );
}