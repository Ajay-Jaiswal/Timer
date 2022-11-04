import React,{useState} from 'react'
import "./App.css"

function Clock() {
    const[ctime, setCtime] = useState('')
    
    const Update = function(){
        setCtime(new Date().toLocaleTimeString());
    }
    setInterval(()=>{
        Update()
    },1000)

  return (
    <div className="clock">
        <h1>clock</h1>
        <h1>{ctime}</h1>
        
    </div>
  )
}

export default Clock