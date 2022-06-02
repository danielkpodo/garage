import React from 'react';
import products from '../../utils/products';
import ProductList from './ProductList';

const Product = () => {
  return (
    <section className="container">
      <div className="section-title center-align">
        <h2>Our Product</h2>
      </div>
      <div className="row product">
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Product;
