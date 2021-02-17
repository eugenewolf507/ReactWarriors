import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/api';
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieError,
} from './movieDetailsAction';

const fetchMovie = movieId => dispatch => {
  dispatch(fetchMovieStart());
  axios
    .get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      dispatch(fetchMovieSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchMovieError(error));
    });
};
export default fetchMovie;
