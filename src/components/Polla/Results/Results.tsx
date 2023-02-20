import React from 'react'
import { useGetCalendarsQuery } from '../../../app/actions'
import { Loader } from '../../Loader'
import Result from '../Result/Result'

export interface IPropsResults {
  journey: number
}

const Results: React.FC<IPropsResults> = ({ journey }) => {
  const { data, isLoading, error } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeyId: `journeyId=${journey}`,
  })

  if (isLoading) return <Loader />
  if (error) return <p>Upps! Ocurrio un error</p>

  return (
    <div className="w-full flex flex-row flex-wrap gap-2 items-center justify-center">
      {data?.calendars?.map(calendar => (
        <Result
          key={crypto.randomUUID()}
          number={calendar.number}
          calendarId={calendar?.id as number}
          ticketId={11}
          homeTeam={calendar.homeTeam?.name as string}
          awayTeam={calendar.awayTeam?.name as string}
        />
      ))}
    </div>
  )
}

export default Results
