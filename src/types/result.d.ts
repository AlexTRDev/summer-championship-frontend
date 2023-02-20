import { ICalendar } from './calendar'
import { Result } from './enums'
import { IResponse } from './response'

export interface IResult {
  calendarId: number
  result: string
  calendar: ICalendar
}

export interface IResultRequest {
  token: string
  result: IResult
}

export interface IResultsRequest {
  token: string
  results: IResult[]
}

export interface IResultsResponse extends IResponse {
  results: IResult[]
}

export interface IResultResponse extends IResponse {
  result: IResult
}
