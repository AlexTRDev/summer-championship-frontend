import React, { useState } from 'react'
import { useGetTeamStatsQuery } from '../../../app/actions/teamStats'
import { TeamLogoDefault } from '../../../assets'
import { SerieTeam } from '../../../types/enums'

export interface ClassificationInterface {}

const Classification: React.FC<ClassificationInterface> = () => {
  const [selected, setSelected] = useState(SerieTeam.A)
  const { data, isLoading, isError } = useGetTeamStatsQuery({ isInclude: 'isInclude=yes', serie: `serie=${selected}` })

  const handleSelected = (e: any) => {
    e.preventDefault()
    setSelected(e.target.value)
  }

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error in the query...</h1>

  return (
    <section className="flex flex-col w-full gap-2  p-2">
      <select
        className="w-44 text-gray-500 border rounded outline-gray-500"
        name="match"
        id="match_1"
        onChange={handleSelected}
        value={selected}
      >
        <option value={'0'} disabled>
          --- Seleccione Serie ---{' '}
        </option>
        {Object.keys(SerieTeam).map(serie => (
          <option key={crypto.randomUUID()} value={serie}>
            Serie {serie}
          </option>
        ))}
      </select>

      <table className="table-auto sm:w-full ">
        <thead>
          <tr className="text-gray-500 border-b text-[10px] sm:text-base">
            <th className="text-center">Pos</th>
            <th className="text-start ">Equipo</th>
            <th className="text-center">PJ</th>
            <th className="text-center">PG</th>
            <th className="text-center">PE</th>
            <th className="text-center">PP</th>
            <th className="text-center">GF</th>
            <th className="text-center">GC</th>
            <th className="text-center">DG</th>
            <th className="text-center">TA</th>
            <th className="text-center">TR</th>
            <th className="text-center">Pts</th>
          </tr>
        </thead>
        <tbody>
          {data?.teamStats?.map(
            (
              {
                gamesPlayed,
                macthesWon,
                matchesTied,
                matchesLost,
                goalsFor,
                goalsAgainst,
                goalDifference,
                yellowCards,
                redCards,
                points,
                team,
              },
              i
            ) => {
              return (
                <tr
                  // className=" h-10 text-[10px] sm:text-base bg-gradient-to-r even:from-cornflower-blue-600/80 even:to-cornflower-blue-400/80 odd:from-radical-red-600/80 odd:to-radical-red-400/80 text-white  hover:from-black/90 hover:to-black/90"
                  className=" h-10 text-[10px] sm:text-base even:bg-slate-200 text-gray-500  hover:from-black/90 hover:to-black/90"
                  key={crypto.randomUUID()}
                >
                  <td className="text-center">{i + 1}</td>
                  <td className="flex flex-row flex-wrap items-center h-10 sm:h-full sm:justify-start gap-x-1 sm:gap-x-2">
                    <TeamLogoDefault tailwind="hidden sm:flex fill-gray-500 w-[25px]" />
                    {team?.name}
                  </td>
                  <td className=" text-center">{gamesPlayed}</td>
                  <td className=" text-center">{macthesWon}</td>
                  <td className=" text-center">{matchesTied}</td>
                  <td className=" text-center">{matchesLost}</td>
                  <td className=" text-center">{goalsFor}</td>
                  <td className=" text-center">{goalsAgainst}</td>
                  <td className=" text-center">{goalDifference}</td>
                  <td className=" text-center">{yellowCards}</td>
                  <td className=" text-center">{redCards}</td>
                  <td className=" text-center">{points}</td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </section>
  )
}

export default Classification
