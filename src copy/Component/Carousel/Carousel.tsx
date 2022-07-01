import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-bootstrap/Carousel';

const Carousel1 = () =>{
    return(
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide-img-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Identity Website &amp; Marketing</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide2-img-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/07/h1-slide3-img-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}
export default Carousel1;