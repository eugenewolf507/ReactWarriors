export const Type = {
  FETCH_POST_START: 'FETCH_POST_START',
  FETCH_POST_SUCCESS: 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR: 'FETCH_POST_ERROR',
};

export const fetchMoviesStart = () => ({
  type: Type.FETCH_POST_START,
});

export const fetchMoviesSuccess = movies => ({
  type: Type.FETCH_POST_SUCCESS,
  payload: { movies },
});

export const fetchMoviesError = error => ({
  type: Type.FETCH_POST_ERROR,
  payload: { error },
});
