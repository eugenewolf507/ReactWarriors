import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.appFooter}>
    Eugene Volkov - 2020 -{' '}
    <a
      href="https://github.com/eugenewolf507/MovieApp"
      target="_blank"
      rel="noopener noreferrer"
      title="open in a new tab"
    >
      GitHub Repositorie
    </a>{' '}
    -{' '}
    <a
      href="https://drive.google.com/file/d/1eQQFpes8XeaDaz5XY_5wyyE3LH3RWlI5/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      title="open in a new tab, and I will convert CV to HTML version little later"
    >
      CV
    </a>
  </footer>
);

export default Footer;
