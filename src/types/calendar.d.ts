import { IJourney } from './journey'
import { IPrediction } from './prediction'
import { ITeam } from './team'

export interface ICalendar {
  id?: number
  number: number
  homeScore: number
  awayScore: number
  homeTeamId: number
  awayTeamId?: number
  journeyId: number
  mvpId?: number
  homeTeam?: ITeam
  awayTeam?: ITeam
  Prediction?: IPrediction
}
