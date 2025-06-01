import { useContext } from "react";
import { userContext } from "../context.js";

export function UserDisplayName() {
  const { displayName, setUser } = useContext(userContext);

  return (
    <div>
      <p>Display Name: {displayName}</p>
      <button onClick={() =>
        setUser((prev) => ({
          ...prev,
          email: "ronakpatel@gmail.com"
        }))
      }>
        Change Email
      </button>
    </div>
  );
}
