import React from 'react';

import FrontPage from './pages/FrontPage';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Skills from '../Skills/Skills';
import Repos from '../Github/Repos/Repos';

function MainPage() {
  return (
    <>
      {' '}
      <FrontPage />
      <Services />
      <Experience />
      <FeaturedProjects />
      <Repos />
      <Skills />
    </>
  );
}

export default MainPage;
