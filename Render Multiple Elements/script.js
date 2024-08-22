import { createRoot } from "react-dom/client";

import "./style.css";

// const h1 = <h1>Hello World</h1>;

// Giving unique key to each Card using function

function Card(cardDetails) {
  const { key, title, image, brand, price } = cardDetails;
  console.log(cardDetails);
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

/*
const container = [
  Card(1),
  Card(2),
  Card(3),
  Card(4),
  Card(5),
  Card(6),
  Card(7),
  Card(8),
];

*/

const root = createRoot(document.getElementById("root"));

console.log("Hello world!!!");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card( {
            key: product.id,
            title: product.title,
            image: product.thumbnail,
            brand: product.brand,
            price: product.price
         });
        })}
      </div>
    );
  });


// root.render({
//   $$typeof: Symbol.for("react.element"),
//     type: "h1",
//     ref: null,
//     props: {
//     children: "Hello World!!!"
//   }
// })


// const h1 = <h1>Hello World!!!</h1>;
// console.log(h1);