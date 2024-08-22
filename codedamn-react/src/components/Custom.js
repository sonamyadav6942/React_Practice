import React from "react";

function Custom(props) {
  return (
    <div>
      <h1>Hello, {props.name} {props.age} {props.greet}</h1>
    </div>
  );
}

export default Custom;
