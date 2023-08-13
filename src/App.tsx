import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Counter example</h1>
      <div className="card">
        <h1>count is {count}</h1>
        <button
          className="btn-wrapper"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <div></div>
        <button
          disabled={count <= 0}
          className="btn-wrapper"
          onClick={() => (count > 0 ? setCount((count) => count - 1) : null)}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
