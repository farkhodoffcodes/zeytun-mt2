import React, { useEffect, useState } from "react";

const Product: React.FC = () => {
  const url = 'http://localhost:3000/products';
  const [products, setProducts] = useState<any[]>([]); // Define state outside of FetchApi

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchApi();
  }, []); 

  return (
    <div className="flex justify-between align-middle">
      {products.map((item) => {
        const { img, title, price, id } = item;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
