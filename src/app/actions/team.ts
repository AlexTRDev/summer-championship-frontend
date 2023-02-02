import { IResponseTeam, IResponseTeams } from '../../types/response'
import { ITeam } from '../../types/team'
import { apiSlice } from '../api'

const teamAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createTeam: build.mutation<ITeam, ITeam>({
      query: body => ({
        url: 'teams',
        method: 'POST',
        body,
      }),
    }),
    getTeam: build.query<IResponseTeam, number>({
      query: id => `teams/${id}`,
    }),
    getTeams: build.query<IResponseTeams, void>({
      query: () => 'teams',
    }),
    removeTeam: build.mutation<number, boolean>({
      query: id => ({
        url: `teams/${id}`,
        method: 'DELETE',
      }),
    }),
    updateTeam: build.mutation<ITeam, ITeam>({
      query: ({ id, ...body }) => ({
        url: `teams/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateTeamMutation,
  useGetTeamQuery,
  useGetTeamsQuery,
  useRemoveTeamMutation,
  useUpdateTeamMutation,
} = teamAPI
