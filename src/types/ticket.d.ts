import { ICalendar } from './calendar'

export interface ITicket {
  id?: number
  price: number
  pro: boolean
  createdAt?: string
  updatedAt?: string
  userId?: number
  calendars?: ICalendar[]
}
