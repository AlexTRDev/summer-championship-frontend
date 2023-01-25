import { Team } from '../../types/team'
import { apiSlice } from '../api'

const teamAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    findAllTeams: build.query<Team[], void>({
      query: () => 'teams',
    }),
    findTeam: build.query<Team, number>({
      query: id => `teams/${id}`,
    }),
    createTeam: build.mutation<Team, Team>({
      query: body => ({
        url: 'teams',
        method: 'POST',
        body,
      }),
    }),
    updateTeam: build.mutation<Team, Team>({
      query: body => ({
        url: `teams`,
        method: 'PUT',
        body,
      }),
    }),
    removeTeam: build.mutation<number, boolean>({
      query: id => ({
        url: `teams/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateTeamMutation,
  useFindAllTeamsQuery,
  useFindTeamQuery,
  useRemoveTeamMutation,
  useUpdateTeamMutation,
} = teamAPI
