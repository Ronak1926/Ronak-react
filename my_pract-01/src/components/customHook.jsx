import React from "react";
import { useState } from "react";
import { useCounter } from "../utils/hooks/useCounter";

export function CounterComp(){
    const {count , Increment, Decrement, reset} = useCounter(10);

    return (
    <div>
    <h2>The count is : {count}</h2>
    <button onClick={Increment}>increment</button>
    <button onClick={Decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </div>
    );
}