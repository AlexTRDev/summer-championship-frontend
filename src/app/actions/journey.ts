import { IJourney } from '../../types/journey'
import { IResponseJourneys } from '../../types/response'
import { apiSlice } from '../api'

const journeyAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createJourney: build.mutation<IJourney, IJourney>({
      query: body => ({
        url: 'journeys',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Journeys'],
    }),
    getJourney: build.query<IJourney, number>({
      query: id => `journeys/${id}`,
    }),
    getJourneys: build.query<IResponseJourneys, void>({
      query: () => 'journeys',
      providesTags: ['Journeys'],
    }),
    removeJourney: build.mutation<number, boolean>({
      query: id => ({
        url: `journeys/${id}`,
        method: 'DELETE',
      }),
    }),
    updateJourney: build.mutation<IJourney, IJourney>({
      query: body => ({
        url: `journeys`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateJourneyMutation,
  useGetJourneyQuery,
  useGetJourneysQuery,
  useRemoveJourneyMutation,
  useUpdateJourneyMutation,
} = journeyAPI
