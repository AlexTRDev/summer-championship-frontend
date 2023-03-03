import React, { useState } from 'react'
import { useGetJourneysQuery } from '../../../app/actions'
import { Loader } from '../../Loader'
import { Results } from '../Results'
export interface LaPollaInterface {}

const LaPolla: React.FC<LaPollaInterface> = () => {
  const [selectDay, setSelectDay] = useState('17,18')
  const journeysQuery = useGetJourneysQuery()

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    setSelectDay(e.target.value)
  }

  if (journeysQuery.isLoading) return <Loader />
  if (journeysQuery.error) return <h1>Upps!! Ocurrio un error con las Jornadas</h1>

  return (
    <div className="w-full bg-slate-100 p-2">
      <p className="text-md font-bold ">Resultados de la polla</p>

      <select
        className=" text-gray-500 font-medium border rounded outline-gray-500"
        name="match"
        id="match_1"
        onChange={handleSelectDay}
        value={selectDay}
      >
        <option value={0} disabled>
          {' '}
          Seleccionar Jornada
        </option>
        {journeysQuery.data?.journeys?.map(jouney => (
          <option key={crypto.randomUUID()} value={jouney.id}>
            Jornada {jouney.id}: {jouney.date}
          </option>
        ))}
      </select>
      {selectDay === '17,18' ? (
        <div className="w-full flex flex-row flex-wrap bg-slate-200 p-2">
          <Results journey={selectDay} ticketResult={54} />
        </div>
      ) : null}
    </div>
  )
}

export default LaPolla
