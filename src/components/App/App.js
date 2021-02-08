import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import MoviePage from '../../pages/MoviePage/MoviePage';
import Footer from '../Footer/Footer';
import MoviesPage from '../../pages/Movies/MoviesPage';
import About from '../../pages/About/AboutPage';
import NotFound from '../../pages/NotFound/NotFoundPage';

const App = () => (
  <div>
    {/* ADD CSS Grids */}

    {/* Error and Loading start */}
    {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}
    {/* {isLoading && <p>Loading...</p>} */}
    {/* {isLoading && <p>Loading...</p>} */}
    {/* Error and Loading end */}

    <Header />
    <Switch>
      <Route path="/" exact component={MoviesPage} />
      <Route path="/about" component={About} />
      <Route path="/movies/:movieId" component={MoviePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
