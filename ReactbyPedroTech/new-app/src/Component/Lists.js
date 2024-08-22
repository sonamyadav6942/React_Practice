import "../App.js";
import { User } from "./User.js";

function Lists() {
      const names = ["Pedr", "Jake" , "Jessica"];
      return(
          <div className="list">
              {names.map((name, key) => {
                  return <h1 key = {key}> {name}</h1>
              })}
          </div>
      )
  }



//   const users = [
//     { name: "Pedr", age: 21 },
//     { name: "Jake", age: 22 },
//     { name: "Jessica", age: 24 },
//   ];
//   return (
//     <div className="list">
//       {users.map((user, key) => {
//         return <User name={user.name} age={user.age} />;
//       })}
//     </div>
//   );
// }

export default Lists;
