import React from 'react';
import styles from './moviesPage.module.css';
import Selector from '../../components/Select/SelectContainer';
import Favorites from '../../components/Favorites/FavoritesContainer';
import MovieList from '../../components/MovieList/MovieListContainer';

const MoviesPage = () => (
  <div className={styles.mainwatch}>
    <div className={styles.asside}>
      <Selector />
      <Favorites />
    </div>
    <MovieList />
  </div>
);

export default MoviesPage;
