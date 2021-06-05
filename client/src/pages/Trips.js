import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { BookedAdventureCard, BookedDeck } from "../components/BookedAdventureCard"
import MustLogin from "../pages/MustLogin"
import tripsAPI from "../utils/tripsAPI";
import { Row, Col, Card, ListGroupItem, Carousel } from "react-bootstrap";
import { useLoginContext } from "../utils/GlobalState";
import guidesAPI from "../utils/guidesAPI";
import './Trips.css';
import Footer from '../components/Footer/Footer';
var moment = require('moment');

 
function Trips() {
  const [trips, setTrips] = useState([])
  const [guides, setGuides] = useState([])
  // const [formObject, setFormObject] = useState({})

  // to manage the users logged in status
  const [state, dispatch] = useLoginContext();

  // called in return; used to keep username displayed on refresh
  function displayName() {
    console.log(state.user)
    console.log(state.user.username)
    return state.user.username
  }

  // format dates
  // install/import moment.js
  function formatDates(trip) {
    var startDate = trip[0].dateRange[0];
    startDate = moment(startDate).subtract(10, 'days').calendar()
    var endDate = trip[0].dateRange[1];
    endDate = moment(endDate).subtract(10, 'days').calendar()
    console.log(startDate, endDate)
    // if the start date equals the end date, only one date needs to display
    if (startDate === endDate){
      return(
        <div>
          {startDate}
        </div>
      )
    } else {
      return (
        <div>
          {startDate} to {endDate}
        </div>)
    }  
  }

  useEffect(() => {
    loadTrips()
    loadGuides()
  }, [])

  function loadTrips() {   
    tripsAPI.getTrips()
    .then((res) => {
      setTrips(res.data)
      console.log(res.data)})
      .catch(err => console.log(err));
      
  };

  function loadGuides() {
    guidesAPI.getGuides()
    .then((res) => {
      setGuides(res.data)
      console.log(res.data)})
      .catch(err => console.log(err));
      
  };

  function deleteTrip(id) {
    tripsAPI.deleteTrip(id)
    .then(res => loadTrips())
    .catch(err => console.log(err));
  }

  function deleteGuide(id) {
    guidesAPI.deleteGuide(id)
    .then(res => loadGuides())
    .catch(err => console.log(err));
  }

  const y = trips.filter(booked => booked.booked === true)
  console.log("guides = ", guides)
  console.log("y = ", y)
  let myArr = [];
  for (let i = 0; i < guides.length; i ++) {
  myArr.push(guides[i]);
  myArr.push(y[i]);
  }
  console.log("myArr = ", myArr)
  let newArray = [];
  while(myArr.length > 0) {
    newArray.push(myArr.splice(0,2))
  }
  console.log("newArray = ",newArray)

  if(state.user.user_id && trips.length > 0) {
    return(
      <div>
        <div  className="picture1">
        <h1>Welcome, {displayName()}</h1>
            <Row>
              <Col sm={6}>
                <div>
                  <h2>Booked Adventures</h2>
                  <BookedDeck>
                    {(newArray.length) ? ( 
                      <div>
                          <div>
                          {newArray.map(trip => (trip.length === 2) ? (
                            <BookedAdventureCard  >
                              <h1>{trip[1].username}</h1> 
                              <p>{trip[1].desc}</p> 
                              <h2>For more info contact your booked guide: </h2>
                              <ListGroupItem> <p>Name: {trip[0].firstName} {trip[0].lastName}</p> </ListGroupItem>
                              <ListGroupItem>  <p>Experience: {trip[0].experience}</p>  </ListGroupItem>
                              <ListGroupItem> <p>Gender: {trip[0].gender}</p>  </ListGroupItem>
                              <ListGroupItem> <p>Email: {trip[0].email}</p>  </ListGroupItem>
                              <ListGroupItem> <p>Phone: {trip[0].cell}</p>  </ListGroupItem>
                              <ListGroupItem> Booked Date(s):  <p>{formatDates(trip)}</p>  </ListGroupItem>
                            </BookedAdventureCard>
                          ) : null ) } 
                          </div>
                      <div>
                      </div>
                      </div>
                    ) : (
                      <h3>No trips to display</h3>
                    )}
                  </BookedDeck>
                </div>
              </Col>
              <Col sm={6}>
                <div>
                  <h2>Favorite Adventures</h2>
                  {trips.length ? ( <BookedDeck> 
                    {trips.map(trip => ( trip.favorited?
                      <BookedAdventureCard key={trip._id}>
                        <Card.Title> <h1>{trip.username} </h1></Card.Title>
                        <Card.Text>{trip.desc}</Card.Text>
                        <DeleteBtn onClick={() => deleteTrip(trip._id)} />  
                      </BookedAdventureCard>
                    : null ))}
                  </BookedDeck>
                  ) : (
                  <h3>No trips to display</h3>
                  )}
                </div>
                
              </Col>
              
            </Row> 
             </div>
             <Footer />
      </div>)
  } else {
      return (
        <MustLogin />
      )
  };
}
  
export default Trips