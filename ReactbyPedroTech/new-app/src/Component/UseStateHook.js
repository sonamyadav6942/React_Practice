// To use the useState Hook, we first need to import it into our component.

/*
import { useState } from "react";
import "./App.css";

import { useState } from "react";

function UseState() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  return (
    <div className="app">
      {age}
      <button onClick={increaseAge} className="button">
        Increase Age
      </button>
    </div>
  );
}
export default UseState;
*/


/*

function UseState(){
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  return (
    <div>{age}
    <button onClick={increaseAge}>increase</button>
    </div>
  );

}

export default UseState;

*/

/*
function App() {
  const [textColor, setTextColor] = useState("black");
  return (
    <div className="text">
      <button
        onClick={() => {
          // setShowText(!showText);
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}>Hi My Name Is Sonam!</h1>
    </div>
  );
}

export default App;
*/


import React from 'react'
import { useState } from "react";

const UseStateHook = () => {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

    const decrease = () => {
        setCount(count - 1);
    }

    const setToZero = () => {
        setCount(0);

  }

  return (
    <div className="App">
      <button onClick={increase} >Increase</button>
      <button onClick={decrease} >Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
    </div>
  );
}

export default UseStateHook;

