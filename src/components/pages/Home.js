import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

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
