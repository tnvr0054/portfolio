import {useState,useEffect} from 'react'
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />      
      <Skills />      
      <Contact />
      <Footer />
    </>
  );
}

export default App;
