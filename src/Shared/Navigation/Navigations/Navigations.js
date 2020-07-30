import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import classes from './Navigations.module.css';
import Navlinks from '../Navlinks/Navlinks';
import logo from '../../../Assets/Images/logo.svg';

function Navigations() {
  const [openSideBar, setOpenSideBar] = useState(true);
  const toggleSideBarHandler = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };
  return (
    <>
      <SideBar show={openSideBar}>
        <div className={classes.headerMobileNav}>
          <img src={logo} alt='logo' className={classes.logoSideBar} />
          <button
            className={classes.closeSideBarButton}
            onClick={toggleSideBarHandler}
          >
            &times;
          </button>
        </div>
        <nav className={classes.MobileNav}>
          <Navlinks closeSideBar={toggleSideBarHandler} />
        </nav>
      </SideBar>
      <>
        <div className={classes.mainContaniner}>
          <div className={classes.navContainer}>
            <img src={logo} alt='logo' className={classes.logo} />
            <button
              onClick={toggleSideBarHandler}
              className={classes.HamBurgerMenu}
            >
              <span />
              <span />
              <span />
            </button>
            <nav className={classes.DesktopNav}>
              <Navlinks closeSideBar={toggleSideBarHandler} />
            </nav>
          </div>
        </div>
      </>
    </>
  );
}

export default Navigations;
