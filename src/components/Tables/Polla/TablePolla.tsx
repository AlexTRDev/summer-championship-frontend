import { useEffect, useState } from 'react'
import { useGetTicketsQuery, useGetUsersQuery } from '../../../app/actions'
import { IPrediction } from '../../../types/prediction'
import { Loader } from '../../Loader'

export interface PollaInterface {
  jornada: number
}

const headers = ['Pos', 'Nombre', 'Reventon', 'Aciertos']

const TablePolla: React.FC<PollaInterface> = ({ jornada }) => {
  const {
    data: dataTickets,
    isLoading,
    isError,
    isSuccess: ticketsSuccess,
  } = useGetTicketsQuery({
    journeyId: `journeyId=${jornada}`,
  })
  const { data: usersData, isSuccess: usersSuccess } = useGetUsersQuery()

  const [_results, setResults] = useState<IPrediction[]>([])

  useEffect(() => {
    if (usersSuccess && ticketsSuccess) {
      const predictions = dataTickets.tickets
        .find(t => t?.userId === 4)
        ?.calendars?.map(c => {
          return {
            calendarId: c.Prediction?.calendarId,
            result: c.Prediction?.result,
          }
        })
      setResults(predictions as IPrediction[])
    }
  }, [usersData?.users])

  if (isLoading) return <Loader />
  if (isError) return <h1>Upps!! Ocurrio un error con los de tickets</h1>

  return (
    <div className="p-2 w-full min-h-[200px] border-t ">
      <h1 className="text-blue-500 font-bold text-xl">
        PARTICIPANTES{' '}
        <span className="animate-pulse text-xl font-bold  text-radical-red">
          {dataTickets?.tickets.length ? dataTickets?.tickets.length - 1 : 0}
        </span>
      </h1>
      <h3 className="text-gray-600 text-xs">Polla Nº{jornada}</h3>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-gray-500 border-b text-[10px] sm:text-base">
            {headers.map((header, i) => (
              <th key={crypto.randomUUID()} className={`text-start`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersSuccess &&
            dataTickets?.tickets
              ?.filter(t => t.userId !== 4)
              .map((ticket, i) => {
                return {
                  number: i + 1,
                  name:
                    usersData?.users?.find(u => u.id === ticket.userId)?.name ??
                    usersData?.users?.find(user => user?.id === ticket?.userId)?.email,
                  reventon: ticket.pro ? 'Si' : 'No',
                  aciertos: ticket.calendars?.reduce((acc, calendar) => {
                    if (
                      calendar.Prediction?.result ===
                      dataTickets.tickets.find(t => t.userId === 4)?.calendars?.find(c => c.id === calendar.id)
                        ?.Prediction?.result
                    ) {
                      return acc + 1
                    }
                    return acc + 0
                  }, 0),
                }
              })
              .sort((a, b) => (b.aciertos ?? 0) - (a.aciertos ?? 0))
              .map(b => (
                <tr key={crypto.randomUUID()} className="text-gray-500 border-b text-[10px] sm:text-base">
                  <td className="text-start">{b.number}</td>
                  <td className="text-start">{b.name}</td>
                  {/* <td className="text-start">Ver</td> */}
                  <td className="text-start">{b.reventon}</td>
                  <td className="text-start">{b.aciertos}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePolla
