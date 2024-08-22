// Increases and Decreases the Counter

import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {   // using useEffecr hooks
    console.log("Hie Iam useEffect", count)
  }, [count])

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Shwoing useState function --- Counter: {count}</h1>
      <div className="counter-button">
        <button onClick={increase}>Increase the count</button>
        <button onClick={decrease}>Decrease the count</button>
      </div>
    </div>
  );
}

export default Counter;
