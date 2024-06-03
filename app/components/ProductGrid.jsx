"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(response);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  console.log("prodtc", products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((products) => (
        <Card
          key={products.id}
          image={products.image}
          title={products.title}
          price={products.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
