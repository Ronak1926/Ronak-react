import React, { useContext } from "react";
import { userContext } from "../context.js";
import { DisplayEmail } from "./child-2.jsx";

export function DisplayId() {
  const user = useContext(userContext);

  return (
    <div>
      <p>ID: {user.id}</p>
      <DisplayEmail />
    </div>
  );
}
