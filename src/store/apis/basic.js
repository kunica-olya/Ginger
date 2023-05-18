import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../../constants/constants';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  }),
  endpoints: () => ({})
});

export default baseApi;
