/* React allows us to conditionally render components which means
that the developer can decide which component to render on the screen
on on the basis of some predefined conditions. This is known as conditional rendering.
*/

import React from "react";

const ConditionalRendering = () => {

//   let age = 21;
//   return <h1>{age >= 18 ? "Eligible" : "Not eligible"}</h1>;


// Checking if a number is even ir odd.
// let num = 44;
// return <h1>{num % 2 === 0? <h3>Given number is even</h3> : <h3>Given number is odd</h3>}</h1>



// const Counter = 5;
// return (
//     <h1>{Counter === 5 ? "Hello World!" : "Something else"}</h1> 
// )


const isGreen = true;
return(
    <div className="display">
        <h2 style={{color: isGreen? "Green" : "Red"}}>This has Color</h2>
    </div>
)


};

export default ConditionalRendering;
