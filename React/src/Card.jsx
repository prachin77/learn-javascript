import { useState } from "react";


function Card() {
    const [color, setColor] = useState("white");
    const [textColor,setTextColor] = useState("black") 
    const [imgBgColor,setImgBgColor] = useState("white")

    const handleWhiteColor = () => {
      setColor("white");
      setTextColor("black")
      setImgBgColor("white")
    };
  
    const handleBlackColor = () => {
      setColor("black");
      setTextColor("white")
      setImgBgColor("white")
    };
  
    return (
      <div className="card" style={{ backgroundColor: color }}>
        <button onClick={handleWhiteColor}>white</button>
        <button onClick={handleBlackColor}>black</button>
        <p style={{color:textColor}}>toggle color here</p>
        <h2 className="cardtitle" style={{color:textColor}}>Science Exhibition</h2>
        <img
          style={{backgroundColor:imgBgColor}}
          src="https://cdn-icons-png.flaticon.com/128/2933/2933803.png"
          className="cardimg"
          alt="Science Exhibition"
        />
        <p style={{ fontFamily: "sans-serif" ,color:textColor}}>
          Welcome to IIT Bombay Science Fest
        </p>
      </div>
    );
  }
  
  export default Card;