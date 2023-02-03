import { useState } from 'react'
import { useGetJourneysQuery, useGetCalendarsQuery } from '../app'
import { TeamLogoDefault } from '../assets'

function CalendarLayout() {
  const [selectDay, setSelectDay] = useState(1)
  const { data: dataCalendars, ...calendarsAPI } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeyId: `journeyId=${selectDay}`,
  })
  const { data: dataJourneys, ...dayAPI } = useGetJourneysQuery()

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    setSelectDay(Number(e.target.value))
  }

  if (calendarsAPI.isLoading || dayAPI.isLoading) return <h1>Loading...</h1>
  if (calendarsAPI.error || dayAPI.isError) return <h1>Error en la petición</h1>
  return (
    <>
      {/* <Match teams={teamAPI.data ?? []} /> */}
      <div>
        <div className="bg-white p-4 w-full ">
          <div className="bg-transparent flex flex-col">
            {/* select to journey */}
            <div className="text-2xl font-medium">
              <select name="match" id="match_1" onChange={handleSelectDay} value={selectDay}>
                <option value={0} disabled>
                  {' '}
                  Seleccionar Jornada
                </option>
                {dataJourneys?.journeys?.map(jouney => (
                  <option key={crypto.randomUUID()} value={jouney.id}>
                    Jornada {jouney.id}
                    {/* : {jouney.date} */}
                  </option>
                ))}
              </select>
            </div>
            <section className="p-2 bg-transparent">
              <div>
                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId !== null)
                  .map((calendar, i) => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 ">
                      <div className="bg-radical-red p-2 my-2 w-12 grid place-content-center rounded-l-lg ">
                        <h3 className="w-full h-full text-base sm:text-3xl  text-white text-center">{i + 1}</h3>
                      </div>
                      <div className="rounded-r-xl w-full my-2 p-2 bg-radical-red text-white sm:py-2 flex flex-col sm:grid  items-center justify-center sm:grid-cols-3 sm:grid-rows-1 sm:gap-4">
                        <div className=" w-full sm:gap-4 flex flex-grow justify-between sm:justify-end items-center">
                          <h2 className="text-xs sm:text-lg text-center">{calendar.homeTeam?.name}</h2>
                          {calendar?.homeTeam?.image ? (
                            <img src={calendar.homeTeam.image} alt={'Team Logo'} />
                          ) : (
                            <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[50px]" />
                          )}
                        </div>
                        <div className="sm:text-3xl bg-black text-radical-red w-full h-full flex gap-2 sm:rounded items-center justify-center">
                          <h2 className="font-bold ">{calendar.homeScore}</h2>
                          <h2 className="font-bold">-</h2>
                          <h2 className="font-bold">{calendar.awayScore}</h2>
                        </div>
                        <div className="w-full flex sm:flex-row flex-row-reverse flex-grow justify-between sm:justify-start  items-center sm:gap-4 ">
                          {calendar?.homeTeam?.image ? (
                            <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                          ) : (
                            <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[50px]" />
                          )}
                          <h2 className="text-xs sm:text-lg text-center">{calendar.awayTeam?.name}</h2>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col items-center mt-4 justify-center bg-transparent">
                <h1 className="text-start text-2xl font-bold w-full">Descansan</h1>

                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId === null)
                  .map((calendar, i) => (
                    <div key={crypto.randomUUID()} className="flex flex-row gap-1 w-full">
                      <div className="rounded-l-lg bg-radical-red p-2 my-1 w-12 grid place-content-center">
                        <h3 className="w-full h-full text-base sm:text-3xl  text-white text-center">{i + 1}</h3>
                      </div>
                      <div className="rounded-r-lg my-1 w-full flex flex-row flex-wrap justify-start items-center gap-4 p-2 bg-radical-red text-white">
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
