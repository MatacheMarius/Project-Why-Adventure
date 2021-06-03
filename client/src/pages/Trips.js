import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { BookedAdventureCard, BookedDeck } from "../components/BookedAdventureCard"
import MustLogin from "../pages/MustLogin"
import tripsAPI from "../utils/tripsAPI";
import { Row, Col, Card } from "react-bootstrap";
import { useLoginContext } from "../utils/GlobalState";
 

function Trips() {
  const [trips, setTrips] = useState([])
  // const [formObject, setFormObject] = useState({})

  // to manage the users logged in status
  const [state, dispatch] = useLoginContext();

  // called in return; used to keep username displayed on refresh
  function displayName() {
    console.log(state.user)
    console.log(state.user.username)
    return state.user.username
  }

  useEffect(() => {
    loadTrips()
  }, [])

  function loadTrips() {   
    tripsAPI.getTrips()
    .then((res) => {
      setTrips(res.data)
      console.log(res.data)})
      .catch(err => console.log(err));
      
  };

  function deleteTrip(id) {
    tripsAPI.deleteTrip(id)
    .then(res => loadTrips())
    .catch(err => console.log(err));
  }


  if(state.user.user_id) {
    return(
      <div>
        <Row>
          <h1>Welcome back, {displayName()}</h1>
          <Col>
            <div>
              <h2>Booked Adventures</h2>
              {trips.length ? ( 
              <BookedDeck>
                {trips.map(trip => ( trip.booked?
                    <BookedAdventureCard key={trip._id}>
                      <h1>{trip.username}</h1>
                      <p>{trip.desc}</p>
                      <DeleteBtn onClick={() => deleteTrip(trip._id)} />    
                    </BookedAdventureCard>
                : null))}  
              </BookedDeck>
              ) : ( <h3>No trips to display</h3> )}
            </div>
          </Col>
          <Col>
            <div>
              <h2>Favorite Adventures</h2>
              {trips.length ? ( <BookedDeck> 
                {trips.map(trip => ( trip.favorited?
                  <BookedAdventureCard key={trip._id}>
                    <Card>
                      <Card.Title> <h1>{trip.username} </h1></Card.Title>
                      <Card.Text>{trip.desc}</Card.Text>
                      <DeleteBtn onClick={() => deleteTrip(trip._id)} />  
                    </Card>  
                  </BookedAdventureCard>
                : null ))}
              </BookedDeck>
              ) : ( <h3>No trips to display</h3> )}
            </div>
          </Col>
        </Row>
      </div>)
  } else {
      return (
        <MustLogin />
      )
  };
}
  
export default Trips