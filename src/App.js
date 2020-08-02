import React from 'react';
import './App.css';
import Navigations from './Shared/Navigation/Navigations/Navigations';
import FrontPage from './Hero/pages/FrontPage';
import './Shared/FontAwesomeIcon/FontAwesome';
import About from './About/About';
import Services from './Services/Services';
import Experience from './Experience/Experience';

function App() {
  return (
    <>
      <Navigations />
      <FrontPage />
      <Services />
      <Experience />
      <About />
    </>
  );
}

export default App;
