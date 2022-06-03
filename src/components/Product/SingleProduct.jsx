import React from 'react';

const SingleProduct = ({ product }) => {
  return (
    <div className="col l4 m6 s12">
      <div className="card">
        <div className="card-image">
          <img
            src={product.imgUrl}
            alt="This our product"
            className="materialboxed"
          />
          <span className="card-title">{product.title}</span>
        </div>
        <div className="card-content">
          <p>{product.description}</p>
        </div>
        <div className="card-action">
          <a href="#!" className="product-link">
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
