import React from 'react';
import './App.css';
import Navigations from './Shared/Navigation/Navigations/Navigations';
import FrontPage from './Hero/pages/FrontPage';
import './Shared/FontAwesomeIcon/FontAwesome';
import About from './About/About';
import Services from './Services/Services';
import Experience from './Experience/Experience';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Navigations />
      <FrontPage />
      <Services />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Footer />
      <About />
    </>
  );
}

export default App;
