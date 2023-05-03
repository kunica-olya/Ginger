import { GET_CARDS, UPDATE_CARDS, UPDATE_STATUS } from './types';

const initialState = {
    data: [],
    loading: false,
};

export default function cards(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                data: action.data,
            };
        case UPDATE_CARDS:
            return {
                ...state,
                data: action.data,
            };
        case UPDATE_STATUS:
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
}
