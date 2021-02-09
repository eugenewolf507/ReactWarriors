import React from 'react';
import { Link } from 'react-router-dom';
import styles from './toMoviesButton.module.css';

// const handleGoToMovies = () => {
//   this.props.history.push('/movies');
// };

const ToMoviesButton = () => (
  <Link to="/">
    <div className={styles.button}>
      <span>Move to Movies</span>
    </div>
  </Link>
);

export default ToMoviesButton;
