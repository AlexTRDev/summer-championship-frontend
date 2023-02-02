import React from 'react'
import { useGetPlayerStatsQuery, useGetTeamsQuery } from '../../../app'
import { TeamLogoDefault } from '../../../assets'

export interface AsistaintsInterface {}

const Asistaints: React.FC<AsistaintsInterface> = () => {
  const { data, isLoading, isError } = useGetPlayerStatsQuery({
    isInclude: 'isInclude=yes',
    order: 'order=numberAsists',
  })
  const { data: dataTeams, isLoading: isLoadingTeams } = useGetTeamsQuery()

  console.log(data)

  if (isLoading && isLoadingTeams) return <h1>Loading...</h1>
  if (isError) return <h1>Error in the query...</h1>
  return (
    <table className="table-auto w-full">
      <thead className="bg-black">
        <tr className="text-white">
          <th className="text-center">RANKING</th>
          <th className="text-start">EQUIPO</th>
          <th className="text-start">NOMBRE</th>
          <th className="text-center">PARTIDOS JUGADOS</th>
          <th className="text-center w-40">ASISTENCIAS</th>
        </tr>
      </thead>
      <tbody>
        {data?.playerStats?.map(({ gamesPlayed, numberAsists, player }, i) => {
          return (
            <tr className="even:bg-white odd:bg-slate-200" key={crypto.randomUUID()}>
              <td className="p-2 text-center">{i + 1}</td>
              <td className="p-2 text-start flex flex-row items-start gap-4">
                <TeamLogoDefault />
                <span className="text-base">{dataTeams?.teams.find(t => t.id === player.teamId)?.name}</span>
              </td>
              <td className="text-start">
                {player.name} {player.lastName}
              </td>
              <td className="text-center">{gamesPlayed}</td>
              <td className="text-center">{numberAsists}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Asistaints
