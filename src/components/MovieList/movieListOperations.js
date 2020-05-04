import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/api';
import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
} from './movieListActions';

const fetchMovies = sortBy => dispatch => {
  dispatch(fetchMoviesStart());
  axios
    .get(`${API_URL}/movie/${sortBy}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(responce => {
      dispatch(fetchMoviesSuccess(responce.data.results));
    })
    .catch(error => {
      dispatch(fetchMoviesError(error));
    });
};

export default fetchMovies;
