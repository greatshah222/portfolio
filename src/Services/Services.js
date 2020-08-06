import React, { useEffect } from 'react';
import { FaDev, FaRegGem, FaMobileAlt } from 'react-icons/fa';
import classes from './Services.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
            Creating a strong foundation for a website means getting the HTML
            and CSS architecture right. If you've got a design I can create the
            front-end code for it.
          </p>
        </div>
        <div data-aos='fade-up' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <FaRegGem className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Web Design</h3>
          <div className={classes.underline}></div>
          <p className={classes.info}>
            A website should be designed for the people who will use it , so
            that's exactly what is do . The user interface of the application is
            the right and most important part of the development of web
            application.
          </p>
        </div>
        <div data-aos='fade-left' className={classes.ServicesSecondary}>
          <div className={classes.logo}>
            <FaMobileAlt className={classes.socialIcon} />
          </div>
          <h3 className={classes.title}>Mobile Friendly</h3>
          <div className={classes.underline}></div>
          <p className={classes.info}>
            One of the best things about having a mobile-friendly website is
            that you can reach a wider audience.A mobile design makes your
            website accessible to all users , regardless of their device.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
