import { useState } from 'react'
import { userContext } from './context.js'
import './App.css'
import { DisplayId } from './components/child-1.jsx'

function App() {
  const [user, setUser] = useState({
    id : 1,
    name : "ronak",
    email : "ronak@gmail.com",
    displayName : "ronakpatel"
  })

  return (
    <>
      <userContext.Provider value={{...user,setUser}}>
          <DisplayId/>
      </userContext.Provider>
    </>
  )
}

export default App
