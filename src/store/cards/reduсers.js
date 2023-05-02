import { GET_CARDS } from './types';

const initialState = {
    errorMessage: '',
    loading: false,
    data: []
};

export default function cards(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
