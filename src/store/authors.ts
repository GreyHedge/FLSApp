import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {HOST} from '../constants/endpoints';
import {IAuthor} from '../types/author';

export const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: fetchBaseQuery({baseUrl: HOST}),
  endpoints: builder => ({
    getAuthor: builder.query<IAuthor, string>({
      query: id => `user/${id}.json`,
    }),
  }),
});

export const {useGetAuthorQuery} = authorApi;
