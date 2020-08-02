import React from 'react';
import { FaDev, FaRegGem, FaAndroid } from 'react-icons/fa';
import classes from './Services.module.css';

function Services() {
  return (
    <section className={classes.Services}>
      <h2>Services</h2>
      <div className={classes.ServicesPrimary}>
        <div className={classes.ServicesSecondary}>
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
        <div className={classes.ServicesSecondary}>
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
        <div className={classes.ServicesSecondary}>
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
