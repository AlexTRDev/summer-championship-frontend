import React, { useState } from 'react'
import { useGetTeamStatsQuery, useUpdateTeamStatsMutation } from '../../../app/actions'
import { ITeamStats } from '../../../types/teamStats'
import { Loader } from '../../Loader'
import { Classification } from '../../Tables/Classification'
export interface TeamStatsInterface {}

const initialState: ITeamStats = {
  gamesPlayed: 0,
  macthesWon: 0,
  matchesLost: 0,
  matchesTied: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  goalDifference: 0,
  yellowCards: 0,
  redCards: 0,
  points: 0,
  teamId: 0,
}

const TeamStats: React.FC<TeamStatsInterface> = () => {
  const [selected, setSelected] = useState('')
  const { data, isLoading, isError } = useGetTeamStatsQuery({ isInclude: 'isInclude=yes', serie: '' })
  const [teamStats, setTeamStats] = useState(initialState)
  const [updateStats, { error }] = useUpdateTeamStatsMutation()

  const handleSelected = (e: any) => {
    e.preventDefault()
    setSelected(e.target.value)
    const team = data?.teamStats?.find(team => team?.team?.name === e.target.value)
    if (team) {
      setTeamStats(team)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    if (name === 'gamesPlayed') {
      setTeamStats({
        ...teamStats,
        [name]: Number(value),
        ['macthesWon']: 0,
        ['matchesLost']: 0,
        ['matchesTied']: 0,
      })
    }

    if (name === 'macthesWon') {
      const rango = Number(value) % (teamStats.gamesPlayed + 1)
      const macthesWon = Number(value) === rango ? rango : rango
      setTeamStats({
        ...teamStats,
        [name]: rango,
        ['points']: macthesWon * 3 + teamStats.matchesTied,
        ['matchesLost']: 0,
        ['matchesTied']: 0,
      })
    }
    if (name === 'matchesLost') {
      setTeamStats({
        ...teamStats,
        [name]: Number(value) % (teamStats.gamesPlayed - teamStats.macthesWon + 1),
        ['matchesTied']: 0,
      })
    }
    if (name === 'matchesTied') {
      const rango = Number(value) % (teamStats.gamesPlayed - (teamStats.matchesLost + teamStats.macthesWon) + 1)
      const matchesTied = Number(value) === rango ? rango : rango
      setTeamStats({
        ...teamStats,
        [name]: rango,
        ['points']: teamStats.macthesWon * 3 + matchesTied,
      })
    }
    if (name === 'goalsFor') {
      setTeamStats({
        ...teamStats,
        [name]: Number(value),
        ['goalDifference']: Number(value) - teamStats.goalsAgainst,
      })
    }
    if (name === 'goalsAgainst') {
      setTeamStats({
        ...teamStats,
        [name]: Number(value),
        ['goalDifference']: teamStats.goalsFor - Number(value),
      })
    }
    if (name === 'yellowCards' || name === 'redCards') {
      setTeamStats({
        ...teamStats,
        [name]: Number(value),
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateStats(teamStats)
    alert('Update Successful')
    setTeamStats(initialState)
    setSelected('')
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setTeamStats(initialState)
    setSelected('')
  }

  if (isLoading) return <Loader />
  if (isError || error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>
  return (
    <div className="grid place-content-center">
      <label>
        Elije el equipo:
        <input list="equipos" onChange={handleSelected} value={selected} />
      </label>

      <datalist id="equipos">
        {data?.teamStats.map(({ team }) => (
          <option key={crypto.randomUUID()} value={team?.name} />
        ))}
      </datalist>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 ">
        <label htmlFor="gamesPlayed">PJ</label>
        <input
          type="number"
          name="gamesPlayed"
          id="gamesPlayed"
          onChange={e => handleChange(e)}
          value={teamStats.gamesPlayed}
          min={0}
        />

        <label htmlFor="macthesWon">PG</label>
        <input
          type="number"
          name="macthesWon"
          id="macthesWon"
          onChange={handleChange}
          value={teamStats.macthesWon}
          min={0}
        />

        <label htmlFor="matchesLost">PP</label>
        <input
          type="number"
          name="matchesLost"
          id="matchesLost"
          onChange={handleChange}
          value={teamStats.matchesLost}
          min={0}
        />

        <label htmlFor="matchesTied">PE</label>
        <input
          type="number"
          name="matchesTied"
          id="matchesTied"
          onChange={handleChange}
          value={teamStats.matchesTied}
          min={0}
        />

        <label htmlFor="goalsFor">GF</label>
        <input type="number" name="goalsFor" id="goalsFor" onChange={handleChange} value={teamStats.goalsFor} min={0} />

        <label htmlFor="goalsAgainst">GC</label>
        <input
          type="number"
          name="goalsAgainst"
          id="goalsAgainst"
          onChange={handleChange}
          value={teamStats.goalsAgainst}
          min={0}
        />

        <label htmlFor="goalDifference">DG</label>
        <input
          type="number"
          name="goalDifference"
          id="goalDifference"
          onChange={handleChange}
          value={teamStats.goalDifference}
        />

        <label htmlFor="yellowCards">TA</label>
        <input
          type="number"
          name="yellowCards"
          id="yellowCards"
          onChange={handleChange}
          value={teamStats.yellowCards}
          min={0}
        />

        <label htmlFor="redCards">TR</label>
        <input type="number" name="redCards" id="redCards" onChange={handleChange} value={teamStats.redCards} min={0} />

        <label htmlFor="points">Pts</label>
        <input type="number" name="points" id="points" onChange={handleChange} value={teamStats.points} min={0} />

        <button>Guardar</button>
        <button onClick={handleReset}>Limpiar</button>
      </form>
      <div>
        <Classification />
      </div>
    </div>
  )
}

export default TeamStats
