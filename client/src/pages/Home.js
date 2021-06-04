import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Cards';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="featured">
        <div className="container trips">
          <Cards/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
