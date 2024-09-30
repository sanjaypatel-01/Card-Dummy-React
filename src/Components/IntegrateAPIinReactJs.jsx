// App.jsx

import React, { useState } from "react";
// import Card from "./Components/Card";
// import CardTwo from "./Components/CardTwo";
// import ExampleUseState from "./Components/ExampleUseState";
// import UseStateIsBanned from "./Components/UseStateIsBanned";
// import UseStateArray from "./Components/UseStateArray";
// import UseStateArray2 from "./Components/UseStateArray2";
// import UseStateImageScroll from "./Components/UseStateImageScroll";
// import ComponentsUsingProps from "./Components/ComponentsUsingProps";
// import CardsUsingProps from "./Components/CardsUsingProps";
// import CardsUsingPropsTwo from "./Components/CardsUsingPropsTwo";
// import CardsUsingPropsThree from "./Components/CardsUsingPropsThree";
// import NavbarCardsUsingPropsThree from "./Components/NavbarCardsUsingPropsThree";
// import FormHandling from "./Components/FormHandling";
// import Cards from "./Components/FormHandling/Cards";
// import Form from "./Components/FormHandling/Form";
// import Home from "./Components/DynamicRouting/Home";
// import User from "./Components/DynamicRouting/User";
// import About from "./Components/DynamicRouting/About";
// import Nav from "./Components/DynamicRouting/Nav";
// import Routing from "./Components/DynamicRouting/Routing";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);

  const getproducts = () => {
    const api = "https://fakestoreapi.com/products/";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data)
      })
      .catch((err) => console.log(error));
  };

  // To add product
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products/";

    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(error));
  };

  return (
    <div className="bg-red-100 w-full h-screen p-6 flex gap-5">
      <button
        onClick={getproducts}
        className="bg-blue-600 text-white h-12 px-3 py-1 rounded font-semibold"
      >
        Get Product API
      </button>

      <button
        onClick={addproducts}
        className="bg-blue-700 text-white h-12 px-3 py-1 rounded font-semibold"
      >
        Save new product in API
      </button>

      <hr />

      <ul>
        {products.length > 0 ? (
          products.map((elem) => (<li className="bg-red-200 mb-2 p-1 text-black-700">{elem.title}</li>))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </div>
  );
}

export default App;
