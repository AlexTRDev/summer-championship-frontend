import React from 'react'
import { useGetTicketsQuery } from '../../../app/actions'
import { ICalendar } from '../../../types/calendar'
import { Loader } from '../../Loader'
export interface TicketResultInterface {
  journeyId: number
  calendars: ICalendar[]
}

const TicketResult: React.FC<TicketResultInterface> = ({ journeyId, calendars }) => {
  const { data, isLoading, error } = useGetTicketsQuery({
    journeyId: `journeyId=${journeyId}`,
  })

  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <>
      <p className="text-gray-500">Resultados</p>
      <div className="grid grid-cols-2 bg-slate-100 text-gray-500">
        {calendars.map(calendar => (
          <div key={crypto.randomUUID()} className="p-2 text-[8px]">
            <p>{calendar.number}</p>
            <p>{calendar.homeTeam?.name}</p>
            <p>{calendar.awayTeam?.name}</p>
            <p className="text-[10px] font-semibold">
              {data?.tickets.find(t => t.userId === 4)?.calendars?.find(c => c.id === calendar.id)?.Prediction
                ?.result === 'D'
                ? 'Se les sumo a todos 1 acierto'
                : data?.tickets.find(t => t.userId === 4)?.calendars?.find(c => c.id === calendar.id)?.Prediction
                    ?.result === 'L'
                ? 'Local'
                : data?.tickets.find(t => t.userId === 4)?.calendars?.find(c => c.id === calendar.id)?.Prediction
                    ?.result === 'V'
                ? 'Visita'
                : 'Empate'}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default TicketResult
