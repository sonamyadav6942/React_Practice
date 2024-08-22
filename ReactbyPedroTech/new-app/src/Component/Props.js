// Props example
function ParentComponent() {
  return <ChildComponent name="Sonam" age={23} />;
}

function ChildComponent(props){
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

const Props = () => {
  return (
    <div className="props">
      <ParentComponent />
    </div>
  );
};

export default Props;

// Conditional Rendering

// import "./App.css";

// function App() {
//   // const age = 11;
//   // return (
//   //   <div className="App">
//   //     {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
//   //   </div>
//   // );

//   const number = 24;
//   const isGreen = false;

//   return (
//     <div className="text">
//       {number % 2 === 0 ? <h1>Even Number</h1> : <h1>Odd Number</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>This has Color</h1>
//     </div>
//   );
// }
// export default App;
