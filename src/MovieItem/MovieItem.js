import React from "react";
import styles from "./MovieItem.module.css";

const MovieItem = props => {
  const { movie, removeMovie, addMovieToWillWatch } = props;
  return (
    <div className={styles.movieItem}>
      <h2 className={styles.title}>{movie.title} </h2>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.statistics}>
        <span className={styles.voteAverage}>Rating: {movie.vote_average}</span>
        <span className={styles.voteCount}>Votes: {movie.vote_count}</span>
      </div>
      {/* <div className={styles.popularity}>Popularity: {movie.popularity}</div> */}
      <p className={styles.overview}>{movie.overview}</p>
      <p className={styles.releaseDate}>Release date {movie.release_date}</p>
      <button onClick={addMovieToWillWatch.bind(this, props.movie)}>
        Add to favorite
      </button>
      <button onClick={removeMovie.bind(this, props.movie)}>Delete</button>
    </div>
  );
};

export default MovieItem;
