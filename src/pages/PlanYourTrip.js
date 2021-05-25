import React, {useState, useEffect} from 'react';
import '../App.css';
import getInfo from '../utils/API';
import {CardDeck} from 'react-bootstrap';
import GuideCards from '../components/GuideCard';
import EmployeeModal from '../components/GuideModal';
import { getUsers } from '../utils/API';


export default function Map() {
 
  const [guide, setAllGuides] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [randomGuides, setAllRandomGuides] = useState(null);
  const [isLoading2, setIsLoading2] = useState(true);
  const [nextGuide, getNextGuide] = useState(false);
  const handleClose = () => setIsOpen(false);
  const showModal = () => {setIsOpen(true); }
  const gotNextGuide = () => getNextGuide(!nextGuide)

  

   
    
    useEffect(() => {
    getInfo()
    .then(response => {
      if(response.data){
      setAllGuides(response.data.data)
      setIsLoading(false);}
      
    })
    .catch(error=> console.log(error));
    
    }, [])

    

      
    useEffect(() => {
      getUsers()
      .then(response => {
        if(response.data){
        setAllRandomGuides(response.data.results)
        setIsLoading2(false);
        console.log(response.data.results)
     
      }
        
      })
      .catch(error=> console.log(error));
      
      },  [isOpen, nextGuide])


console.log(isOpen)

return (
        <div >
          <CardDeck className="row " >
          {isLoading ? 'Loading' : 
          guide.map((el, index) => {
          return <GuideCards  key = {index} images = {el.images[0]  ?  el.images[0].url : "https://www.nps.gov/common/uploads/structured_data/CAD2D1A7-09C6-7F1B-C8A2D91D6699D14D.jpg"} name = {el.name} description = {el.description}  regulation = {el.regulationsOverview} showModal = {showModal}/> }
          ) } 
          </CardDeck>
          
          {isLoading2 ? 'Loading' : 
          randomGuides.map((el = 2, index) => {
            return < EmployeeModal key ={index} isOpen = {isOpen}   image = {el.picture.large}  namef = {el.name.first} namel = {el.name.last} gender = {el.gender} age={el.dob.age} experience = {el.registered.age} cell={el.cell}  email={el.email} handleClose = {handleClose} next = {gotNextGuide} />  })
           
            }
        </div>
        
        )
  
    

};

