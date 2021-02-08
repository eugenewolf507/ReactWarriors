import React from 'react';
import PropTypes from 'prop-types';

import styles from './favorites.module.css';

const Favorites = ({ favorites }) => (
  <div className={styles.wrapper}>
    <h3>Favorites:</h3>
    {!favorites.length && <p>No favorite movies yet :(</p>}
    <ul>
      {favorites.map(favorite => (
        <li>{favorite.title}</li>
      ))}
    </ul>
  </div>
);

Favorites.propTypes = {
  prop: PropTypes,
};

export default Favorites;
