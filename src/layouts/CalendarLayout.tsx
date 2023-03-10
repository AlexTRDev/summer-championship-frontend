import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useGetJourneysQuery, useGetCalendarsQuery, useRemoveCalendarMutation } from '../app/actions'
import { TeamLogoDefault } from '../assets'
import { Loader } from '../components'

function CalendarLayout() {
  const [admin, setAdmin] = useState(false)
  const [selectDay, setSelectDay] = useState('17')

  const location = useLocation()

  const {
    data: dataCalendars,
    isLoading: calendarLoading,
    error: calendarError,
  } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeys: `journeys=${selectDay}`,
  })
  const { data: dataJourneys, isLoading: dayLoading, error: dayError } = useGetJourneysQuery()
  const [deleteCalendar, { isLoading: deleteLoading }] = useRemoveCalendarMutation()

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    setSelectDay(e.target.value)
  }

  const handleDelete = async (id: number) => {
    await deleteCalendar(id)
  }

  useEffect(() => {
    if (location.pathname === '/admin/calendars') setAdmin(true)
  }, [location.pathname])

  if (calendarLoading || dayLoading || deleteLoading) return <Loader />
  if (calendarError || dayError)
    return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <>
      <div>
        <h1 className="text-2xl font-medium pt-2 pl-2 sm:hidden text-gray-500">Calendario</h1>

        <div className="bg-white p-4 w-full ">
          <div className="bg-transparent flex flex-col">
            {/* select to journey */}
            <div>
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
                {dataJourneys?.journeys?.map((journey, i) => (
                  <option key={crypto.randomUUID()} value={journey.id}>
                    {`Octavos ${i + 1}:  ${journey.date}`}
                  </option>
                ))}
              </select>
            </div>
            <section className="p-2 bg-transparent">
              <div>
                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId !== null)
                  .map(calendar => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 relative">
                      {admin && (
                        <button
                          className="absolute text-white border-2 font-bold w-7 rounded-full top-4 left-2 sm:top-3 sm:right-2 sm:left-auto"
                          onClick={() => handleDelete(calendar.id as number)}
                        >
                          X
                        </button>
                      )}
                      <div className="shadow-lg shadow-radical-red bg-radical-red p-2 my-2 w-12 grid place-content-center rounded-l-lg ">
                        <h3 className="w-full h-full text-xl  text-white text-center">{calendar.number}</h3>
                        <h3 className="w-full h-full text-xl  text-white text-center">{calendar.homeTeam?.serie}</h3>
                      </div>
                      <div className="shadow-lg shadow-radical-red bg-radical-red  rounded-r-xl w-full my-2 p-2 text-white sm:py-2 flex flex-col sm:grid  items-center justify-center sm:grid-cols-3 sm:grid-rows-1 sm:gap-4">
                        <div className=" w-full  flex sm:gap-4  justify-center sm:justify-end items-center">
                          <h2 className="text-xs sm:text-lg w-4/5 ">{calendar.homeTeam?.name}</h2>
                          {calendar?.homeTeam?.image ? (
                            <img src={calendar.homeTeam.image} alt={'Team Logo'} />
                          ) : (
                            <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[50px] sm:h-[50px]" />
                          )}
                        </div>
                        <div className="sm:text-3xl bg-black text-radical-red w-full h-full flex gap-2 sm:rounded items-center justify-center">
                          <h2 className="font-bold ">{calendar.homeScore}</h2>
                          <h2 className="font-bold">-</h2>
                          <h2 className="font-bold">{calendar.awayScore}</h2>
                        </div>
                        <div className=" w-full  flex sm:gap-4 flex-row-reverse sm:flex-row justify-center  sm:justify-start items-center">
                          {calendar?.homeTeam?.image ? (
                            <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                          ) : (
                            <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[50px]" />
                          )}
                          <h2 className="text-xs sm:text-lg w-4/5 ">{calendar.awayTeam?.name}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col items-center mt-4 justify-center bg-transparent">
                <h1 className="text-start text-2xl font-bold w-full">Descansan</h1>

                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId === null)
                  .map(calendar => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 w-full m-1 relative">
                      {admin && (
                        <button
                          className="absolute text-white border-2 font-bold w-7 rounded-full top-4 left-2 sm:top-3 sm:right-2 sm:left-auto"
                          onClick={() => handleDelete(calendar.id as number)}
                        >
                          X
                        </button>
                      )}
                      <div className="shadow-lg shadow-radical-red rounded-l-lg bg-radical-red p-2 my-1 w-12 grid place-content-center">
                        <h3 className="w-full h-full text-xl  text-white text-center">{calendar.number}</h3>
                        <h3 className="w-full h-full text-xl  text-white text-center">{calendar.homeTeam?.serie}</h3>
                      </div>
                      <div className="shadow-lg shadow-radical-red rounded-r-lg my-1 w-full flex flex-row flex-wrap justify-start items-center gap-4 p-2 bg-radical-red text-white">
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault tailwind="fill-white w-[33px] sm:w-[50px]" />
                        )}
                        <h2 className=" text-xs sm:text-xl">{calendar.homeTeam?.name}</h2>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarLayout
