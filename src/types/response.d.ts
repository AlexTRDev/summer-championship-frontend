import { ICalendar } from './calendar'
import { IJourney } from './journey'
import { IPlayer } from './person'
import { IPrediction } from './prediction'
import { ITeam } from './team'
import { ITeamStats } from './teamStats'
import { ITicket } from './ticket'
import { IUser } from './user'

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

export interface IResponseUser extends IResponse {
  user: IUser
}

export interface IResponseUsers extends IResponse {
  users: IUsers[]
}
export interface IResponseTickets extends IResponse {
  users: ITicket[]
}
export interface IResponseTicket extends IResponse {
  ticket: ITicket
}

export interface IResponsePrediction extends IResponse {
  prediction: IPrediction
}

export interface IResponsePredictions extends IResponse {
  predictions: IPrediction[]
}
