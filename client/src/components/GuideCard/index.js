import React from "react";
import {Card, Button} from 'react-bootstrap';
import tripsAPI from "../../utils/tripsAPI";
import "./gCard.css"


  function GuideCards(props) {

  const showBooked = () => {
   saveTrips();
   props.showModal()
  }

  const showFavorited= () => {
    favoriteTrips();  
    
   }


  const tripData = {
    username: props.name,
    desc: props.description,
    booked: true,
    right: true,

  }

  const tripFavorited  = {
    username: props.name,
    desc: props.description,
    favorited: true,
  }

 

  function saveTrips() {
    tripsAPI.saveTrip(tripData)
    .then((res) => {
     })
      .catch(err => console.log(err));
      
  };




  function favoriteTrips() {
    tripsAPI.saveTrip(tripFavorited)
    .then((res) => {
      })
      .catch(err => console.log(err));
      
  };
   
        return (
           
            <Card className ="col-4" >
              <Card.Img variant="top" src={props.images} style={{height: '200px'}} />
              <Card.Body>
                <Card.Title   > <h1>{props.name} </h1></Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
               {props.regulation}
              </Card.Footer>
              <button className="bookBtn"  onClick = {showBooked} >
                    Book!
              </button>
              <button className="favBtn" onClick = {showFavorited} >
                    Add to Favorites
              </button>
            </Card>
           
        );
    }


export default GuideCards;