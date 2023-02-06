import { ITeam } from './team'

export interface ITeamStats {
  id?: number
  gamesPlayed: number
  macthesWon: number
  matchesLost: number
  matchesTied: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  yellowCards: number
  redCards: number
  points: number
  teamId: number
  team?: ITeam
}
