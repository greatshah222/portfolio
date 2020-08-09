import React, { useEffect, useState } from 'react';
import Button from '../Shared/Button/Button';
import classes from './Footer.module.css';
import axios from 'axios';
import CV from '../Assets/Images/NewCvUpdated.pdf';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const EmailChangehandler = (e) => {
    setEmail(e.target.value);
  };
  const MessageChangehandler = (e) => {
    setMessage(e.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios({
        method: 'POST',
        data: {
          email: Email,
          message: message,
        },
        url: `${process.env.REACT_APP_BACKEND_URL}/email`,
      });
      setMessage('');
      setEmail('');
      await toast.success('Thankyou for the Message');
      setLoading(false);
    } catch (error) {
      await toast.error(error.response.data.error.response);
      console.log(error.response.data.error.response);
      setLoading(false);
    }
  };
  return (
    <>
      <section className={classes.FreelanceImageContainer}>
        <ToastContainer />
        <div className={classes.SecondaryContainer}>
          <h6>I'am available for freelance projects.</h6>
          <h3>Let's work together indeed!</h3>
          <div data-aos='fade-right' className={classes.ButtonsSection}>
            <Button
              style={{
                backgroundColor: 'var(--lightYellow)',
                color: 'var(--mainBlack) ',
                padding: '10px 35px',
              }}
              href={CV}
              target='_blank'
              rel='noopener noreferrer'
            >
              View CV
            </Button>
            <Button
              btnType='hire'
              style={{ padding: '10px 35px' }}
              to='/v1/contactme'
            >
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
              Hello, I am Bishal Shah and I am a Full Stack Web Developer. I
              enjoy coding and the challenge of learning something new everyday.
            </div>
            <div className={classes.AboutmeIcon}>
              <a
                href='https://www.facebook.com/Bishalshah22'
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
                href='https://www.linkedin.com/in/bishal-shah-8b7822159/'
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
          <div data-aos='fade-up-left' className={classes.Contactme}>
            <h4 className={classes.heading}>Contact Me</h4>
            <form className={classes.FooterForm} onSubmit={formSubmitHandler}>
              <input
                type='email'
                placeholder='Enter your Email'
                value={Email}
                onChange={EmailChangehandler}
                required
              />
              <input
                type='text'
                placeholder='Enter your Message'
                value={message}
                onChange={MessageChangehandler}
                required
              />
              <Button btnType='hire' disabled={loading}>
                {loading ? 'Sending' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
