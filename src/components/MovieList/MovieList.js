import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItemContainer';
import styles from './movieList.module.css';

class MovieList extends Component {
  componentDidMount() {
    const { fetchMovies, sortBy } = this.props;
    fetchMovies(sortBy);
  }

  componentDidUpdate(prevProps) {
    const { fetchMovies, sortBy } = this.props;
    if (prevProps.sortBy !== sortBy) fetchMovies(sortBy);
  }

  render() {
    const { movies } = this.props;
    return (
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    );
  }
}

MovieList.propTypes = {
  sortBy: PropTypes.string.isRequired,
  fetchMovies: PropTypes.func.isRequired,
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
};

export default MovieList;
