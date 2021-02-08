import { connect } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from './movieItemAction';
import { getAllFavorites } from '../../redux/moviesSelectors';
import MovieItem from './MovieItem';

const mapStateToProps = state => ({
  favorites: getAllFavorites(state),
});

const mapDispatchToProps = { addToFavorite, deleteFromFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
