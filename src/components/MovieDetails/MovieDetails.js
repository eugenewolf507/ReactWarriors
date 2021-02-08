import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';
import { POSTER_URL } from '../../utils/api';

const MovieDetails = ({
  movie,
  favorites,
  addToFavorite,
  deleteFromFavorite,
}) => (
  <div className={styles.movieItem}>
    <h2 className={styles.title}>{movie.title} </h2>
    <img
      src={POSTER_URL + movie.poster_path}
      alt={movie.title}
      className={styles.poster}
    />
    <div className={styles.aboutText}>
      <p>Rating: {movie.vote_average}</p>
      <p>Votes: {movie.vote_count}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>{movie.overview}</p>
      <p>Release date {movie.release_date}</p>

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
  </div>
);

MovieDetails.propTypes = {
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

export default MovieDetails;
