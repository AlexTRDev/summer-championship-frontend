import { IJourney } from './journey'
import { ITeam } from './team'

export interface ICalendar {
  id?: number
  homeScore: number
  awayScore: number
  homeTeamId: number
  awayTeamId: number
  journeyId: number
  mvpId: number
  homeTeam?: ITeam
  awayTeam?: ITeam
}