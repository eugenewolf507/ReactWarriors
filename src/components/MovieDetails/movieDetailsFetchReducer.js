import { combineReducers } from 'redux';
import { Type } from './movieDetailsAction';

const movieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIE_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_MOVIE_START:
      return true;

    case Type.FETCH_MOVIE_SUCCESS:
    case Type.FETCH_MOVIE_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_MOVIE_START:
      return null;

    case Type.FETCH_MOVIE_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  movie: movieReducer,
  loading: loadingReducer,
  error: errorReducer,
});
