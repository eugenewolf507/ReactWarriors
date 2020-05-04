import { Type } from './selectActions';

const initialOption = { value: 'top_rated', label: 'Top Rated' };

const selectReducer = (state = initialOption, action) => {
  switch (action.type) {
    case Type.CHANGE_SELECT:
      return action.payload;

    default:
      return state;
  }
};

export default selectReducer;
