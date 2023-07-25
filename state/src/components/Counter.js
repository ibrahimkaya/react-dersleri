import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={decrease}>Decrease </button>
      <button onClick={() => setCount(count + 1)}>Increase </button>
    </div>
  );
}

export default Counter;
