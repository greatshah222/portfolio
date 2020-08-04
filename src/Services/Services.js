import React, { useEffect } from 'react';
import { FaDev, FaRegGem, FaAndroid } from 'react-icons/fa';
import classes from './Services.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <section className={classes.Services}>
      <h2>Services</h2>
      <div className={classes.ServicesPrimary}>
        <div data-aos='fade-right' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <FaDev className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Web Development</h3>
          <div className={classes.underline}></div>
          <p className={classes.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            maiores?
          </p>
        </div>
        <div data-aos='fade-up' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <FaRegGem className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Web Design</h3>
          <div className={classes.underline}></div>
          <p className={classes.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            maiores?
          </p>
        </div>
        <div data-aos='fade-left' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <FaAndroid className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>App Design</h3>
          <div className={classes.underline}></div>
          <p className={classes.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            maiores?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
