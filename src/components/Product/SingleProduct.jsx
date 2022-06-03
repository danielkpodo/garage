import React from 'react';
import Fade from 'react-reveal/Fade';

const SingleProduct = ({ product }) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="col l4 m6 s12">
        <div className="card">
          <div className="card-image">
            <img
              src={product.imgUrl}
              alt="This our product"
              className="responsive-img"
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
    </Fade>
  );
};

export default SingleProduct;
