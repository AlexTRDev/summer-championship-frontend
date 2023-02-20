import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useGetPredictionQuery, useUpdatePredictionMutation } from '../../../app/actions'
import { Loader } from '../../Loader'
export interface IPropsResult {
  number: number
  calendarId: number
  ticketId: number
  homeTeam: string
  awayTeam: string
}

const Result: React.FC<IPropsResult> = ({ calendarId, ticketId, homeTeam, awayTeam, number }) => {
  const [result, setResult] = useState('')
  const [update] = useUpdatePredictionMutation()

  const {
    data: dataPrediction,
    isLoading,
    error,
  } = useGetPredictionQuery({
    calendarId,
    ticketId,
  })

  const handleResult = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setResult(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await update({
      calendarId,
      ticketId,
      result,
    })
  }

  useEffect(() => {
    if (dataPrediction?.data.result !== 'D') {
      setResult(dataPrediction?.data.result ?? '')
    }
  }, [dataPrediction?.data.result])

  if (isLoading) return <Loader />
  if (error) return <p>Upps!! Ocurrio un error</p>

  return (
    <div className="w-full p-2 my-2  sm:w-96">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 w-full shadow-lg shadow-black/50 p-2"
      >
        <p className="p-2 text-md font-bold text-white bg-black">Partido {number}</p>
        <p className=" flex-1 font-medium border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm ">
          {homeTeam}
        </p>
        <p className="flex-1 font-medium border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm ">
          {awayTeam}
        </p>
        <select
          className=" flex-1 font-medium border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          name={`partido-${dataPrediction?.data.calendarId}`}
          onChange={handleResult}
          value={result}
        >
          <option value={''} disabled>
            Resultado
          </option>
          <option value="L">{homeTeam}</option>
          <option value="V">{awayTeam}</option>
          <option value="E">Empate</option>
        </select>
        <p className=" flex-1 font-medium border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm ">
          Ganador: {result === 'L' ? homeTeam : result === 'V' ? awayTeam : result === 'E' ? 'Empate' : 'Fata definir'}
        </p>
        <button
          type="submit"
          className="w-full px-4 py-2 text-md font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
        >
          <span className="w-full">Guardar</span>
        </button>
      </form>
    </div>
  )
}

export default Result
