import React from "react";

const Web = () => {
    const num1 = 3;
    const num2 = 2;
    const sum = num1 + num2;
    return (
      <div className="new-main">
        <h4>Printing sum of two numbers:</h4>
        Sum of {num1} and {num2} is : {sum}{" "}
      </div>
    );

//   const myName = <h1>Sonam</h1>;
//   const myAge = <h2>23</h2>;
//   const myGmail = <h3>sona@gmail.com</h3>;
//   const user = (
//     <div>
//       {myName}
//       {myAge}
//       {myGmail}
//     </div>
//   );
//   return (
//     <div>
//       {user}
//       {user}
//       {user}
//     </div>
//   );
};

export default Web;
