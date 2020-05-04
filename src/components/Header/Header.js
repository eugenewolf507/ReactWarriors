import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.appHeader}>
    <Link to="/">
      <img src={logo} className={styles.appLogo} alt="logo" />
    </Link>
    <h1 className={styles.appHeading}>Movie Library</h1>
    <Link className={styles.nav} to="/about">
      About
    </Link>
  </header>
);

export default Header;
