import { ICalendar } from './calendar'
import { Result } from './enums'
import { IResponse } from './response'

export interface IPrediction {
  ticketId?: number
  calendarId: number
  result: Result | string
  createdAt?: string
  updatedAt?: string
}

export interface IPredictionRequest {
  predictions: IPrediction[]
  ticket: ITicket
  token: string
}

export interface IRequestPrediction {
  ticketId: number
  calendarId: number
  result?: string
}

export interface IResponsePrediction extends IResponse {
  data: IPrediction
}
export interface IResponsePredictions extends IResponse {
  data: IPrediction[]
}
