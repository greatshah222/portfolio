import React, { useEffect } from 'react';
import Button from '../Shared/Button/Button';
import classes from './Footer.module.css';
import {
  FaFacebook,
  FaLinkedin,
  FaGithubSquare,
  FaTwitter,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  useEffect(() => {
    AOS.init();
    console.log('object');
  }, []);
  return (
    <>
      <section className={classes.FreelanceImageContainer}>
        <div className={classes.SecondaryContainer}>
          <h6>I'am available for freelance projects.</h6>
          <h3>Let's work together indeed!</h3>
          <div data-aos='fade-down-right' className={classes.ButtonsSection}>
            <Button
              style={{
                backgroundColor: 'var(--lightYellow)',
                color: 'var(--mainBlack) ',
                padding: '10px 35px',
              }}
              to='/'
            >
              Get quotes
            </Button>
            <Button btnType='hire' style={{ padding: '10px 35px' }} to='/'>
              Hire Me
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.Footerprimary}>
        <div className={classes.Footer}>
          <div data-aos='fade-up-right' className={classes.Aboutme}>
            <h4 className={classes.heading}>About Me</h4>
            <div className={classes.AboutmeInfo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ab.
            </div>
            <div className={classes.AboutmeIcon}>
              <a
                href='https://github.com/greatshah222'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className={classes.socialIcon} />
              </a>
              <a
                href='https://github.com/greatshah222'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithubSquare className={classes.socialIcon} />
              </a>
              <a
                href='https://github.com/greatshah222'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter className={classes.socialIcon} />
              </a>
              <a
                href='https://github.com/greatshah222'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className={classes.socialIcon} />
              </a>
            </div>
          </div>
          <div data-aos='fade-up' className={classes.Address}>
            <h4 className={classes.heading}>Address</h4>

            <div className={classes.AddressLocation}>
              <FaLocationArrow className={classes.AddressIcon} />
              <h5>Oulu,Finland</h5>
            </div>
            <div className={classes.AddressPhone}>
              <FaPhone className={classes.AddressIcon} />
              <h5>+358466557204</h5>
            </div>
            <div className={classes.AddressEmail}>
              <FaMailBulk className={classes.AddressIcon} />
              <h5>great.shah222@gmail.com</h5>
            </div>
          </div>
          <div data-aos='fade-left' className={classes.Contactme}>
            <h4 className={classes.heading}>Contact Me</h4>
            <form className={classes.FooterForm}>
              <input type='text' placeholder='Enter your Email' />
              <input type='text' placeholder='Enter your Message' />
              <Button btnType='hire'>Send</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
