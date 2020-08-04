import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Navigations/Navigations.module.css';
function Navlinks(props) {
  return (
    <ul className={classes.navUl}>
      <li>
        <NavLink
          onClick={props.closeSideBar}
          to=''
          activeClassName={classes.active}
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.closeSideBar}
          to='/about'
          activeClassName={classes.active}
          exact
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.closeSideBar}
          to='/projects'
          activeClassName={classes.active}
          exact
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.closeSideBar}
          to='/contactme'
          activeClassName={classes.active}
          exact
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Navlinks;
