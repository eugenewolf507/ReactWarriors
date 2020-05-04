import { Type } from './movieItemAction';

const movieItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADDTOFAVORITE:
      return [...state, payload];

    // rewrite with selectors
    case Type.DELETEFROMFAVORITE:
      return state.filter(item => item.id !== payload.id);
    // return [...state, action.payload];

    default:
      return state;
  }
};

export default movieItemReducer;
