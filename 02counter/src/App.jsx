import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] = useState(15)

  //let counter = 15

  const addvalue=()=>{

    
    if(counter<=20)
    {
      console.log("clicked",counter);
      setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    ///interview

    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    }
    else{
      console.log("overbound");
    }
    
  }
  const removevalue=()=>{
    if(counter>=0)
    {
    setCounter(counter-1)
    console.log("clicked",counter);
    }
    else{
      console.log("lowerbound");
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button
       onClick={addvalue}>Add value</button>
      <br></br>
      <br></br>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
