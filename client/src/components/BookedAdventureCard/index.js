import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import getInfo from '../../pages/PlanYourTrip'
import GuideCards from '../GuideCard'
import './style.css';

export function BookedDeck({ children }) {
  return (
    <CardDeck >
      {children}
    </CardDeck>
  )
}


export function BookedAdventureCard({ children }) {
  return (
      <div>
             <Card >
              <Card.Body>
                <Card.Text>{children}</Card.Text>
              </Card.Body>
            </Card>
      
      </div>
 )
}




function BookedAdventureCard2() {
  const [guide, setAllGuides] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 
  // eslint-disable-next-line react-hooks/exhaustive-deps

   
    
    useEffect(() => {
    getInfo()
    .then(response => {
      if(response.data){
      setAllGuides(response.data.data)
      setIsLoading(false);}
      
    })
    .catch(error=> console.log(error));
    
    }, [])

  console.log(guide);

  return (
    <div >
    <CardDeck className="row " >
    {isLoading ? 'Loading' : 
    guide.map((el, index) => {
    return <GuideCards  key = {index} images = {el.images[0]  ?  el.images[0].url : "https://www.nps.gov/common/uploads/structured_data/CAD2D1A7-09C6-7F1B-C8A2D91D6699D14D.jpg"} name = {el.name} /> }
    ) } 
    </CardDeck>
  </div>
  );
}

export default BookedAdventureCard;