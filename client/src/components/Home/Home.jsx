import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import ContactPage from '../ContactPage/ContactPage';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <AboutMe />
      <ContactPage />
      <Footer/>
    </div>
  );
};

export default Home;
