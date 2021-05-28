import React, { useState, useEffect } from "react";
import FavoriteAdventureCard from "../components/FavoriteAdventureCard";
import DeleteBtn from "../components/DeleteBtn";
import { BookedAdventureCard, BookedDeck } from "../components/BookedAdventureCard"
import tripsAPI from "../utils/tripsAPI";
import { Row, Col } from "react-bootstrap";
import { useLoginContext } from "../utils/GlobalState";
 

function Trips() {
  const [trips, setTrips] = useState([])
  // const [formObject, setFormObject] = useState({})

  // to manage the users logged in status
  const [state, dispatch] = useLoginContext();
  // don't delete ", dispatch". Will break

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
  // FOR SANDU

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   if (formObject.username && formObject.desc) {
  //     API.saveBook({
  //       title: formObject.username,
  //       author: formObject.desc,
  //       synopsis: formObject.guide
  //     })
  //       .then(res => loadTrips())
  //       .catch(err => console.log(err));
  //   }
  // };



  return ( 
    <Row>
      <div>
        {/* if the user is logged in, render: */}
        {state.user.user_id ?
          <div>
            {/* ASK A TA: when I hit refresh, it clears out name? */}
            {state.user.user_id ? <h1>Welcome back, {state.user.username}</h1> : <h1>You're not logged in!</h1>}
            <Col>
              <div>
                <h1>Booked Adventures</h1>
                    {trips.length ? (
                      <BookedDeck>
                        {trips.map(trip => (
                          <BookedAdventureCard key={trip._id}>
                            <p>
                              {trip.username} booked a trip to {trip.location}
                            </p>
                            <p>
                              {trip.desc}
                            </p>
                          <DeleteBtn onClick={() => deleteTrip(trip._id)} />    
                        </BookedAdventureCard>
                        ))}
                      </BookedDeck>
                    ) : (
                    <h3>No trips to display</h3>
                  )}
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
          </div>
          // if the user is logged out, render:
          : <h4>Login to see where you're going next!</h4>}
      </div>
    </Row>
  );
}

export default Trips