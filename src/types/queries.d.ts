export interface IQueries {
  isInclude?: string
}

export interface IQueriesTeamStats extends IQueries {
  serie?: SerieTeam
}

export interface IQueriesPlayerStats extends IQueries {
  order?: string
}

export interface IQueriesCalendar extends IQueries {
  journeys?: string
}
export interface IQueriesUser extends IQueries {
  transactionId?: string
}
