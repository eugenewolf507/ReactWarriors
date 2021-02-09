import React, { Component } from 'react';
import axios from 'axios';
import ToMoviesButton from '../../components/ToMoviesButton/ToMoviesButton';
import { API_URL, API_KEY } from '../../utils/api';
import MovieDetails from '../../components/MovieDetails/MovieDetailsContainer';
import styles from './moviePage.module.css';

export class MoviePage extends Component {
  state = {};

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(
        `${API_URL}/movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`,
      )
      .then(responce => {
        this.setState({ movieData: responce.data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const { movieData } = this.state;

    return (
      <div className={styles.wrapper}>
        {movieData && <MovieDetails movie={movieData} />}
        <ToMoviesButton />
      </div>
    );
  }
}

export default MoviePage;
