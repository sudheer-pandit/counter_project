import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 43;
 let [counter,setCounter]= useState(15);

 const addValue = ()=>{
// console.log("vaule" , (Math.floor(Math.random()*10+1)))

console.log("clicked", counter);
if(counter<20){
  counter=counter+1;
  setCounter(counter)
}

}

const removeValue =()=>{
  if(counter>0){ 
    setCounter(counter-1)
  }

}


 

  return (
    <>
    <h2 className='chai'>from chai aur code</h2>
      <h1 className='code'>counter Value : {counter}</h1>
      <button onClick={addValue} className='value' >Add value :{counter}</button>
      <br />
      <button onClick={removeValue} className='remove'>Remove value :{counter}</button>
      <p className='footer'>footer:{counter}</p>
    </>
  )
  }

export default App
