import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      {count >= 20 ? (
        <h2>Cannot exceed 20</h2>
      ) : (
        <h2>Counter Value: {count}</h2>
      )}

      <button
        onClick={(prevCount) => {
          count < 20 ? setCount(count + 1) : setCount(20);
        }}
      >
        Increment
      </button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
