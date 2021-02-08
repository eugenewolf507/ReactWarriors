import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './MovieItem.module.css';
import { POSTER_URL } from '../../utils/api';

const MovieItem = ({ movie, favorites, addToFavorite, deleteFromFavorite }) => (
  <div className={styles.movieItem}>
    <NavLink
      to={`/movies/${movie.id}`}
      className={styles.linkTo}
      activeClassName={styles.activeLinkTo}
    >
      <h2 className={styles.title}>{movie.title} </h2>
      <img
        src={POSTER_URL + movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>Rating: {movie.vote_average}</div>
      <div>Votes: {movie.vote_count}</div>
      <div>Popularity: {movie.popularity}</div>
      <div>Release date: {movie.release_date}</div>
      <br />
    </NavLink>
    {favorites.some(favorite => favorite.id === movie.id) ? (
      <button
        type="button"
        className={`${styles.btnDel} ${styles.button}`}
        onClick={() => deleteFromFavorite(movie)}
      >
        Favorite
      </button>
    ) : (
      <button
        type="button"
        className={`${styles.btnAdd} ${styles.button}`}
        onClick={() => addToFavorite(movie)}
      >
        Favorite
      </button>
    )}
  </div>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  deleteFromFavorite: PropTypes.func.isRequired,
};

export default MovieItem;
