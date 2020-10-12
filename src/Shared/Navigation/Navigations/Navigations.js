import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import classes from './Navigations.module.css';
import Navlinks from '../Navlinks/Navlinks';
import logo from '../../../Assets/Images/Method Draw Image (3).png';
import logoSideBar from '../../../Assets/Images/Method Draw Image (4).png';

function Navigations() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const toggleSideBarHandler = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };

  return (
    <>
      <SideBar show={openSideBar}>
        <div className={classes.headerMobileNav}>
          <div className={classes.logoContainerSideBar}>
            <h3>
              <span>Bishal</span> Shah
            </h3>
          </div>
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
        <div className={`${classes.mainContaniner}`}>
          <div className={classes.navContainer}>
            <div className={classes.logoContainer}>
              {/* <img src={logo} alt='logo' className={classes.logo} /> */}
              <h3>
                <span>Bishal</span> Shah
              </h3>
            </div>
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
