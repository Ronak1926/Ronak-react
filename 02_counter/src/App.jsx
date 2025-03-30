import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter,setCounter] = useState(15);
 //  let counter = 5;
 
  const addValue = ()=>{
    setCounter(counter+1);
    console.log('the value of the counter is the : ',counter)
  }
  const removeValue = ()=> {
    if(counter > 0){
      setCounter(++counter);
    }else{
      alert('value cannot be negative')
    }
    console.log('the value of the counter is the : ',counter)
  }

  return (
    <>
     <h1>coke and react</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
