import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyName } from './components/myname.jsx'
import { CounterComp } from './components/customHook.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');

  return (
    <>
      <MyName name="ronak sojitra" />
      <div>The count is {count}</div>
      <button onClick={()=> setCount((count)=>count+1)}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} />
      </form>

      <div>The name in the form is : {name}</div>
      <CounterComp/>
    </>
  )
}

export default App
