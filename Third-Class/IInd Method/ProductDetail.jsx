import React from 'react';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductQty from './ProductQty';
import ProductDescription from './ProductDescription';

const ProductDetail = ({ name, price, qty, description }) => {
  console.log(name, price, qty, description);

  return (
    <div style={{ border: "2px solid white", margin: "30px", padding: "20px" }}>
      <ProductName name={name} />
      <ProductPrice price={price} />
      <ProductQty qty={qty} />
      <ProductDescription description={description} />
    </div>
  );
};

export default ProductDetail;
