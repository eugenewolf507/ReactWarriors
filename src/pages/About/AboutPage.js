import React from 'react';
import styles from './aboutPage.module.css';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <h2>About</h2>
      Used in this SPA:
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Router</li>
        <li>Thunk</li>
        <li>Axios</li>
        <li>CSS Modules</li>
        <li>Mobile-first</li>
      </ul>
    </div>
  );
};

export default About;
