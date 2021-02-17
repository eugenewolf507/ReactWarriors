import { Type } from './movieDetailsAction';

const movieItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADDTOFAVORITE:
      return [...state, payload];

    case Type.DELETEFROMFAVORITE:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

export default movieItemReducer;
