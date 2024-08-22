// Receiving props in a component
// In the ChildComponent, you receieve and use the props which passed from ParentComponent

import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <p>
        Name: {props.name} Age: {props.age} Email: {props.email}
      </p>
    </div>
  );
}

export default ChildComponent;
