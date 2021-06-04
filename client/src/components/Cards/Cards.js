import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='white'>Check out what we have to offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Come with us to discover the world'
              label='Adventure'
              path='/PlanYourTrip'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Learn about our mission'
              label='Explore'
              path='/mission'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Sign up and find out Why you Adventure'
              label='Join'
              path='/signup'
            />
          
            <CardItem
              src='images/img-8.jpg'
              text="Check out the trips you already booked or favorited!"
              label='Future Experiences'
              path='/trips'
            />
             <CardItem
               src='images/img-2.jpg'
               text='Login in to see your plans'
               label='Login'
               path='/login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
