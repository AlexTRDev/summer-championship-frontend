import { ICalendar } from './calendar'
import { IResponse } from './response'

export interface ITicket {
  id?: number
  price: number
  pro: boolean
  createdAt?: string
  updatedAt?: string
  userId?: number
  calendars?: ICalendar[]
}

export interface IResponseTicket extends IResponse {
  data: ITicket
}

export interface IResponseTickets extends IResponse {
  tickets: ITicket[]
}

export interface IQueriesTicket extends IQueries {
  journeys?: string
}
