import { useGetCalendarsQuery } from '../app'
import { TeamLogoDefault } from '../assets'
import { Loader } from '../components'

function LaPollaLayout() {
  const { data, isLoading, error } = useGetCalendarsQuery({
    isInclude: 'isInclude=true',
    journeyId: `journeyId=8`,
  })
  if (isLoading) return <Loader />
  if (error) return <h1>Upps!! Ocurrio un error</h1>
  return (
    <section className="p-2 bg-transparent">
      <h1 className="sm:text-2xl font-bold text-gray-600">Jornada 8</h1>
      <div>
        {data?.calendars
          ?.filter(t => t.awayTeamId !== null)
          .map(calendar => (
            <div key={crypto.randomUUID()} className="flex flex-row gap-1 ">
              <div className="shadow-lg shadow-blue-500 bg-blue-600 p-2 my-2 w-12 grid place-content-center rounded-l-lg ">
                <h3 className="w-full h-full text-xl  text-white text-center">{calendar.number}</h3>
                <h3 className="w-full h-full text-xl  text-white text-center">{calendar.homeTeam?.serie}</h3>
              </div>
              <div className="shadow-lg shadow-blue-500 bg-blue-600  rounded-r-xl w-full my-2 p-2 text-white sm:py-2 flex flex-col sm:grid  items-center justify-center sm:grid-cols-3 sm:grid-rows-1 sm:gap-4">
                <div className=" w-full  flex sm:gap-4  justify-center sm:justify-end items-center">
                  <h2 className="text-xs sm:text-lg w-4/5 ">{calendar.homeTeam?.name}</h2>
                  {calendar?.homeTeam?.image ? (
                    <img src={calendar.homeTeam.image} alt={'Team Logo'} />
                  ) : (
                    <TeamLogoDefault tailwind="fill-white w-[25px] sm:w-[50px] sm:h-[50px]" />
                  )}
                </div>
                <div className="sm:text-3xl bg-black text-white w-full h-full flex gap-2 sm:rounded items-center justify-evenly">
                  <div>
                    <input className="w-6 h-6 mr-2" type="checkbox" id="home" name="home" />
                    <label htmlFor="home">L</label>
                  </div>
                  <div>
                    <input className="w-6 h-6 mr-2" type="checkbox" id="away" name="away" />
                    <label htmlFor="away">V</label>
                  </div>
                  {/* <h2 className="font-bold ">{calendar.homeScore}</h2>
                  <h2 className="font-bold">-</h2>
                  <h2 className="font-bold">{calendar.awayScore}</h2> */}
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

        {data?.calendars
          ?.filter(t => t.awayTeamId === null)
          .map(calendar => (
            <div key={crypto.randomUUID()} className="flex flex-row gap-1 w-full m-1">
              <div className="shadow-lg shadow-gray-500 rounded-l-lg bg-gray-600 p-2 my-1 w-12 grid place-content-center">
                <h3 className="w-full h-full text-xl  text-white text-center">{calendar.number}</h3>
                <h3 className="w-full h-full text-xl  text-white text-center">{calendar.homeTeam?.serie}</h3>
              </div>
              <div className="shadow-lg shadow-gray-500 rounded-l-lg sm:rounded-l-none bg-gray-600 rounded-r-lg my-1 w-full flex flex-row flex-wrap justify-start items-center gap-4 p-2  text-white">
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
  )
}

export default LaPollaLayout
