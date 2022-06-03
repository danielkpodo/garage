import React from 'react';
import products from '../../utils/products';
import ProductList from './ProductList';

const Product = () => {
  return (
    <section className="container product" id="products">
      <div className="section-title center-align">
        <h2>Our Products</h2>
      </div>
      <div className="row">
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Product;
