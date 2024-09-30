import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "http://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        //console.log(products)
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <button onClick={getProducts} className="rounded px-5 py-2 bg-red-300">
        Call Product API
      </button>
      <hr />
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="bg-red-200 mb-2 p-1 text-black-700">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </div>
  );
}
