import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.css';

const NotFound = () => (
  <div>
    <h2 className={styles.notFoundStyles}>Sorry, page not found :(</h2>
    <p className={styles.notFoundStyles}>
      Please, discover&nbsp;
      <Link to="/">movies list</Link>&nbsp;:)
    </p>
  </div>
);
export default NotFound;
