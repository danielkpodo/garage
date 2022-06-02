import React from 'react';
import SingleProduct from './SingleProduct';

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
