import { GET_CARDS, CARDS_LOADING } from './types';

const initialState = {
    data: [],
    loading: false,
};

export default function cards(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case CARDS_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}
