import React, { useState } from 'react'
import { useCreateCalendarMutation } from '../../app'
import { ICalendar } from '../../types/calendar'
import { ITeam } from '../../types/team'

export interface MatchInterface {
  teams: ITeam[]
}

const initialState: ICalendar = {
  homeScore: 0,
  awayScore: 0,
  homeTeamId: 0,
  awayTeamId: 0,
  journeyId: 0,
  mvpId: 0,
}

const Match: React.FC<MatchInterface> = ({ teams }) => {
  const [match, setMatch] = useState(initialState)
  const [createMatch] = useCreateCalendarMutation()

  const handleMatch = async (e: any) => {
    e.preventDefault()
    await createMatch({
      awayScore: Number(match.awayScore),
      homeScore: Number(match.homeScore),
      journeyId: 2,
      homeTeamId: Number(match.homeTeamId),
      awayTeamId: Number(match.awayTeamId),
      mvpId: 0,
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
        <select name="homeTeam" id="team_1" onChange={handleSelect} value={match['homeTeamId']}>
          <option value={0}>Team 1</option>
          {teams?.map(team => (
            <option key={crypto.randomUUID()} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <p className="px-16">VS</p>
        <select name="awayTeam" id="team_2" onChange={handleSelect} value={match['awayTeamId']}>
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
