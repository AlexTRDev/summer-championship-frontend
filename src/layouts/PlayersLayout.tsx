import { useParams } from 'react-router'
import { useGetTeamQuery } from '../app'
import { TeamLogoDefault } from '../assets'
import { Loader, PlayerPro } from '../components'
import { colors, fills, gradients } from '../utils'

function PlayersLayout() {
  const { teamId } = useParams()

  const { data, isLoading, error } = useGetTeamQuery(Number(teamId))
  const fill = fills[(Number(teamId) - 1) % 6]
  const color = colors[(Number(teamId) - 1) % 6]
  const gradient = gradients[(Number(teamId) - 1) % 6]
  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <div className={`${color} ${gradient} p-4 relative sm:min-h-screen`}>
      <h1 className="text-2xl font-medium p-2 sm:hidden text-white">Jugadores</h1>

      <div className="w-full flex flex-wrap items-center justify-center gap-2">
        {data?.team?.image ? (
          <img src={data?.team?.image} alt={'Team Logo'} />
        ) : (
          <TeamLogoDefault tailwind={`fill-white sm:w-[100px] sm:h-[100px] pl-2 z-10`} />
        )}
        <h1 className="text-white text-center font-black text-xl sm:text-5xl z-10">{data?.team.name}</h1>
        <TeamLogoDefault
          tailwind={`${fill} absolute w-full h-full top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] `}
        />
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-16 mt-10">
        {data?.team.players?.map(player => (
          <PlayerPro key={crypto.randomUUID()} player={player} />
        ))}
      </div>
    </div>
  )
}

export default PlayersLayout
