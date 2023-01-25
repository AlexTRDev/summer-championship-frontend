import { MatchAttributes } from '../../types/match'
import { apiSlice } from '../api'

const matchAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    findAllMatchs: build.query<MatchAttributes[], void>({
      query: () => 'matches',
      providesTags: ['Matches'],
    }),
    findMatch: build.query<MatchAttributes, number>({
      query: id => `matches/${id}`,
    }),
    createMatch: build.mutation<MatchAttributes, MatchAttributes>({
      query: body => ({
        url: 'matches',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Matches'],
    }),
    updateMatch: build.mutation<MatchAttributes, MatchAttributes>({
      query: body => ({
        url: `matches`,
        method: 'PUT',
        body,
      }),
    }),
    removeMatch: build.mutation<number, boolean>({
      query: id => ({
        url: `matches/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateMatchMutation,
  useFindAllMatchsQuery,
  useFindMatchQuery,
  useRemoveMatchMutation,
  useUpdateMatchMutation,
} = matchAPI
