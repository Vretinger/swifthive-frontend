import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Other sections like featured freelancers, job postings, etc. */}
    </div>
  );
};

export default Home;
