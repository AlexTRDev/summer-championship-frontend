import { ICalendar } from '../../types/calendar'
import { IQueriesCalendar } from '../../types/queries'
import { IResponseCalendars } from '../../types/response'
import { apiSlice } from '../api'

const calendarAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createCalendar: build.mutation<ICalendar, ICalendar>({
      query: body => ({
        url: 'calendars',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Calendars'],
    }),
    getCalendars: build.query<IResponseCalendars, IQueriesCalendar>({
      query: queries => `calendars?${queries.journeys}&${queries.isInclude}`,
      providesTags: ['Calendars'],
    }),
    getCalendar: build.query<ICalendar, number>({
      query: id => `calendars/${id}`,
    }),
    removeCalendar: build.mutation<boolean, number>({
      query: id => ({
        url: `calendars/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Calendars'],
    }),
    updateCalendar: build.mutation<ICalendar, ICalendar>({
      query: ({ id, ...body }) => ({
        url: `calendars/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateCalendarMutation,
  useGetCalendarsQuery,
  useGetCalendarQuery,
  useRemoveCalendarMutation,
  useUpdateCalendarMutation,
} = calendarAPI
