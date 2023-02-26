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
  const [selectDay, setSelectDay] = useState(13)
  const [predictions, setPredictions] = useState<IPrediction[]>([])

  const { data, isLoading, error, isSuccess } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeyId: `journeyId=${selectDay}`,
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

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    setSelectDay(Number(e.target.value))
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
        <select
          className="text-gray-500 font-medium border rounded outline-gray-500"
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

        {selectDay !== 10 && selectDay !== 12 && selectDay !== 13 ? (
          <h1 className="text-gray-500 p-2 font-medium">No hubo polla este dia</h1>
        ) : selectDay === 10 || selectDay === 12 ? (
          <h1 className="text-gray-500 p-2 font-medium">Polla {selectDay}</h1>
        ) : (
          <section className="p-2 bg-transparent w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2 ">
              {data?.calendars
                ?.filter(t => t.awayTeamId !== null)
                .map(({ id, number, homeTeam, awayTeam }) => (
                  <div key={crypto.randomUUID()} className="flex flex-row gap-1 p-2">
                    <div className="shadow-lg shadow-gray-500 bg-gray-500 my-1 w-12 grid place-content-center rounded-l-lg">
                      <h3 className="w-full h-full  text-white text-center">{number}</h3>
                      <h3 className="w-full h-full  text-white text-center">{homeTeam?.serie}</h3>
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
            <div className="flex flex-col items-center mt-4 justify-center bg-transparent">
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
                {data?.calendars
                  ?.filter(t => t.awayTeamId === null)
                  .map(calendar => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 w-full m-1">
                      <div className="shadow-lg shadow-gray-500 rounded-l-lg bg-gray-500 p-2 my-1 w-12 grid place-content-center">
                        <h3 className="w-full h-full  text-white text-center">{calendar.number}</h3>
                        <h3 className="w-full h-full  text-white text-center">{calendar.homeTeam?.serie}</h3>
                      </div>
                      <div className="shadow-lg shadow-gray-500 rounded-l-lg sm:rounded-l-none bg-gray-500 rounded-r-lg my-1 w-full flex flex-row flex-wrap justify-start items-center gap-4 p-2  text-white">
                        <h2 className=" ">{calendar.homeTeam?.name}</h2>
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
        {selectDay !== 10 && selectDay !== 12 && selectDay !== 13 ? (
          ''
        ) : (
          <div>
            {data?.calendars && <TicketResult journeyId={selectDay} calendars={data?.calendars} />}
            <TablePolla jornada={selectDay} />
          </div>
        )}
      </div>
    </div>
  )
}

export default LaPollaLayout
