import React, { useState, useEffect } from "react";
import { FavoriteAdventureCard, FavoriteDeck } from "../components/FavoriteAdventureCard";
import DeleteBtn from "../components/DeleteBtn";
import { BookedAdventureCard, BookedDeck } from "../components/BookedAdventureCard"
import tripsAPI from "../utils/tripsAPI";
import { Row, Col } from "react-bootstrap";
 

function Trips() {
  const [trips, setTrips] = useState([])
  // const [formObject, setFormObject] = useState({})

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
      <Col>
        <div>
          <h1>Booked Adventures</h1>
              {trips.length ? (
                <BookedDeck>
                  {trips.map(trip => (
                    <div>
                    {trip.booked === true && (
                    <BookedAdventureCard key={trip._id}>
                      <p>
                        {trip.username} booked a trip to {trip.location}
                      </p>
                      <p>
                        {trip.desc}
                      </p>
                    <DeleteBtn onClick={() => deleteTrip(trip._id)} />    
                  </BookedAdventureCard>
                  )}
                  </div>
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
          <h1>Favorited Adventures</h1>
            
              {trips.length ? (
                <FavoriteDeck>
                  {trips.map(trip => (
                    <div>
                    {trip.favorited === true && (
                    <FavoriteAdventureCard key={trip._id}>
                          <p>
                            {trip.username} favorited a trip to {trip.location}
                          </p>
                          <p>
                            {trip.desc}
                          </p>
                      <DeleteBtn onClick={() => deleteTrip(trip._id)} /> 
                    </FavoriteAdventureCard>
                    )}
                    </div>
                    ))}
                </FavoriteDeck>
              ) : (
              <h3>No trips to display</h3>
            )}
        </div>
    </Col>
  
  </Row>
  );
}

export default Trips