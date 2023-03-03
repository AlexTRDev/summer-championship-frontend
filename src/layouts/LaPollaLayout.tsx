// import { DocumentPDF } from '../components'

import { useEffect, useState } from 'react'
import { useGetCalendarsQuery, useGetJourneysQuery } from '../app/actions'
import { Loader, TablePolla } from '../components'
import { Ticket } from '../components/Forms/Ticket'
import { TicketResult } from '../components/Tickets'
import { IPrediction } from '../types/prediction'
import corporacion from '../assets/img/corporacion.jpg'

const options = ['L', 'E', 'V']

function LaPollaLayout() {
  const [selectDay, _setSelectDay] = useState('17,18')
  const [predictions, setPredictions] = useState<IPrediction[]>([])

  const { data, isLoading, error, isSuccess } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeys: `journeys=${selectDay}`,
  })
  const journeysQuery = useGetJourneysQuery()

  useEffect(() => {
    if (isSuccess) {
      const pred: IPrediction[] = data.calendars
        .filter(c => c.awayTeam !== null)
        .map(c => {
          return {
            calendarId: c.id ?? 0,
            result: '',
          }
        })

      setPredictions(pred)
    }
  }, [data?.calendars])

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const calendarId = Number(e.target.name)
    const result = e.target.value

    const index = predictions.findIndex(p => p.calendarId === calendarId)
    if (index !== -1) {
      predictions[index].result = result
      setPredictions([...predictions])
    }
  }

  if (journeysQuery.isLoading || isLoading) return <Loader />
  if (journeysQuery.error || error) return <h1>Upps!! Ocurrio un error con las Jornadas</h1>

  return (
    <div className="p-2 w-full">
      <h1 className="text-xl font-bold text-gray-500 p-2">LA POLLA</h1>
      <p className="text-gray-500 p-2 font-medium">
        El o las personas que tengan la mayor cantidad de aciertos se haran con el pozo acumulado... 🤑
      </p>
      <div className="my-2">
        <h3 className="text-gray-600 text-sm font-semibold">
          AUSPICIA: <span className="text-indigo-500">Corporación Santos B&R SAC</span>
        </h3>
        <figure className="text-gray-500 text-sm">
          <img src={corporacion} alt="sponsor" className="md:w-96" />
          <figcaption className="text-center sm:w-96">Reventón de la polla por S/. 500.00 soles</figcaption>
        </figure>
      </div>

      <div className="text-[10px]">
        {selectDay === '17,18' && (
          <section className="p-2 bg-transparent w-full">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2 ">
                {data?.calendars
                  ?.filter(t => t.awayTeamId !== null)
                  .sort((a, b) => a.journeyId - b.journeyId)
                  .map(({ id, number, homeTeam, awayTeam, journeyId }) => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 p-2">
                      <div className="shadow-lg shadow-gray-500 bg-gray-500 my-1 w-16 grid place-content-center rounded-l-lg">
                        <h3 className="w-full h-full  text-white text-center">{number}</h3>
                        <h3 className="w-full h-full  text-white text-center">
                          {journeyId === 17 ? '1º Fecha' : '2º Fecha'}
                        </h3>
                      </div>
                      <div className="h-14 sm:h-full p-1 shadow-lg shadow-gray-500 bg-gray-500  rounded-r-xl w-full my-1 text-white sm:py-2 flex flex-col sm:grid  items-center justify-center sm:grid-cols-3 sm:grid-rows-1 sm:gap-4">
                        <div className=" w-full  flex sm:gap-4  justify-center sm:justify-end items-start">
                          <h2 className=" w-4/5 ">{homeTeam?.name}</h2>
                          <h2 className=" w-4/5 ">{awayTeam?.name}</h2>
                        </div>

                        <div className="font-bold w-full h-full flex gap-1 sm:rounded items-center justify-center ">
                          {options.map(option => (
                            <div key={crypto.randomUUID()} className="grid grid-cols-2 gap-2 ">
                              <input
                                type="radio"
                                value={option}
                                checked={predictions.find(p => p.calendarId === id)?.result === option}
                                onChange={handleOptionChange}
                                name={`${id}` ?? ' '}
                                className={''}
                              />
                              <label>{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full p-2">
              {predictions.length >= 0 && data?.calendars && (
                <Ticket predictions={predictions} calendars={data?.calendars} />
              )}
            </div>
          </section>
        )}

        <p className="text-[9px] text-gray-500 p-2  font-medium ">
          *Participar: Para participar deberas recargar tu saldo mediante los metodos de pago disponibles y mandar la
          imagen del aporte. Posterior a su revision tendras tu saldo disponible en tu cuenta*
        </p>
        <p className="text-[9px] text-gray-500 p-2  font-medium ">
          *Premiacioón: La premiación al ganador(a) o ganadores se les estara haciendo entraga del mismo al finalizar
          todos los encuentros deportivos.
        </p>
        <p className="text-[9px] text-gray-500 p-2  font-medium ">
          *OJO: Por cada ticket comprado se estara comisionando el 10% del precio del ticket por el servicio*
        </p>
        {/* <>
          <div className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4" role="alert">
            <p className="font-bold">MANTENIMIENTO</p>
            <p>En el transcurso del dia se mostrara la tabla con los participantes</p>
          </div>
        </> */}

        {
          <div>
            {data?.calendars && <TicketResult journeys={selectDay} calendars={data?.calendars} />}
            <TablePolla jornada={selectDay} />
          </div>
        }
      </div>
    </div>
  )
}

export default LaPollaLayout
