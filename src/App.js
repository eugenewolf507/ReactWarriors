import React, { createContext } from "react";
import styles from "./App.module.css";
import moviesData from "./moviesData";
import MovieItem from "./MovieItem/MovieItem";
import MovieTabs from "./MovieTabs/MovieTabs";
import { API_URL, API_KEY } from "./utils/api";

class App extends React.Component {
  state = {
    movies: moviesData,
    moviesWillWatch: [],
    sort_by: "popularity.desc"
  };

  // Move to separate function
  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data.results);
        this.setState({ movies: data.results });
      });
  };

  // rewrite with axios
  componentDidMount() {
    console.log("Did mount");
    this.getMovies();
    // console.log(API_URL + API_KEY);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) this.getMovies();
  }

  addMovieToWillWatch = movie => {
    const { moviesWillWatch } = this.state;
    this.setState({ moviesWillWatch: [...moviesWillWatch, movie] });
  };

  removeMovieFromWillWatch = movie => {
    const { moviesWillWatch } = this.state;
    this.setState(state => ({
      moviesWillWatch: moviesWillWatch.filter(item => item.id !== movie.id)
    }));
  };

  removeMovie = movie => {
    const { movies } = this.state;
    this.setState(state => ({
      movies: movies.filter(item => item.id !== movie.id)
    }));
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    const { movies, moviesWillWatch, sort_by } = this.state;
    console.log("RENDER ", sort_by);
    return (
      <div>
        <h1 className={styles.appHeading}>Movie Library</h1>
        {/* Rewrite with CSS Grid */}
        <MovieTabs
          sort_by={this.state.sort_by}
          updateSortBy={this.updateSortBy}
        />
        {/* <MovieTabs sort_by={this.state.sort_by} /> */}
        <div className={styles.mainwatch}>
          <main className={styles.movieList}>
            {movies.map(movie => (
              <MovieItem
                key={movie.id}
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
                removeMovieFromWillWatch={this.removeMovieFromWillWatch}
              />
            ))}
          </main>
          <asside className={styles.asside}>
            Watch list - {moviesWillWatch.length} movies:
            <ul>
              {moviesWillWatch.map(item => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </asside>
        </div>
        <footer>
          Used in this SPA:
          <ul>
            <li>React</li>
            <li>CSS Modules</li>
            <li>Fetch (rewrite with axios)</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
