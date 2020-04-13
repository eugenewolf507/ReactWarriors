import React from "react";
import styles from "./MovieItem.module.css";
import { POSTER_URL } from "../utils/api";

class MovieItem extends React.Component {
  state = { willWatch: false };

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;
    const { willWatch } = this.state;
    return (
      <div className={styles.movieItem}>
        <h2 className={styles.title}>{movie.title} </h2>
        <img
          src={POSTER_URL + movie.poster_path}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.statistics}>
          <span className={styles.voteAverage}>
            Rating: {movie.vote_average}
          </span>
          <span className={styles.voteCount}>Votes: {movie.vote_count}</span>
        </div>
        {/* <div className={styles.popularity}>Popularity: {movie.popularity}</div> */}
        <p className={styles.overview}>{movie.overview}</p>
        <p className={styles.releaseDate}>Release date {movie.release_date}</p>
        {willWatch ? (
          <button
            onClick={() => {
              this.setState({ willWatch: false });
              removeMovieFromWillWatch(movie);
            }}
            type="button"
            className={styles.btnAdd}
          >
            Remove from favorite
          </button>
        ) : (
          <button
            onClick={() => {
              this.setState({ willWatch: true });
              addMovieToWillWatch(movie);
            }}
            type="button"
            className={styles.btnRemove}
          >
            Add to favorite
          </button>
        )}

        <button onClick={removeMovie.bind(null, movie)}>Delete</button>
      </div>
    );
  }
}
// const MovieItem = props => {

// };

export default MovieItem;
