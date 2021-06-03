import React from 'react';
import "./style.css"
import { Row, Col, Card, Button, Container, Jumbotron } from "react-bootstrap";

function MustLogin() {
    return(
        <div id="background-image">
            <Jumbotron id="jumbotron">
                <Container>
                    <div id="heading">
                        <h4 className="mx-auto display-4">Begin your adventure now</h4>
                    </div>
                    <Row className="my-4">
                        <Col><Button className="bg-dark" id="link-button" href="/login">Go To Login Page</Button></Col>
                        <Col><Button className="bg-dark" id="link-button" href="/signup">Go To Sign Up Page</Button></Col>
                        {/* className="link-button"
                        className="link-button" */}
                    </Row>
                </Container>   
            </Jumbotron>
        </div>
    )
}

export default MustLogin


