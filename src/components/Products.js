import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const baseURL = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.images[1]} alt="" />
          </div>
          <div>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
