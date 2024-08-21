import React from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from './Gallery.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 
export default function Gallery() {
  return (
    <div className={classes.gallery}>
      <h2 className={classes.head}>Transformation Gallery</h2>

      <Container>
        <Row>
          <Col xs={0} md={3}>
            
          </Col>
          <Col xs={12} md={6}>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="1.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="2.jpeg" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="3.jpeg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="4.jpeg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="5.jpeg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-10"
                  src="6.jpeg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="7.jpeg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="8.jpeg" alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={0} md={3}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
