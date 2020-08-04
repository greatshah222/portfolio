import React from 'react';
import profile from '../../Assets/Images/hero-img.jpeg';
import { Link } from 'react-router-dom';
import classes from './FrontPage.module.css';

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import Button from '../../Shared/Button/Button';
import { Animated } from 'react-animated-css';

function FrontPage() {
  return (
    <section className={classes.home}>
      <div className={classes.showcase}>
        <div className={classes.info}>
          {' '}
          <h2>I'm Bishal</h2>
          <p>Freelance Fullstack Developer</p>
          <Button btnType='hire' to='/'>
            Contact me
          </Button>
          <div className={classes.footer}>
            <Link to='/'>
              <FaFacebookSquare className={classes.socialIcon} />
            </Link>
            <Link to='/'>
              <FaGithubSquare className={classes.socialIcon} />
            </Link>
            <Link to='/'>
              <FaTwitter className={classes.socialIcon} />
            </Link>
            <Link to='/'>
              <FaLinkedin className={classes.socialIcon} />
            </Link>
          </div>
        </div>

        <div className={classes.profile}>
          <Animated
            animationIn='bounceInLeft'
            animationOut='fadeOut'
            isVisible={true}
          >
            <img src={profile} alt='profile' className={classes.profileImage} />
          </Animated>
        </div>
      </div>
      {/* <div className={classes.stars}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div> */}
    </section>
  );
}

export default FrontPage;
