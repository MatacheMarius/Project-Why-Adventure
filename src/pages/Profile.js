import React, { useState, useEffect } from "react";
import FavoriteAdventureCard from "../components/FavoriteAdventureCard";
import BookedAdventureCard from "../components/BookedAdventureCard";
import { Row, Col } from "react-bootstrap";
 

export default function Trips() {
  // Setting our component's initial state
  // const [trips, setTrips] = useState([])
  // const [formObject, setFormObject] = useState({})



  return (
    <Row>
    <Col>
      <div>
        <h1>Booked Adventures</h1>
          <BookedAdventureCard />
      </div>
    </Col>
    <div class="col-md-1">
    </div>
    <Col>     
      <div>
        <h1>Favorite Adventures</h1>
         <FavoriteAdventureCard />
        </div>
    </Col> 
    
  </Row>
  )
}