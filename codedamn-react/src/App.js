import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/props/Parent";
import Counter from "./components/Counter";
import Quote from "./components/Quote";
import ToDoApp from "./components/ToDoApp";
import ConditionalRendering from "./components/ConditionalRendering";

const age = true;

function App() {
  function clickButtonFn() {
    console.log("I was clicked");
  }

  return (
    <div className="App">
      <Header />
      <div id="content">
        <p>Here the content of the website will goes.....</p>

        <h2>
          Conditional Rendering:{" "}
          {age ? <span>Eligible</span> : <span>Not Eligible</span>}{" "}
        </h2>

        <h3>
          This is basically how we write JSX in React: <span>{21 + 23}</span>
        </h3>

        <h2>
          This is how we add event listener in our React code:{" "}
          <button onClick={clickButtonFn}>Submit</button>{" "}
        </h2>
      </div>

      <Footer />
      

      <h2>This Shows how Conditional Rendering works --<ConditionalRendering /></h2>
     
      <h2>
        This is how we use props in react -- <Parent />{" "}
      </h2>
     

      <Counter />
      <br />
      <Quote/>

      <br />
      <ToDoApp />

    </div>

    

  );
}

export default App;
