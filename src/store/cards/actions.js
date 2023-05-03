import { GET_CARDS, UPDATE_CARDS, UPDATE_STATUS } from './types';

export const getCards = (data) => ({ type: GET_CARDS, data });
export const updateCards = (data) => ({ type: UPDATE_CARDS, data });
export const updateStatus = (loading) => ({ type: UPDATE_STATUS, loading });
