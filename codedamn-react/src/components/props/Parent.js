// Passing props to a component
// In parent component you pass props to a child component like this: 

import React from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  return (
    <div style={{ display: 'inline-block'}}>
      <ChildComponent name="Sonam" age={24} email = "sonam@21.com" /> 
    </div>
  );
}

export default ParentComponent;

// Here "name" "age" and "email" are props being passed to "ChildCompoent".