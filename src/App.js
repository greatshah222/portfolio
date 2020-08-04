import React from 'react';
import './App.css';

import './Shared/FontAwesomeIcon/FontAwesome';

import MainPage from './Hero/MainPage';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Contactme from './Contactme/Contactme';
import Project from './Projects/Project';
import Footer from './Footer/Footer';
import Navigations from './Shared/Navigation/Navigations/Navigations';

function App() {
  return (
    <>
      <Navigations />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contactme'>
          <Contactme />
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
