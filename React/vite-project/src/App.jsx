import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {gsap} from "gsap";

function Googlebar(){
    let searchtext=()=>{
        
    }
    return(
        <div >
            <input className='inpbar' placeholder='search' onClick={searchtext}/>
        </div>
    );
}

function Logos(){
    return(
        <div >
            <h1>Google</h1>
            <Googlebar/>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{display:"inline-block",margin:"20px"}} className='divbg'>
                    <a href='https://www.tesla.com/' target='_blank' className='imgLinkCircle' 
                    style={{display:"inline-block"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1724/1724639.png"
                            style={{height:"40px"}}
                        />
                    </a>
                    <p style={{marginLeft:"center"}}>tesla</p>
                </div>
                <div style={{display:"inline-block",margin:"20px"}}  className='divbg'>
                    <a href='https://github.com/' target='_blank' className='imgLinkCircle' 
                    style={{display:"inline-block"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/6424/6424084.png"
                            style={{height:"40px"}}
                        />
                    </a>
                    <p style={{marginLeft:"center"}}>github</p>
                </div>
                <div style={{display:"inline-block",margin:"20px"}}  className='divbg' >
                    <a href='https://twitter.com/' target='_blank' className='imgLinkCircle' 
                    style={{display:"inline-block"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                            style={{height:"40px"}}
                        />
                    </a>
                    <p style={{margin:"center"}}>twitter</p>
                </div>
                <div style={{display:"inline-block",margin:"20px"}} className='divbg'>
                    <a href='https://www.uber.com/in/en/' target='_blank' className='imgLinkCircle' 
                    style={{display:"inline-block"}}>
                        <img src="https://cdn-icons-png.flaticon.com/128/732/732135.png"
                            style={{height:"40px"}}
                        />
                    </a>
                    <p style={{margin:"center"}}>uber</p>
                </div> 
            </div>
        </div>
    );
}

export default function App(){
    return(
        <Logos/>
    );
}