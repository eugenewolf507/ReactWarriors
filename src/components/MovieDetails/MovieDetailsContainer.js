import { connect } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from './movieDetailsAction';
import { getAllFavorites } from '../../redux/moviesSelectors';
import MovieDetails from './MovieDetails';

const mapStateToProps = state => ({
  favorites: getAllFavorites(state),
});

const mapDispatchToProps = { addToFavorite, deleteFromFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
