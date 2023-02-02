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
    <section className="flex flex-col w-full mx-2">
      <select className="w-60" name="match" id="match_1" onChange={handleSelected} value={selected}>
        <option value={'0'} disabled>
          --- Seleccione Serie ---{' '}
        </option>
        {Object.keys(SerieTeam).map(serie => (
          <option key={crypto.randomUUID()} value={serie}>
            Serie {serie}
          </option>
        ))}
      </select>

      <table className="table-auto w-full">
        <thead className="bg-black">
          <tr className="text-white">
            <th className="text-center">Pos</th>
            <th className="text-start w-[420px]">Equipo</th>
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
                <tr className="even:bg-white odd:bg-slate-200" key={crypto.randomUUID()}>
                  <td className="p-2 text-center">{i + 1}</td>
                  <td className="p-2 text-start flex flex-row items-start gap-4">
                    <TeamLogoDefault />
                    <span className="text-base">{team?.name}</span>
                  </td>
                  <td className="text-center">{gamesPlayed}</td>
                  <td className="text-center">{macthesWon}</td>
                  <td className="text-center">{matchesTied}</td>
                  <td className="text-center">{matchesLost}</td>
                  <td className="text-center">{goalsFor}</td>
                  <td className="text-center">{goalsAgainst}</td>
                  <td className="text-center">{goalDifference}</td>
                  <td className="text-center">{yellowCards}</td>
                  <td className="text-center">{redCards}</td>
                  <td className="text-center">{points}</td>
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
