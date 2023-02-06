import { IQueriesPlayerStats } from '../../types/queries'
import { IResponsePlayerStats } from '../../types/response'
import { IPlayerStats } from '../../types/playerStats'
import { apiSlice } from '../api'

const playerStatsAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createPlayerStats: build.mutation<IPlayerStats, IPlayerStats>({
      query: body => ({
        url: 'playerStats',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PlayerStats'],
    }),
    getPlayerStats: build.query<IResponsePlayerStats, IQueriesPlayerStats>({
      query: queries => `playerStats?${queries.isInclude}&${queries.order}`,
      providesTags: ['PlayerStats'],
    }),
    getPlayerStat: build.query<IPlayerStats, number>({
      query: id => `playerStats/${id}`,
    }),
    removePlayerStats: build.mutation<number, boolean>({
      query: id => ({
        url: `playerStats/${id}`,
        method: 'DELETE',
      }),
    }),
    updatePlayerStats: build.mutation<IPlayerStats, IPlayerStats>({
      query: ({ id, ...body }) => ({
        url: `playerStats/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreatePlayerStatsMutation,
  useGetPlayerStatQuery,
  useGetPlayerStatsQuery,
  useRemovePlayerStatsMutation,
  useUpdatePlayerStatsMutation,
} = playerStatsAPI
