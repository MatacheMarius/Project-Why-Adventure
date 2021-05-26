import React from "react";
import {Card} from 'react-bootstrap';


  function GuideCards(props) {
  
   
        return (
           
            <Card className ="col-4  ">
              <Card.Img variant="top" src={props.images} style={{height: '200px'}} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
               {props.regulation}
              </Card.Footer>
            </Card>
           
        );
    }


export default GuideCards;