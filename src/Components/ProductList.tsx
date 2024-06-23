import React from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  width: calc(33.3333% - 20px);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  color: #f00;
  margin: 10px 0;
`;

const ProductButton = styled.button`
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffaa00;
  }
`;

const ProductList: React.FC = () => {
  // Пример данных товаров
  const products = [
    {
      id: 1,
      image: "",
      pastPrice: 2720000,
      price: 1592000,
      name: "Рубашка LC Waikiki мужская, фиолетовая",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["#000000", "#FFFFFF"]
    },
    {
        id: 2,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 3,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 4,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 5,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 6 ,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 7,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 8,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 9,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 10,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 11,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 12,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 13,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 14,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 15,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 16,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 17,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
      {
        id: 1,
        image: "",
        pastPrice: 2720000,
        price: 1592000,
        name: "Рубашка LC Waikiki мужская, фиолетовая",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#000000", "#FFFFFF"]
      },
  ];

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{product.pastPrice} сум</ProductPrice>
          <ProductPrice>{product.price} сум</ProductPrice>
          <div>
            {product.sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </div>
          <div>
            {product.colors.map((color, index) => (
              <span key={index} style={{ color }}>{color}</span>
            ))}
          </div>
          <ProductButton>В корзину</ProductButton>
        </ProductCard>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

