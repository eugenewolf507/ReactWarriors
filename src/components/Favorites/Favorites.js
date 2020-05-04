import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Favorites = ({ favorites }) => (
  <div>
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
  favorites: state.favorites,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
