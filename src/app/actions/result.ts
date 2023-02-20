import { IResult, IResultRequest, IResultResponse, IResultsRequest, IResultsResponse } from '../../types/result'
import { apiSlice } from '../api'

const resultAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createResult: build.mutation<IResult, IResultRequest>({
      query: ({ token, ...body }) => ({
        url: 'results/bulk',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Results'],
    }),
    bulkCreate: build.mutation<IResultsResponse, IResultsRequest>({
      query: ({ token, ...body }) => ({
        url: 'results/bulk',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Results'],
    }),
    getResult: build.query<IResultResponse, number>({
      query: id => `results/${id}`,
    }),
    getResults: build.query<IResultsResponse, void>({
      query: () => 'results',
      providesTags: ['Results'],
    }),
    removeResult: build.mutation<number, boolean>({
      query: id => ({
        url: `results/${id}`,
        method: 'DELETE',
      }),
    }),
    updateResult: build.mutation<IResult, IResult>({
      query: body => ({
        url: `results/${body}}`,
        method: 'PUT',
        body: body.result,
      }),
      invalidatesTags: ['Results'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateResultMutation,
  useGetResultQuery,
  useGetResultsQuery,
  useRemoveResultMutation,
  useUpdateResultMutation,
} = resultAPI
