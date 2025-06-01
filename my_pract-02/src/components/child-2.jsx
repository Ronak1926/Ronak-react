import React, { useContext } from "react";
import { userContext } from "../context.js";
import { UserDisplayName } from "./child-3.jsx";

export function DisplayEmail() {
  const user = useContext(userContext);

  return (
    <div>
      <p>Email: {user.email}</p>
      <UserDisplayName />
    </div>
  );
}
