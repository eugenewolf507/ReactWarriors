import React from 'react';
import ToMoviesButton from '../../components/ToMoviesButton/ToMoviesButton';
import MovieDetails from '../../components/MovieDetails/MovieDetailsContainer';
import styles from './moviePage.module.css';

const MoviePage = props => {
  const { match } = props;
  return (
    <div className={styles.wrapper}>
      <MovieDetails matchMovieID={match.params.movieId} />
      <ToMoviesButton />
    </div>
  );
};

export default MoviePage;
