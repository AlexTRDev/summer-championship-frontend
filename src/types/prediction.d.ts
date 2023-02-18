import { ICalendar } from './calendar'
import { Result } from './enums'

export interface IPrediction {
  ticketId?: number
  calendarId: number
  result: Result | string
  createdAt?: string
  updatedAt?: string
}
