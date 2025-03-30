import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  //A function that takes the entire Redux state as its argument and returns the part of the state you want to use in the component.
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null) // Tracks the ID of the todo being edited
  const [editText, setEditText] = useState('') // Tracks the updated text for the todo

  const handleUpdate = (todo) => {
    setEditId(todo.id) // Set the ID of the todo being edited
    setEditText(todo.text) // Prefill the input with the current text of the todo
  }

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText })) // Dispatch the updateTodo action with the updated text
    setEditId(null) // Exit edit mode
    setEditText('') // Clear the input field
  }

  return (
    <>
      <div className='text-white text-2xl p-5'>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              // Show input field if the todo is in edit mode
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-white px-2 py-1 rounded w-full"
              />
            ) : (
              // Show the todo text if not in edit mode
              <div className="text-white">{todo.text}</div>
            )}

            <button
              onClick={() =>
                editId === todo.id ? handleSave(todo.id) : handleUpdate(todo)
              }
              className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2 ml-2"
            >
              {editId === todo.id ? 'Save' : 'Update'}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos