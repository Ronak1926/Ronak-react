import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'

/*  here todoReducer is nothing but 
export default todoSlice.reducer from todoSlice.js */
export const store = configureStore({
    reducer : todoReducer
})