import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';



function HeroSection(props) {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div>
        <Button>
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
