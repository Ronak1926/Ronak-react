import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    >   

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>

        <button onClick={() => setColor('red')}
        className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor : 'red'}}>red</button>

        <button onClick={() => setColor('black')}
         className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor : 'black'}}>black</button>

        <button onClick={() => setColor('blue')}
         className='outline-none px-4 rounded-full text-white shadow-2xl' style={{backgroundColor : 'blue'}}>blue</button>

        <button onClick={() => setColor('orange')}
         className='outline-none px-4 rounded-full text-black shadow-2xl' style={{backgroundColor : 'orange'}}>orange</button>

        <button onClick={() => setColor('yellow')}
         className='outline-none px-4 rounded-full text-black shadow-2xl' style={{backgroundColor : 'yellow'}}>yellow</button>

        <button onClick={() => setColor('gray')}
         className='outline-none px-4 rounded-full text-black shadow-2xl' style={{backgroundColor : 'gray'}}>gray</button>

        <button onClick={() => setColor('green')}
         className='outline-none px-4 rounded-full text-black shadow-2xl' style={{backgroundColor : 'green'}}>green</button>


      </div>
    </div>
    </div>
    </>
  )
}

export default App
