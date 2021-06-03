import React from 'react';
import "./style.css"
import { Row, Col, Carousel, Button, Container, Jumbotron } from "react-bootstrap";


function MustLogin() {
    return(
        <div id="background-image">
            <Jumbotron id="jumbotron">
                <Container>
                    <div id="heading">
                        <h4 className="mx-auto display-4">Begin your adventure now</h4>
                    </div>
                    <Row className="mt-4 pb-4">
                        <Col><Button className="bg-dark" id="link-button" href="/login">Go To Login Page</Button></Col>
                        <Col><Button className="bg-dark" id="link-button" href="/signup">Go To Sign Up Page</Button></Col>
                    </Row>
                </Container>   
            </Jumbotron>
            <Carousel id="carousel" fade interval={5000} controls={false} pause={false} indicators={false}>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="/images/img-13.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="/images/img-11.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="/images/img-10.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img
                    className="d-block w-100"
                    src="/images/img-12.jpg"
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>  
        </div>
    )
}

export default MustLogin