// Importing React and useState

import React, { useState } from "react";

const Practice = () => {
  const [marks, setMarks] = useState(71);
  // Here useState is used to create state varaible called marks and a function setMarks to update it.

  /* { useState } is a React hook that lets you add state to your functional components.
      State is a way to store data that can change over time,
      and when it changes, the component re-renders to reflect the updated data. */

  return (
    <div className="marks">
      <h2>Initially marks is {marks}</h2>
      <button
        onClick={() => {
          setMarks(91);
        }}
      >
        Update the marks
      </button>
    </div>
  );
};

export default Practice;

