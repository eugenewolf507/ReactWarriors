import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './favorites.module.css';
import { getAllFavorites } from '../../redux/moviesSelectors';

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

const mapStateToProps = state => ({
  favorites: getAllFavorites(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
