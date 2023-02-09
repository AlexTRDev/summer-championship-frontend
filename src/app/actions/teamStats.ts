import { IQueriesTeamStats } from '../../types/queries'
import { IResponseTeamStats } from '../../types/response'
import { ITeamStats } from '../../types/teamStats'
import { apiSlice } from '../api'

const teamStatsAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createTeamStats: build.mutation<ITeamStats, ITeamStats>({
      query: body => ({
        url: 'teamStats',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TeamStats'],
    }),
    getTeamStats: build.query<IResponseTeamStats, IQueriesTeamStats>({
      query: queries => `teamStats?${queries.isInclude}&${queries.serie}`,
      providesTags: ['TeamStats'],
    }),
    getTeamStat: build.query<ITeamStats, number>({
      query: id => `teamStats/${id}`,
    }),
    removeTeamStats: build.mutation<number, boolean>({
      query: id => ({
        url: `teamStats/${id}`,
        method: 'DELETE',
      }),
    }),
    updateTeamStats: build.mutation<IResponseTeamStats, ITeamStats>({
      query: ({ id, ...body }) => ({
        url: `teamStats/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['TeamStats'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateTeamStatsMutation,
  useGetTeamStatQuery,
  useGetTeamStatsQuery,
  useRemoveTeamStatsMutation,
  useUpdateTeamStatsMutation,
} = teamStatsAPI
