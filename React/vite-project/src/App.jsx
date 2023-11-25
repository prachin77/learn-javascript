import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function MyButton(){
  function Handle(){
    alert("button clicked");
  }
  return(
    <>
     <button onClick={Handle}>click here</button>
    </>
  );
}

export default function myApp(){
  return(
    <div>
      <MyButton/>
    </div>
  );
}
