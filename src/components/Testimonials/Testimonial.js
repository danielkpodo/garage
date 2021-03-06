import React from 'react';
import testimonials from '../../utils/testimonial';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';

const Testimonial = ({ loader }) => {
  return (
    <div className="testimonials" id="testimonials">
      <Fade top>
        <h2 className="center-align">Testimonials</h2>
      </Fade>
      <div className="container">
        <div className="row">
          {loader ? (
            <div
              class="progress"
              style={{ background: '#f66f11', margin: '40px 0' }}
            >
              <div class="indeterminate"></div>
            </div>
          ) : (
            <div className="col l12 m12 s12">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                {testimonials.map((testimony) => {
                  return (
                    <div className="carousel-main" key={testimony.id}>
                      <img
                        src={testimony.img}
                        alt={1}
                        className="responsive-img"
                      />
                      <div className="myCarousel">
                        <h3>{testimony.name}</h3>
                        <h4>{testimony.position}</h4>
                        <p>{testimony.catchPhrase}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
