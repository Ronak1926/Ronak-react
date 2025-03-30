import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-black bg-green-400 p-4 rounded-2xl mb-3">Tailwind css</h1>
      <Card btnText = "Click here" descprition="This is the description of this card it is amazing" userName='ronak'/>     
      <Card btnText = "Read about" userName='jonny'/>     
      <Card/>     
    </>
  )
}

export default App
