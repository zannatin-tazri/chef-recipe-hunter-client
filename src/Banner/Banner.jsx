import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image from './rawImage.jpg'
import image2 from './img2.webp'
import image3 from './img3.webp'

const Banner = () => {
    return (
        <Container >
            <Carousel className='ms-5 p-5' >
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5> Chinese Foods !!</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>From hotpots to dumplings !!</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Fresh rice noodles !!</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Container>
    );
};

export default Banner;