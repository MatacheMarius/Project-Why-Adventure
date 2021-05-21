import React from "react";

// if we need to format dates, this is an easy package to use
//use the npm package to format the hire date-install too!
//import dateFormat from 'dateformat'

function PlaceCard(props) {
    return (
        <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title p-3">Title: {props.title}</h5>
            </div>
        </div> 
    ); 
};

export default PlaceCard;  