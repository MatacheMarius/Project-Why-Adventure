import React from 'react';
import '../../App.css';
import FavoriteAdventureCard from '../FavoriteAdventureCard'
import BookedAdventureCard from '../BookedAdventureCard'

export default function Profile() {
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-6">
            <h1>Booked Adventures</h1>
            <BookedAdventureCard />
          </div>
          <div className="col-6">
            <h1>Favorite Adventures</h1>
            <FavoriteAdventureCard />
          </div>
        </div>
      </div>
    </div>
  )
}