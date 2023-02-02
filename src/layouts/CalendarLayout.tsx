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
        <div className="bg-violet-500/50 p-4 w-full ">
          <div className="bg-white flex flex-col">
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
            <section className="p-2 bg-black/50">
              <div>
                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId !== null)
                  .map(calendar => (
                    <div
                      key={crypto.randomUUID()}
                      className="my-2 bg-rose-500 sm:py-2 grid grid-rows-3 items-center justify-center sm:grid-cols-3 sm:grid-rows-1 gap-4 hover:bg-gray-200"
                    >
                      <div className="text-base font-medium  gap-4  flex flex-grow justify-end items-center">
                        <h1>{calendar.homeTeam?.name}</h1>
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar.homeTeam.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault />
                        )}
                      </div>
                      <div className="flex bg-black/90 text-white gap-2 rounded items-center justify-center">
                        <h1 className="text-lg font-bold">{calendar.homeScore}</h1>
                        <h1 className="text-lg font-bold">-</h1>
                        <h1 className="text-lg font-bold">{calendar.awayScore}</h1>
                      </div>
                      <div className="text-base flex flex-grow justify-center sm:justify-start gap-4 items-center ">
                        {calendar?.homeTeam?.image ? (
                          <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                        ) : (
                          <TeamLogoDefault />
                        )}
                        <h1 className="font-medium">{calendar.awayTeam?.name}</h1>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col items-center mt-4 justify-center bg-blue-500">
                <h1 className="text-center text-xl font-bold ">Descansan</h1>
                {dataCalendars?.calendars
                  ?.filter(t => t.awayTeamId === null)
                  .map(calendar => (
                    <div
                      key={crypto.randomUUID()}
                      className="my-1 w-full flex flex-row flex-wrap justify-center items-center gap-4 py-2 bg-rose-500 hover:bg-gray-200"
                    >
                      <h1>{calendar.homeTeam?.name}</h1>
                      {calendar?.homeTeam?.image ? (
                        <img src={calendar?.homeTeam?.image} alt={'Team Logo'} />
                      ) : (
                        <TeamLogoDefault />
                      )}
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
