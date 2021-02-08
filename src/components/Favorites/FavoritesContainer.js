import { connect } from 'react-redux';
import Favorites from './Favorites';
import { getAllFavorites } from '../../redux/moviesSelectors';

const mapStateToProps = state => ({
  favorites: getAllFavorites(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
