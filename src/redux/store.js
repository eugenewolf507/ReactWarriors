import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';
import movieItemReducer from '../components/MovieItem/movieItemReducer';
import movieDetailsFetchReducer from '../components/MovieDetails/movieDetailsFetchReducer';
import selectReducer from '../components/Select/selectReducer';
import moviesListReducer from '../components/MovieList/MovieListReducer';

const rootReducer = combineReducers({
  favorites: movieItemReducer,
  movieDetailsFetch: movieDetailsFetchReducer,
  selectValue: selectReducer,
  moviesList: moviesListReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
