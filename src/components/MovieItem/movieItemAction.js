export const Type = {
  ADDTOFAVORITE: 'ADDTOFAVORITE',
  DELETEFROMFAVORITE: 'DELETEFROMFAVORITE',
};

export const addToFavorite = movie => ({
  type: Type.ADDTOFAVORITE,
  payload: movie,
});

export const deleteFromFavorite = movie => ({
  type: Type.DELETEFROMFAVORITE,
  payload: movie,
});
