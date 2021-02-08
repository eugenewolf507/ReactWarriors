import React from 'react';
import styles from './moviesPage.module.css';
import Selector from '../../components/Select/Select';
import Favorites from '../../components/Favorites/Favorites';
import MovieList from '../../components/MovieList/MovieList';

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
