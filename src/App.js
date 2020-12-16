import React from 'react';
import './App.css';
import './components/style/style.js';
import Header from './components/Header.js';
import Welcome from './components/welcome';
import HomeSection from './components/homesection1';
import AddressingCom from './components/AddressingCom';
import Testimonial from './components/testimonial.js';
import Contactus from './components/contactus.js';

function App() {
  return (
    <>
      <Welcome/>
      <Header/>
      <AddressingCom/>
      <HomeSection/>
      <Testimonial/>
      <Contactus/>
     </>
  );
}

export default App;
