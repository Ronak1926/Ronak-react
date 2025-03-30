import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*_-+=[]{}~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) 

    const copyPasswordToClipBoard = useCallback(() => {
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,9) // it will select the first 9 char from the password
      window.navigator.clipboard.writeText(password)
    }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const generatePass = () => {
    passwordGenerator()
  }
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700 '>
     <h1 className='text-center text-white my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type="text"
        value={password} className='outline-none w-full px-3 py-1 bg-white rounded-lg text-black'
        placeholder='Password' readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white mx-2 p-2 shrink-0 rounded-lg' onClick={copyPasswordToClipBoard}>copy</button>


      </div>
      <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
          
          <input
          type="range"
          min={6} 
          max={100} 
          value={length} className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
          
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
            // callback ma prev value che tena thi revrse kari do means true or false change thata rahe che

          }}          
          />
          <label htmlFor="numberInput">Numbers </label>

          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {characterAllowed}
          id='characterInput'
          onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }}  
          />
          <label htmlFor="characterInput">Characters </label>
          </div>
        </div>

      </div>
      <div className='flex items-center'>
            <button className='bg-blue-700 text-white mx-auto m-1.5 p-2 rounded-lg' onClick={generatePass}>Generate</button>
        </div>
     </div>
   </>

  )
}

export default App
