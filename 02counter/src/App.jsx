import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(0)  // counter is variable and setCounter is function which is responsible for updation of count er
  //let counter = 5 //not replacate in UI
  const addValue = ()=> {
    //console.log("value added",counter)
    counter = counter+1
    setCounter(counter)

    //or 
    //setCounter(counter +1 )

    
  }
  const removeValue = ()=> {
    setCounter(counter -1);
  }



  return (
    <>
     <h1>Jay Ganesh</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br/>
     <button onClick= {removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
