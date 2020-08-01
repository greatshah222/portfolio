import React from 'react';
import './App.css';
import Navigations from './Shared/Navigation/Navigations/Navigations';
import FrontPage from './Hero/pages/FrontPage';
import './Shared/FontAwesomeIcon/FontAwesome';
import About from './About/About';
import Services from './Services/Services';

function App() {
  return (
    <>
      <Navigations />
      <FrontPage />
      <Services />
      <About />
    </>
  );
}

export default App;
