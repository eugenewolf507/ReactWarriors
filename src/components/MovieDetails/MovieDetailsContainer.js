import { connect } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from './movieDetailsAction';
import fetchMovie from './movieDetailsOperations';
import { getAllFavorites } from '../../redux/moviesSelectors';
import MovieDetails from './MovieDetails';

const mapStateToProps = state => ({
  favorites: getAllFavorites(state),
  movie: state.movieDetailsFetch.movie,
  loading: state.movieDetailsFetch.loading,
});

const mapDispatchToProps = { fetchMovie, addToFavorite, deleteFromFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
