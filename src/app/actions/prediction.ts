import { IPrediction } from '../../types/prediction'
import { IPredictionRequest } from '../../types/request'
import { IResponsePredictions } from '../../types/response'
import { apiSlice } from '../api'

const predictionAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createPrediction: build.mutation<IPrediction, IPredictionRequest>({
      query: ({ token, ...body }) => ({
        url: 'predictions/bulk',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Predictions', 'Wallet', 'Tickets'],
    }),
    getPrediction: build.query<IPrediction, number>({
      query: id => `predictions/${id}`,
    }),
    getPredictions: build.query<IResponsePredictions, void>({
      query: () => 'predictions',
      providesTags: ['Predictions'],
    }),
    removePrediction: build.mutation<number, boolean>({
      query: id => ({
        url: `predictions/${id}`,
        method: 'DELETE',
      }),
    }),
    updatePrediction: build.mutation<IPrediction, IPrediction>({
      query: body => ({
        url: `predictions`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreatePredictionMutation,
  useGetPredictionQuery,
  useGetPredictionsQuery,
  useRemovePredictionMutation,
  useUpdatePredictionMutation,
} = predictionAPI
