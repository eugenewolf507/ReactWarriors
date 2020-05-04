import { combineReducers } from 'redux';
import { Type } from './movieListActions';

const moviesListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_SUCCESS:
      return payload.movies;

    default:
      return state;
  }
};

const loadindReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return true;

    case Type.FETCH_POST_ERROR:
    case Type.FETCH_POST_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return null;

    case Type.FETCH_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesListReducer,
  error: errorReducer,
  loading: loadindReducer,
});
