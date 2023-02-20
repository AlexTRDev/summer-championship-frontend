import {
  IPrediction,
  IPredictionRequest,
  IRequestPrediction,
  IResponsePrediction,
  IResponsePredictions,
} from '../../types/prediction'
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
      invalidatesTags: ['Predictions'],
    }),
    getPrediction: build.query<IResponsePrediction, IRequestPrediction>({
      query: ({ ticketId, calendarId }) => `predictions/admin/${ticketId}/${calendarId}`,
      providesTags: ['Prediction'],
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
    updatePrediction: build.mutation<IResponsePrediction, IRequestPrediction>({
      query: body => ({
        url: `predictions/admin/${body.ticketId}/${body.calendarId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Predictions', 'Prediction'],
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
