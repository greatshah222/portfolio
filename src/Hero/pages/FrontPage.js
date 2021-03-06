import React from 'react';
import profile from '../../Assets/Images/code4.svg';
import classes from './FrontPage.module.css';

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLaptopCode,
  FaLinkedin,
  FaTwitter,
  FaUniversity,
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
          <p>
            <FaLaptopCode className={classes.pIcon} /> Junior Software Developer
            at Icareus Oy{' '}
          </p>
          <p className={classes.master}>
            <FaUniversity className={classes.pIcon} />
            Master's Student at Tampere University{' '}
          </p>
          <Button btnType='hire' to='/v1/contactme'>
            Start a Conversation
          </Button>
          <div className={classes.footer}>
            <a
              href='https://www.facebook.com/Bishalshah22'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaFacebookSquare className={classes.socialIcon} />
            </a>
            <a
              href='https://github.com/greatshah222'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaGithubSquare className={classes.socialIcon} />
            </a>
            <a
              href='https://github.com/greatshah222'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaTwitter className={classes.socialIcon} />
            </a>
            <a
              href='https://www.linkedin.com/in/bishal-shah-8b7822159/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaLinkedin className={classes.socialIcon} />
            </a>
          </div>
        </div>

        <div className={classes.profile}>
          <Animated
            animationIn='fadeInRight'
            animationOut='fadeOut'
            isVisible={true}
          >
            <img src={profile} alt='profile' className={classes.profileImage} />
          </Animated>
        </div>
      </div>
      <div className={classes.stars}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div>
    </section>
  );
}

export default FrontPage;
