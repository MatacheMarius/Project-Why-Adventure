import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Cards';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <div className="featured">
        <div className="container trips">
          <Cards/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
