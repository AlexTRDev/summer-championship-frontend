import React, { useState } from 'react'
import { useCreateMatchMutation, useFindAllMatchsQuery } from '../../app'
import { MatchAttributes } from '../../types/match'
import { Team } from '../../types/team'

export interface MatchInterface {
  teams: Team[]
}

const initialState: MatchAttributes = {
  dayId: 0,
  homeTeam: 0,
  awayTeam: 0,
  awayScore: 0,
  homeScore: 0,
}

const Match: React.FC<MatchInterface> = ({ teams }) => {
  const [match, setMatch] = useState(initialState)
  const { data } = useFindAllMatchsQuery()
  const [createMatch] = useCreateMatchMutation()

  const handleMatch = async (e: any) => {
    e.preventDefault()
    await createMatch({
      id: data ? data.length + 1 : 1,
      awayScore: Number(match.awayScore),
      homeScore: Number(match.homeScore),
      dayId: 2,
      homeTeam: Number(match.homeTeam),
      awayTeam: Number(match.awayTeam),
    })
  }

  const handleSelect = (e: any) => {
    e.preventDefault()
    setMatch({ ...match, [e.target.name]: e.target.value })
  }

  return (
    <form
      onSubmit={handleMatch}
      className="w-96 flex flex-col justify-center items-center shadow-lg p-4 shadow-black m-2 gap-y-4"
    >
      <h1 className="text-2xl font-bold border-b-2 w-full text-center bg-black text-white">Crear Fixture</h1>
      {/* <div>
        <input type="date" name="date" id="date" onChange={handleSelect} />
      </div> */}
      <div className="flex flex-col flex-wrap">
        <select name="homeTeam" id="team_1" onChange={handleSelect} value={match['homeTeam']}>
          <option value={0}>Team 1</option>
          {teams?.map(team => (
            <option key={crypto.randomUUID()} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <p className="px-16">VS</p>
        <select name="awayTeam" id="team_2" onChange={handleSelect} value={match['awayTeam']}>
          <option value="">Team 2</option>
          {teams?.map(team => (
            <option key={crypto.randomUUID()} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-500 shadow-lg shadow-blue-500/50 rounded-lg w-32">
        Crear{' '}
      </button>
    </form>
  )
}

export default Match
