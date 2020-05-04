import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { addToFavorite, deleteFromFavorite } from './movieDetailsAction';
import { POSTER_URL } from '../../utils/api';

const MovieDetails = ({
  movie,
  favorites,
  addToFavorite,
  deleteFromFavorite,
}) => (
  <div className={styles.movieItem}>
    <h2 className={styles.title}>{movie.title} </h2>
    <div className={styles.descriptionWrapper}>
      <div>
        <img
          src={POSTER_URL + movie.poster_path}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.statistics}>
          <p className={styles.voteAverage}>Rating: {movie.vote_average}</p>
          <p className={styles.voteCount}>Votes: {movie.vote_count}</p>
          <p className={styles.popularity}>Popularity: {movie.popularity}</p>
        </div>
      </div>

      <div>
        <div>
          <p className={styles.overview}>{movie.overview}</p>
          <p className={styles.releaseDate}>
            Release date {movie.release_date}
          </p>
        </div>
      </div>
    </div>
    {favorites.some(favorite => favorite.id === movie.id) ? (
      <button
        type="button"
        className={styles.btnDelete}
        onClick={() => deleteFromFavorite(movie)}
      >
        DeleteFromFavorite
      </button>
    ) : (
      <button type="button" onClick={() => addToFavorite(movie)}>
        AddToFavorite
      </button>
    )}
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

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = { addToFavorite, deleteFromFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
