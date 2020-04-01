import React, { createContext } from "react";
import styles from "./App.module.css";
import moviesData from "./moviesData";
import MovieItem from "./MovieItem/MovieItem";

class App extends React.Component {
  state = {
    movies: moviesData,
    moviesWillWatch: []
  };

  addMovieToWillWatch = movie => {
    const { moviesWillWatch } = this.state;

    this.setState({ moviesWillWatch: [...moviesWillWatch, movie.id] });
  };

  removeMovie = movie => {
    const { movies } = this.state;
    this.setState(state => ({
      movies: movies.filter(item => item.id !== movie.id)
    }));
  };

  render() {
    const { movies, moviesWillWatch } = this.state;
    console.log("moviesWillWatch");
    console.log(moviesWillWatch);
    return (
      <div>
        <h1 className={styles.appHeading}>Movie Library</h1>
        {/* Rewrite with CSS Grid */}
        <div className={styles.mainwatch}>
          <main className={styles.movieList}>
            {movies.map(movie => (
              <MovieItem
                key={movie.id}
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
              />
            ))}
          </main>
          <asside className={styles.asside}>
            Watch list - {moviesWillWatch.length} movies:
            <ul>
              {moviesWillWatch.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </asside>
        </div>
        <footer>
          Used in this SPA:
          <ul>
            <li>React</li>
            <li>CSS Modules</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
