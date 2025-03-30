import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
        
    }
})

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions // export every reducers from the todoSlice

export default todoSlice.reducer // this is to aware the store that this exist

