import { ICalendar } from './calendar'
import { IJourney } from './journey'
import { IPlayer } from './person'
import { IPlayerStats } from './playerStats'
import { IPrediction } from './prediction'
import { ITeam } from './team'
import { ITeamStats } from './teamStats'

export interface IResponse {
  status: string
}

export interface IResponseTeam extends IResponse {
  team: ITeam
}

export interface IResponseTeams extends IResponse {
  teams: ITeam[]
}

export interface IResponseCalendars extends IResponse {
  calendars: ICalendar[]
}

export interface IResponseJourneys extends IResponse {
  journeys: IJourney[]
}

export interface IResponseTeamStats extends IResponse {
  teamStats: ITeamStats[]
}

export interface IResponsePlayerStats extends IResponse {
  playerStats: IPlayerStats[]
}

export interface IResponsePlayer extends IResponse {
  players: IPlayer[]
}

export interface IResponsePrediction extends IResponse {
  prediction: IPrediction
}

export interface IResponsePredictions extends IResponse {
  predictions: IPrediction[]
}
