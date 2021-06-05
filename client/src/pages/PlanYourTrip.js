import React, {useState, useEffect} from 'react';
import '../App.css';
import {CardDeck} from 'react-bootstrap';
import GuideCards from '../components/GuideCard';
import EmployeeModal from '../components/GuideModal';
import { getUsers } from '../utils/API';
import {  Form } from "react-bootstrap";
import axios from "axios";
import MustLogin from "../pages/MustLogin";
import { useLoginContext } from "../utils/GlobalState";
import './PlanYourTrip.css';
import Footer from '../components/Footer/Footer';


export default function Map() {
  
  const [input, setInput] = useState(null);
  const [guide, setAllGuides] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [randomGuides, setAllRandomGuides] = useState(null);
  const [isLoading2, setIsLoading2] = useState(true);
  const [nextGuide, getNextGuide] = useState(false);
  // to manage the users logged in status
  const [state, dispatch] = useLoginContext();
  const handleClose = () => setIsOpen(false);
  const showModal = () => {setIsOpen(true); } 
  const gotNextGuide = () => getNextGuide(!nextGuide)


  const getInfo = () => {
    var options = {
      method: 'GET',
      url: 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/campgrounds',
      params: {stateCode: input, 	limit: "9"},
      headers: {
        'x-api-key': 'CDQqUnod33sYMHzDwqRNsw2lRXMNRdwLZUpiSoJd',
        'x-rapidapi-key': 'f698202c65msh9632fce62056887p1835f7jsn64c8103bb7d3',
        'x-rapidapi-host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
      }
    }
    return axios.request(options)
  }

  useEffect(() => {
  getInfo()
  .then(response => {
    if(response.data){
    setAllGuides(response.data.data)
    setIsLoading(false);}
  })
  .catch(error=> console.log(error));
  }, [input])

  useEffect(() => {
    getUsers()
    .then(response => {
      if(response.data){
      setAllRandomGuides(response.data.results)
      setIsLoading2(false);
    }  
    })
    .catch(error=> console.log(error));
  },  [isOpen, nextGuide])
  console.log(guide);

  if(state.user.user_id) {
    return(
      <div  className="picture">
      <div>
        <div>
        <br/>
          <h3 className='selectTitle'>Select A State</h3>
          <div className="stateStyle">
            <form value = {input} onChange = {(event) => setInput(event.target.value)} onClick={console.log( input )}> 
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">  
                  <option>Choose a State</option>         
                  <option value = "AL">AL</option>
                  <option value = "AK">AK</option>
                  <option value = "AZ">AZ</option>
                  <option value = "AR">AR</option>
                  <option value = "CA">CA</option>
                  <option value = "CO">CO</option>
                  <option value = "CT">CT</option>
                  <option value = "DE">DE</option>
                  <option value = "FL">FL</option>
                  <option value = "GA">GA</option>
                  <option value = "HI">HI</option>
                  <option value = "ID">ID</option>
                  <option value = "IL">IL</option>
                  <option value = "IN">IN</option>
                  <option value = "IA">IA</option>
                  <option value = "KS">KS</option>
                  <option value = "KY">KY</option>
                  <option value = "LA">LA</option>
                  <option value = "ME">ME</option>
                  <option value = "MD">MD</option>
                  <option value = "MA">MA</option>
                  <option value = "MI">MI</option>
                  <option value = "MN">MN</option>
                  <option value = "MS">MS</option>
                  <option value = "MO">MO</option>
                  <option value = "MT">MT</option>
                  <option value = "NE">NE</option>
                  <option value = "NV">NV</option>
                  <option value = "NH">NH</option>
                  <option value = "NH">NJ</option>
                  <option value = "NM">NM</option>
                  <option value = "NY">NY</option>
                  <option value = "NC">NC</option>
                  <option value = "ND">ND</option>
                  <option value = "OH">OH</option>
                  <option value = "OK">OK</option>
                  <option value = "OR">OR</option>
                  <option value = "PA">PA</option>
                  <option value = "RI">RI</option>
                  <option value = "SC">SC</option>
                  <option value = "SD">SD</option>
                  <option value = "TN">TN</option>
                  <option value = "TX">TX</option>
                  <option value = "UT">UT</option>
                  <option value = "VT">VT</option>
                  <option value = "VA">VA</option>
                  <option value = "WA">WA</option>
                  <option value = "WV">WV</option>
                  <option value = "WI">WI</option>
                  <option value = "WY">WY</option>
                </Form.Control>
              </Form.Group>
            </form>
          </div>  
          </div>
        </div> 
        <div>
          <CardDeck className="row " >
          {isLoading ? 'Loading' : 
            guide.map((el, index) => {
              return <GuideCards  key = {index} images = {el.images[0]  ?  el.images[0].url : "https://www.nps.gov/common/uploads/structured_data/CAD2D1A7-09C6-7F1B-C8A2D91D6699D14D.jpg"} name = {el.name} description = {el.description}  regulation = {el.regulationsOverview} showModal = {showModal}  /> }
          )} 
          </CardDeck>
          {isLoading2 ? 'Loading' : 
            randomGuides.map((el = 2, index) => {
              return < EmployeeModal key ={index} isOpen = {isOpen}   image = {el.picture.large}  namef = {el.name.first} namel = {el.name.last} gender = {el.gender} age={el.dob.age} experience = {el.registered.age} cell={el.cell}  email={el.email} handleClose = {handleClose} next = {gotNextGuide} />  }
          )}
        </div>
        <Footer />
      </div>
      
  )} else {
    return (
      <MustLogin />
    )
  }
};