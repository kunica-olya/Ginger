import baseApi from './basic';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCards: builder.query({
      query: () => ({
        url: '/cards',
        method: 'GET',
        params: {
          populate: '*',
          sort: 'id:asc',
        }
      }),
    }),
    createTodo: builder.mutation({
      query: (todo) => {
        return {
          url: '/todos',
          method: 'POST',
          body: { data: { Text: todo } },
        };
      },
      invalidatesTags: ['Todo']
    }),
    fetchTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET',
        params: {
          sort: 'id:desc',
        }
      }),
      providesTags: ['Todo']
    }),
  }),
  overrideExisting: false,
});

export const {
  useFetchCardsQuery,
  useCreateTodoMutation,
  useFetchTodosQuery
} = extendedApi;

export default extendedApi;
