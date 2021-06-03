import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { BookedAdventureCard, BookedDeck } from "../components/BookedAdventureCard"
import MustLogin from "../pages/MustLogin"
import tripsAPI from "../utils/tripsAPI";
import { Row, Col, Card, ListGroupItem } from "react-bootstrap";
import { useLoginContext } from "../utils/GlobalState";
import guidesAPI from "../utils/guidesAPI";
 

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
if (state.user.user_id) {
  return ( 
  

       
      <div>
     
        {/* if the user is logged in, render: */}
        { trips.length !==0 ?
        
          <div>
            {/* ASK A TA: when I hit refresh, it clears out name? */}
            {state.user.user_id ? <h1>Welcome back, {state.user.username}</h1> : <h1>You're not logged in!</h1>}
            <Row>
            <Col sm={6}>
              <div>
                <h2>Booked Adventures</h2>
                <BookedDeck>
                    {(newArray.length) ? ( 
                  
                   <div>
                     <div>
                      {
                        newArray.map(trip => (trip.length === 2) ? (
                          <BookedAdventureCard  >
                         
                          <h1>{trip[1].username}</h1> 
                          <p>{trip[1].desc}</p> 
                         <h2>For more info contact your booked guide: </h2>
                          <ListGroupItem> <p>Name: {trip[0].firstName} {trip[0].lastName}</p> </ListGroupItem>
                          <ListGroupItem>  <p>Experience: {trip[0].experience}</p>  </ListGroupItem>
                          <ListGroupItem> <p>Gender: {trip[0].gender}</p>  </ListGroupItem>
                          <ListGroupItem> <p>Email: {trip[0].email}</p>  </ListGroupItem>
                          <ListGroupItem> <p>Phone: {trip[0].cell}</p>  </ListGroupItem>
                          <ListGroupItem> Date range:  <p>{trip[0].dateRange[0]} to {trip[0].dateRange[1]}</p>  </ListGroupItem>
                         
                       
                         
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
   
               
          : <h4>Login to see where you're going next!</h4>}
     
     </div>

  
   
  );
              } else {return (<MustLogin/>)}
}
  
export default Trips