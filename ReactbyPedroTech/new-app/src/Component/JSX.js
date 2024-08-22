import React from "react";

const JSX = () => {
    const name = "Sonam";
    const age = "23";
    const subject = "PCM";
    const rollNo = 16500219019;
    const email = "sona@gmail.com"
  
    return (
      <span className="jsx">
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{subject}</h4>
        <h4>{rollNo}</h4>
        <h4>{email}</h4>
      </span>
    );
  };

export default JSX;
