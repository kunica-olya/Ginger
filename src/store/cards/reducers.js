import { GET_CARDS, UPDATE_CARDS } from './types';

const initialState = {
  data: [],
  loading: false,
};

export default function cards(state = initialState, action = GET_CARDS) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case UPDATE_CARDS:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}
