import React from 'react'
import { useGetPlayerStatsQuery, useGetTeamsQuery } from '../../../app/actions'
import { TeamLogoDefault } from '../../../assets'
import { Loader } from '../../Loader'

export interface ScorersInterface {}

const Scorers: React.FC<ScorersInterface> = () => {
  const { data, isLoading, isError } = useGetPlayerStatsQuery({
    isInclude: 'isInclude=yes',
    order: 'order=goalsScored',
  })
  const { data: dataTeams, isLoading: isLoadingTeams } = useGetTeamsQuery()

  if (isLoading && isLoadingTeams) return <Loader />
  if (isError) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <section className="p-2 w-full min-h-[200px]">
      <table className="table-auto w-full">
        <thead className="text-gray-500 border-b">
          <tr className="">
            <th className="text-center hidden sm:table-cell">Ranking</th>
            <th className="text-center sm:hidden">Rank</th>
            <th className="text-start">Equipo</th>
            <th className="text-start">Nombre</th>
            <th className="text-center hidden sm:table-cell">Partidos jugados</th>
            <th className="text-center sm:hidden">PJ</th>
            <th className="text-center">Goles</th>
          </tr>
        </thead>
        <tbody>
          {data?.playerStats?.map(({ gamesPlayed, goalsScored, player }, i) => {
            return (
              <tr
                className=" h-10 text-[10px] sm:text-base even:bg-slate-200 text-gray-500  hover:from-black/90 hover:to-black/90"
                key={crypto.randomUUID()}
              >
                <td className="p-2 text-center">{i + 1}</td>
                <td className="flex flex-row flex-wrap items-center h-10 sm:h-full sm:justify-start gap-x-1 sm:gap-x-2">
                  <TeamLogoDefault tailwind="hidden sm:flex fill-gray-500 w-[25px]" />
                  <span className="text-base">{dataTeams?.teams.find(t => t.id === player.teamId)?.name}</span>
                </td>
                <td className="text-start">
                  {player.lastName}, {player.name}
                </td>
                <td className="text-center">{gamesPlayed ? gamesPlayed : '?'}</td>
                <td className="text-center">{goalsScored}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Scorers
