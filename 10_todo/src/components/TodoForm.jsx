import React, {useState} from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("") // for individual todo msg
    const {addTodo} = useTodo() // destructering and getting the addTodo function and bas value levani and pachi tene pass karvani 

    const add = (e) => {
      e.preventDefault()

      if (!todo) return // if msg is empty then no todo will created

      addTodo({ id: Date.now() ,todo:todo, completed: false})
      setTodo("") // this is for the form , after writing in the input field and adding some todo then the form field should be empty
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;