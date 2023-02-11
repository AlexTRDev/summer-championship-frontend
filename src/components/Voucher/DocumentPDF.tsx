import { useState } from 'react'
import { useGetCalendarsQuery, useGetJourneysQuery } from '../../app'
import { TeamLogoDefault } from '../../assets'
import { Loader } from '../Loader'
import { TablePolla } from '../Tables'
import Voucher from './Voucher'

const initialState: any = {}

const DocumentPDF = () => {
  const options = ['L', 'E', 'V']

  const [selectedOption, setSelectedOption] = useState(initialState)
  const [selectDay, setSelectDay] = useState(1)

  const { data, isLoading, error } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeyId: `journeyId=${selectDay}`,
  })

  const journeysQuery = useGetJourneysQuery()

  if (journeysQuery.isLoading) return <Loader />
  if (journeysQuery.error) return <h1>Upps!! Ocurrio un error con las Jornadas</h1>

  if (isLoading) return <Loader />
  if (error) return <h1>Upps!! Ocurrio un error con el calenderio de partidos</h1>

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSelectedOption({
      ...selectedOption,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    setSelectDay(Number(e.target.value))
  }

  return (
    <>
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
      {selectDay === 8 || selectDay === 9 ? (
        <>
          <section className="p-2 bg-transparent w-full text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data?.calendars
                ?.filter(t => t.awayTeamId !== null)
                .map(calendar => (
                  <div key={crypto.randomUUID()} className="flex flex-row gap-1">
                    <div className="shadow-lg shadow-blue-500 bg-blue-600 p-2 my-2 w-12 grid place-content-center rounded-l-lg ">
                      <h3 className="w-full h-full  text-white text-center">{calendar.number}</h3>
                      <h3 className="w-full h-full  text-white text-center">{calendar.homeTeam?.serie}</h3>
                    </div>
                    <div className="shadow-lg shadow-blue-500 bg-blue-600  rounded-r-xl w-full my-2 p-2 text-white sm:py-2 flex flex-col sm:grid  items-center justify-center sm:grid-cols-3 sm:grid-rows-1 sm:gap-4">
                      <div className=" w-full  flex sm:gap-4  justify-center sm:justify-end items-center">
                        <h2 className=" w-4/5 ">{calendar.homeTeam?.name}</h2>
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar.homeTeam.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[35px] sm:h-[35px]" />
                        )}
                      </div>
                      <div className="bg-black text-base text-white w-full h-full flex gap-2 sm:rounded items-center justify-evenly">
                        {new Date().getTime() > new Date('2023-02-11T07:00:00').getTime() ? (
                          <h1> ? </h1>
                        ) : (
                          options.map(option => (
                            <div key={crypto.randomUUID()} className="grid grid-cols-2 gap-2 p-1 font-semibold">
                              <input
                                id={`${calendar.number} - ${calendar.homeTeam?.name} - ${calendar.awayTeam?.name}`}
                                type="radio"
                                value={option}
                                checked={
                                  selectedOption[
                                    calendar.number + ' - ' + calendar.homeTeam?.name + ' - ' + calendar.awayTeam?.name
                                  ] === option
                                }
                                onChange={handleOptionChange}
                                name={`${calendar.number} - ${calendar.homeTeam?.name} - ${calendar.awayTeam?.name}`}
                                className={'w-5 h-5'}
                              />
                              <label>{option}</label>
                            </div>
                          ))
                        )}
                      </div>
                      <div className=" w-full  flex sm:gap-4 flex-row-reverse sm:flex-row justify-center  sm:justify-start items-center">
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[35px]" />
                        )}
                        <h2 className=" w-4/5 ">{calendar.awayTeam?.name}</h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-4 justify-center bg-transparent">
              <h1 className="text-lg font-bold text-gray-600 text-start  w-full">Descansan</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
                {data?.calendars
                  ?.filter(t => t.awayTeamId === null)
                  .map(calendar => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 w-full m-1">
                      <div className="shadow-lg shadow-gray-500 rounded-l-lg bg-gray-600 p-2 my-1 w-12 grid place-content-center">
                        <h3 className="w-full h-full  text-white text-center">{calendar.number}</h3>
                        <h3 className="w-full h-full  text-white text-center">{calendar.homeTeam?.serie}</h3>
                      </div>
                      <div className="shadow-lg shadow-gray-500 rounded-l-lg sm:rounded-l-none bg-gray-600 rounded-r-lg my-1 w-full flex flex-row flex-wrap justify-start items-center gap-4 p-2  text-white">
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault tailwind="fill-white w-[33px] sm:w-[35px]" />
                        )}
                        <h2 className=" ">{calendar.homeTeam?.name}</h2>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full grid place-content-center">
              <Voucher data={selectedOption} jornada={selectDay} />
            </div>
          </section>
          <p className="text-[10px] text-gray-500 p-2  font-medium ">
            *Participar: Para participar deberas descargar tu ticket con tus predicciones y contactarte con alguno de
            los encargados y mandar la copia de tu ticket mas la imagen del aporte. *
          </p>
          <p className="text-[10px] text-gray-500 p-2  font-medium ">
            *Premiacioón: La premiación al ganad@r o ganadores se les estara haciendo entraga del mismo al finalizar
            todos los encuentros deportivos en el mismo recinto de dicho campeonato(Coliseo Predro Coronado Alamo)*
          </p>
          <p className="text-[10px] text-gray-500 p-2  font-medium ">
            *OJO: Por cada ticket comprado se estara comisionando 0.50 centimos por el servicio*
          </p>
          <TablePolla jornada={selectDay} />
        </>
      ) : (
        <h1>NO HUBO POLLA EN ESA FECHA...!!</h1>
      )}
    </>
  )
}

export default DocumentPDF
