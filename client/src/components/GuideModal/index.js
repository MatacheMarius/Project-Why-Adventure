import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import guidesAPI from "../../utils/guidesAPI";

import "./style.css"
//import @wojtekmaj/react-daterange-picker
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

function EmployeeModal(props) {
  
    // handle datePicker state
    const [value, onChange] = useState(new Date(), new Date());
    
    const showGuide = () => {
       saveGuide()
       props.handleClose()
        }
     
     
       const tripData = {
         firstName: props.namef,
         lastName: props.namel,
         gender: props.gender,
         experience: props.experience,
         cell: props.cell,
         email: props.email,
         //add date value
         dateRange: value,
         booked: true
        
        
       }
       console.log("value", value)
     
      
     
       function saveGuide() {
         guidesAPI.saveGuide(tripData)
         .then((res) => {
           })
           .catch(err => console.log(err));
           
       };
     

       console.log("tripData", tripData)


    return ( 
        
        <Modal  animation show={props.isOpen} onHide={props.handleClose}
        
        >
            <Modal.Header closeButton >
                <Modal.Title>Choose your guide!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-4"><img src={props.image} alt="portrait" ></img></div>
                    <div className="col-8">
                        Name: {props.namef} {props.namel} <br />
                        Gender: {props.gender} <br />
                        Experience: {props.experience} years<br />
                        Cell: {props.cell} <br />
                        Email: {props.email} <br />

                  
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            {/* add datePicker */}
            <div>
                <DateRangePicker 
                    calendarAriaLabel="Toggle calendar"
                    clearAriaLabel="Clear value"
                    dayAriaLabel="Day"
                    monthAriaLabel="Month"
                    yearAriaLabel="Year"  
                    nativeInputAriaLabel="Date"
                    format="MM-dd-y"
                    onChange={onChange}
                    value={value}                   
                />
            </div>   

            <Button variant="warning"  onClick = {props.next}>
                    Next Guide
                </Button>
                <Button variant="success" onClick = {showGuide}  >
                    Book!
                </Button>
               
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeModal;