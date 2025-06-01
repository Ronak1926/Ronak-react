import React from "react";
import { createContext } from "react";

export const userContext = createContext({
    id : 0,
    name : "",
    email : "",
    displayName : "",
    setUser : () => {}
})