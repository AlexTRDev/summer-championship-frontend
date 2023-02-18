import React from 'react'
import { useGetTeamsQuery, useGetTicketsQuery } from '../../app/actions'
import { selectUser } from '../../app/api/userSlice'
import { useAppSelector } from '../../app/hooks'
import { Loader } from '../Loader'
export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  const user = useAppSelector(selectUser)
  const { data, isLoading, isError } = useGetTicketsQuery({
    journeyId: `journeyId=${10}`,
  })

  const { data: teamsData, isLoading: teamsLoading } = useGetTeamsQuery()

  if (isLoading && teamsLoading) return <Loader />
  if (isError) return <h1>Upps!! Ocurrio un error con los de tickets</h1>

  return (
    <div className="w-full p-2">
      <h1 className="text-xl text-gray-700 font-medium">Mis Tickets</h1>
      {data?.tickets
        .filter(t => t.userId === user?.id)
        .map((t, i) => (
          <div>
            <h3 className="text-xs text-gray-700 flex justify-evenly m-2">
              <span>Ticket Nº{i + 1}</span>{' '}
              <span className="text-xs text-gray-700">Polla Nº {t.calendars?.[0]?.journeyId}</span>
            </h3>

            <table className="table-auto w-full text-[10px] text-gray-500">
              <thead>
                <tr className="border-b-2">
                  <th>Pos</th>
                  <th>Local</th>
                  <th>Visitante</th>
                  <th>Mi Predicción</th>
                </tr>
              </thead>
              <tbody>
                {t?.calendars?.map(c => {
                  return (
                    <tr className="even:bg-blue-200 odd:bg-radical-red-100 h-10">
                      <td className="text-center">{c.number}</td>
                      <td className="text-center">{teamsData?.teams.find(t => t.id === c.homeTeamId)?.name}</td>
                      <td className="text-center">{teamsData?.teams.find(t => t.id === c.awayTeamId)?.name}</td>
                      <td className="text-center">{c.Prediction?.result}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  )
}

export default Profile
