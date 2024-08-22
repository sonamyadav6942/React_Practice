// import React, { useState } from "react";
// import Axios from "axios";

// function API() {
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     // fetch("https://catfact.ninja/fact")
//     //   .then((res) => res.json())
//     //   .then((data) => {
//     //     setCatFact(data.fact);
//     //   })

//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     })

//       .catch((error) => console.error("Error fetching data:", error));
//   };
//   return (
//     <div className="api">
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }

// export default API;

// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// function API() {
//   const [catFact, setCatFact] = useState("");

//   useEffect(() => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   }, []);

//   return (
//     <div className="api">
//       <button>Generate Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }

// export default API;

// // //  Fetching Data From API Using Axios Function // // //

import React, { useState, useEffect } from "react";
import Axios from "axios";


function API() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="api">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default API;
