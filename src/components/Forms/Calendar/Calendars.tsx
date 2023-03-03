import React, { useState } from 'react'
import { useCreateCalendarMutation, useGetJourneysQuery, useGetTeamsQuery } from '../../../app/actions'
import { CalendarLayout } from '../../../layouts'
import { ICalendar } from '../../../types/calendar'
import { Loader } from '../../Loader'

export interface MatchInterface {}

const initialState: ICalendar = {
  number: 1,
  homeScore: 0,
  awayScore: 0,
  homeTeamId: 0,
  awayTeamId: 0,
  journeyId: 17,
}

const Match: React.FC<MatchInterface> = () => {
  const [match, setMatch] = useState(initialState)
  const [createMatch, { isLoading: createLoading }] = useCreateCalendarMutation()
  const { data, isLoading, error } = useGetTeamsQuery()
  const { data: dataJourneys } = useGetJourneysQuery()

  const handleMatch = async (e: any) => {
    e.preventDefault()
    const calendar: ICalendar = {
      number: match.number,
      awayScore: match.awayScore,
      homeScore: match.homeScore,
      journeyId: match.journeyId,
      homeTeamId: match.homeTeamId,
    }

    if (match.awayTeamId !== 0) {
      calendar.awayTeamId = match.awayTeamId
    }
    await createMatch(calendar)

    setMatch({ ...initialState, journeyId: match.journeyId, number: match.number + 1 })
  }

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setMatch({ ...match, [e.target.name]: Number(e.target.value) })
  }

  if (isLoading) return <Loader />
  if (error) return <h1>{JSON.stringify(error)}</h1>

  return (
    <div className="w-full p-2">
      <form
        onSubmit={handleMatch}
        className="flex flex-col justify-center items-center shadow-lg p-2 shadow-black m-2 gap-y-2"
      >
        <h1 className="text-2xl font-bold border-b-2 w-full text-center bg-black text-white">Crear Fixture</h1>
        <select
          className="text-gray-500 font-medium border rounded outline-gray-500 w-full"
          name="journeyId"
          id="journey"
          onChange={handleSelect}
          value={match['journeyId']}
        >
          <option value={0} disabled>
            {' '}
            Seleccionar Jornada
          </option>
          {dataJourneys?.journeys?.map((journey, i) => (
            <option key={crypto.randomUUID()} value={journey.id}>
              {`Octavos ${i + 1}:  ${journey.date}`}
            </option>
          ))}
        </select>
        <div className="text-gray-500 flex flex-col w-full">
          <select name="number" id="partido" onChange={handleSelect} value={match['number']}>
            <option value={0} disabled>
              Número de partido
            </option>
            {Array.from({ length: 16 }, (v, i) => i + 1).map(i => (
              <option key={crypto.randomUUID()} value={i}>
                {i}
              </option>
            ))}
          </select>

          <select name="homeTeamId" id="home" onChange={handleSelect} value={match['homeTeamId']}>
            <option value={0} disabled>
              Local
            </option>
            {data?.teams?.map(team => (
              <option key={crypto.randomUUID()} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
          <p className="px-16">VS</p>
          <select name="awayTeamId" id="away" onChange={handleSelect} value={match['awayTeamId'] ?? 0}>
            <option value={0} disabled>
              Visitante
            </option>
            {data?.teams?.map(team => (
              <option key={crypto.randomUUID()} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="text-white font-semibold bg-blue-500 shadow-lg shadow-blue-500/50 rounded-lg w-32"
        >
          Crear{' '}
        </button>
      </form>
      {createLoading && <Loader />}
      <CalendarLayout />
    </div>
  )
}

export default Match
