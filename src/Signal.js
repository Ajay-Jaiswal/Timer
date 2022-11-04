import { useEffect, useState } from "react";
import "./App.css";
export default function Signal() {
 const[color1, setColor1] = useState('green')
 const[color2, setColor2] = useState('red')
 const[color3, setColor3] = useState('yellow')
 

  useEffect(()=>{
    setInterval(()=>{
      if(color1 === "green"){
        setColor1("red")
        setColor2("yellow")
        setColor3("green")

      }else if(color1=== "red"){
        setColor1("yellow")
        setColor2("green")
        setColor3("red")
      }else{
        setColor1("green")
        setColor2("red")
        setColor3("yellow")

      }
    },2000)
  })
 

  return (
    <div className="App">
      <strong>Hii... Traffic Light is Working Properly</strong>
      <div className="outer-box">
        <div className="blackbox">
          <div className="row">
            <div style={{ "background-color": color1 }} className="circle"></div>
          </div>
          <div className="row">
            <div style={{ "background-color": color2 }} className="circle"></div>
          </div>
          <div className="row">
            <div style={{ "background-color": color3 }} className="circle"></div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
