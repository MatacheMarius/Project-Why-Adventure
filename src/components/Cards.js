import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Come with us to discover the world'
              label='Adventure'
              path='/mission'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Find your preferat places to travel'
              label='Map'
              path='/map'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Do you like mystery? Come with us in a BLIND TRIP'
              label='Mystery'
              path='/mission'
            />
          
            <CardItem
              src='images/img-8.jpg'
              text="Dou like new experiences? let's see what you can do."
              label='Adrenaline'
              path='/mission'
            />
             <CardItem
               src='images/img-2.jpg'
               text='Discover new friends'
               label='Friends'
               path='/mission'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
