import { useEffect,useCallback,useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  let [num,setNum] = useState(false)
  let [charPass,setCharPass] = useState(false)
  let [pass,setPass] = useState()

  let passCopy = useRef(null)

  let passGen = useCallback(()=>{
    let pwd=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num){
      str+="0123456789"
    }
    if(charPass){
      str+="!@#$%&*()_-"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length);
      pwd+=str.charAt(char)
    }

    setPass(pwd)
  },[length,num,charPass,setPass])
 
  let CopyPass=useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(()=>{
    passGen()
  },[length,num,charPass,passGen])
  return (
    <>
      {/* <h1 className='h1'>password generator</h1> */}
      <div className='fullbox'>
        password generator
        <div className='inputbox'>
          <input class="takeinput" value={pass} placeholder='password' readOnly
            ref={passCopy}
          />
          <button
            onClick={CopyPass}
          >copy</button>
        </div>
        <input type='range' min={8} max={26} value={length}
          onChange={(e)=>{
            setLength(e.target.value)
          }}  
          style={{cursor:"pointer",marginRight:"10px"}}
        />
        <label style={{cursor:"pointer",marginRight:"10px"}}>length:{length}</label>
        <input
          type='checkbox'
          checked={num}
          onChange={()=>{
            setNum((prev)=>!prev);
          }}
          style={{cursor:"pointer",marginRight:"5px"}}
        />
        <label style={{cursor:"pointer",marginRight:"10px"}}>Numbers</label>
        <input
          type='checkbox'
          checked={charPass}
          onChange={()=>{
            setCharPass((prev)=>!prev);
          }}
          style={{cursor:"pointer",marginRight:"5px"}}
        />
        <label style={{cursor:"pointer",marginRight:"10px"}}>Characters</label>
      </div>
    </>
  )
}

export default App
