import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.appFooter}>
    Eugene Volkov - 2020 -
    <a
      href="https://github.com/eugenewolf507/MovieApp"
      target="_blank"
      rel="noopener noreferrer"
      title="open in a new tab"
    >
      GitHub Repositorie
    </a>
    -<a> Resume</a>
  </footer>
);

export default Footer;
