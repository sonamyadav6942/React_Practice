// import React from "react";

// const DisplayDate = ({ }) => {
//   const calculateDisplayDate = (
//   ) => {
//     const date = new Date();
//     const givenDate = new Date(date);
//     const startOfYear = new Date(givenDate.getFullYear(), 0, 1);
//     const timeDifference = givenDate - startOfYear;
//     const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//     return daysDifference;
//   };

//   return (
//     <div>
//       <h3>
//         Displays the number of days since the beginning of the year that date is
//         in.
//       </h3>
//       <p>Days since the beginning of the year: {calculateDisplayDate()}</p>
//     </div>
//   );
// };

// export default DisplayDate;

// import React from 'react';

// const DisplayName = ({ names }) => {

//   return (
//     <ul>
//       {names
//         .filter((item) => item.name.startsWith('A'))
//         .map((item, index) => (
//           <li key={index}>{item.name}</li>
//         ))}
//     </ul>
//   );
// };

// const App = () => {
//     const data = [
//       { name: 'Sonam' },
//       { name: 'Beauty' },
//       { name: 'Anamika' },
//       { name: 'Ankit' },
//       { name: 'Abhi' },
//       { name: 'Priya' },
//       { name: 'Stuti' }
//     ];

//     return <DisplayName names={data} />;
//   };

//   export default App;

//export default DisplayDate;

// import React, { useState } from "react";

// const UpperCaseLetters = () => {
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const upperCaseLetterCount = (str) => {
//     return str.replace(/[^A-Z]/g, "").length;
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleChange}
//         rows="5"
//         cols="45"
//         placeholder="Type character..."
//       />
//       <p>UpperCase Letters Count: {upperCaseLetterCount(text)}</p>
//     </div>
//   );
// };

// export default UpperCaseLetters;

import React from "react";

const ShowEvenOdd = ({ num }) => {
  const isEven = num % 2 === 0;
  console.log()

  return (
    <div>
      <p>
        The given number {num} is {isEven ? "even" : "odd"}.
      </p>
    </div>
  );
};

const App = () => {
       
    const num = 3;
        return <ShowEvenOdd num={num} />;
      };
    
      export default App;

//export default ShowEvenOdd;
