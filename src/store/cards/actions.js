import { GET_CARDS, UPDATE_CARDS } from './types';

export const getCards = (data) => ({ type: GET_CARDS, payload: data });
export const updateCards = (loading) => ({ type: UPDATE_CARDS, loading });
