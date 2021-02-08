import { connect } from 'react-redux';
import MovieList from './MovieList';
import { getAllMovies, getSortBy } from '../../redux/moviesSelectors';
import fetchMovies from './movieListOperations';

const mapStateToProps = state => ({
  movies: getAllMovies(state),
  sortBy: getSortBy(state),
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
