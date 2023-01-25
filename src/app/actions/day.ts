import { DayAttributes } from '../../types/day'
import { apiSlice } from '../api'

const dayAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    findAllDays: build.query<DayAttributes[], void>({
      query: () => 'days',
      providesTags: ['Days'],
    }),
    findDay: build.query<DayAttributes, number>({
      query: id => `days/${id}`,
    }),
    createDay: build.mutation<DayAttributes, DayAttributes>({
      query: body => ({
        url: 'days',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Days'],
    }),
    updateDay: build.mutation<DayAttributes, DayAttributes>({
      query: body => ({
        url: `days`,
        method: 'PUT',
        body,
      }),
    }),
    removeDay: build.mutation<number, boolean>({
      query: id => ({
        url: `days/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateDayMutation,
  useFindAllDaysQuery,
  useFindDayQuery,
  useRemoveDayMutation,
  useUpdateDayMutation,
} = dayAPI
