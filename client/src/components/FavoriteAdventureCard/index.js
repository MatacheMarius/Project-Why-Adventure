import React, { useState, useEffect } from 'react';
import {Card, CardDeck} from 'react-bootstrap';

export function FavoriteDeck({ children }) {
  return (
    <CardDeck>
      {children}
    </CardDeck>
  )
}


export function FavoriteAdventureCard({ children }) { 
  return (
      <div>
             <Card className ="col-4  ">
              <Card.Body>
                <Card.Text>{children}</Card.Text>
              </Card.Body>
            </Card>
      
      </div>
 )
}
