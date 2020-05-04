import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';
import fetchMovies from './movieListOperations';
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
            {/* <Link to={`/movies/${movie.id}`}> */}
            <MovieItem movie={movie} />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.moviesList.movies,
  sortBy: state.selectValue.value,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

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