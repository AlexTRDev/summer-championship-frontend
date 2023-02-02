import React from 'react'
import { useGetPlayerStatsQuery, useGetTeamsQuery } from '../../../app'
import { TeamLogoDefault } from '../../../assets'

export interface ScorersInterface {}

const Scorers: React.FC<ScorersInterface> = () => {
  const { data, isLoading, isError } = useGetPlayerStatsQuery({
    isInclude: 'isInclude=yes',
    order: 'order=goalsScored',
  })
  const { data: dataTeams, isLoading: isLoadingTeams } = useGetTeamsQuery()

  if (isLoading && isLoadingTeams) return <h1>Loading...</h1>
  if (isError) return <h1>Error in the query...</h1>

  console.log(data)

  return (
    <table className="table-auto w-full">
      <thead className="bg-black">
        <tr className="text-white">
          <th className="text-center">RANKING</th>
          <th className="text-start">EQUIPO</th>
          <th className="text-start">NOMBRE</th>
          <th className="text-center">PARTIDOS JUGADOS</th>
          <th className="text-center w-40">GOLES</th>
        </tr>
      </thead>
      <tbody>
        {data?.playerStats?.map(({ gamesPlayed, goalsScored, player }, i) => {
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
              <td className="text-center">{goalsScored}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Scorers
