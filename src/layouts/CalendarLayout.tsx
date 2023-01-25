import { useState } from 'react'
import { useFindAllDaysQuery, useFindAllMatchsQuery, useFindAllTeamsQuery } from '../app'
// import { Match } from '../components'

function CalendarLayout() {
  const matchAPI = useFindAllMatchsQuery()
  const teamAPI = useFindAllTeamsQuery()
  const dayAPI = useFindAllDaysQuery()

  const [selectDay, setSelectDay] = useState(1)

  const handleSelectDay = (e: any) => {
    e.preventDefault()
    console.log(matchAPI.data)

    setSelectDay(Number(e.target.value))
  }

  if (matchAPI.isLoading || teamAPI.isLoading || dayAPI.isLoading) return <h1>Loading...</h1>
  if (matchAPI.error || teamAPI.error || dayAPI.isError) return <h1>Error en la petición</h1>
  return (
    <>
      {/* <Match teams={teamAPI.data ?? []} /> */}
      <div>
        <div className="bg-violet-500/50 p-4 w-full ">
          <div className="bg-white flex flex-col  ">
            <div className="text-2xl font-medium mb-4">
              <select name="match" id="match_1" onChange={handleSelectDay} value={selectDay}>
                <option value={0}>Jornadas</option>
                {dayAPI.data?.map(day => (
                  <option key={crypto.randomUUID()} value={day.id}>
                    Jornada {day.id}: {day.date}
                  </option>
                ))}
              </select>
            </div>
            {matchAPI?.data?.some(m => m.dayId === selectDay) &&
              matchAPI?.data?.map(match => (
                <div
                  key={crypto.randomUUID()}
                  className="bg-rose-500 sm:py-2 grid grid-rows-3 items-center justify-center sm:grid-cols-3 sm:grid-rows-1 gap-4    hover:bg-gray-200 border-b-2"
                >
                  <div className="text-base font-medium  gap-4  flex flex-grow justify-end items-center">
                    <h1>{teamAPI.data?.find(t => t.id === match.homeTeam)?.name}</h1>
                    <img
                      className="aspect-[30/30] w-[30px] h-[30px]"
                      src={`src/assets/img/${teamAPI.data?.find(t => t.id === match.homeTeam)?.logo}.png`}
                      alt={teamAPI.data?.find(t => t.id === match.homeTeam)?.name}
                    />
                  </div>
                  <div className="flex bg-black/90 text-white gap-2 rounded items-center justify-center">
                    <h1 className="text-lg font-bold">{match.homeScore}</h1>
                    <h1 className="text-lg font-bold">-</h1>
                    <h1 className="text-lg font-bold">{match.awayScore}</h1>
                  </div>
                  <div className="text-base flex flex-grow justify-center sm:justify-start gap-4 items-center ">
                    <img
                      className="aspect-[30/30] w-[30px] h-[30px]"
                      src={`src/assets/img/${teamAPI.data?.find(t => t.id === match.awayTeam)?.logo}.png`}
                      alt={teamAPI.data?.find(t => t.id === match.awayTeam)?.name}
                    />
                    <h1 className="font-medium">{teamAPI.data?.find(t => t.id === match.awayTeam)?.name}</h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarLayout
