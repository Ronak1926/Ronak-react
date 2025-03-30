import React from 'react'

function Card({btnText='Read more', descprition, userName = 'john doe'}) {
  return (
    <div className="max-w-xs rounded-2xl shadow-md bg-black text-gray-100 mb-3">
        <img
          src="https://images.unsplash.com/photo-1731964877414-217cdc9b5b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
          alt=""    
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
            <p className="text-gray-400">
              {descprition || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta amet corporis accusantium aliquid consectetur eaque!"}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card


// if you write props in the function argument then all the props will be go into the props obj and you will access it by doing props.username if username is given or you can use simple syntax which is {username} and write directly it