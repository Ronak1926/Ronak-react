import { useState } from "react";

export function useCounter(initialValue = 0){
    const [count , setCount] = useState(initialValue);

    const Increment = ()=> setCount(count => count + 1)
    const Decrement = ()=> setCount(count => count - 1)
    const reset = ()=> setCount(initialValue)

    return {count,Increment,Decrement,reset}
}