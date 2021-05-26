import React from "react";
import { Button, Modal } from "react-bootstrap";

import "./style.css"


function EmployeeModal(props) {

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
                        Age: {props.gender} <br />
                        Experience: {props.experience} years<br />
                        Cell: {props.cell} <br />
                        Email: {props.email} <br />

                  
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning"  onClick = {props.next}>
                    Next Guide
                </Button>
                <Button variant="success"  >
                    Book!
                </Button>
                <Button variant="danger" >
                    Add to Favorites
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeModal;