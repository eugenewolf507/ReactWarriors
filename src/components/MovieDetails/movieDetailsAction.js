export const Type = {
  ADDTOFAVORITE: 'ADDTOFAVORITE',
  DELETEFROMFAVORITE: 'DELETEFROMFAVORITE',
  FETCH_MOVIE_START: 'FETCH_MOVIE_START',
  FETCH_MOVIE_SUCCESS: 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_ERROR: 'FETCH_MOVIE_ERROR',
};

export const addToFavorite = movie => ({
  type: Type.ADDTOFAVORITE,
  payload: movie,
});

export const deleteFromFavorite = movie => ({
  type: Type.DELETEFROMFAVORITE,
  payload: movie,
});

export const fetchMovieStart = () => ({
  type: Type.FETCH_MOVIE_START,
});

export const fetchMovieSuccess = movie => ({
  type: Type.FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchMovieError = error => ({
  type: Type.FETCH_MOVIE_ERROR,
  payload: { error },
});
