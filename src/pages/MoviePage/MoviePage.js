import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import styles from './moviePage.module.css';

export class ArticlePage extends Component {
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

  handleGoToMovies = () => {
    // add query
    this.props.history.push('/movies');
  };

  render() {
    const { movieData } = this.state;

    return (
      <div className={styles.wrapper}>
        {movieData && <MovieDetails movie={movieData} />}
        <button
          type="button"
          className={styles.button}
          onClick={this.handleGoToMovies}
        >
          <span>Back to movies</span>
        </button>
      </div>
    );
  }
}

export default ArticlePage;
