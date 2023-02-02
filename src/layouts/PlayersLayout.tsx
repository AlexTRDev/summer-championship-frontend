import { useParams } from 'react-router'
import { useGetTeamQuery } from '../app'
import { TeamLogoDefault } from '../assets'
import { Player } from '../components'
import { colors, fills, gradients } from '../utils'

function PlayersLayout() {
  const { teamId } = useParams()

  const { data, isLoading, error } = useGetTeamQuery(Number(teamId))
  const fill = fills[(Number(teamId) - 1) % 6]
  const color = colors[(Number(teamId) - 1) % 6]
  const gradient = gradients[(Number(teamId) - 1) % 6]
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error en la petición</h1>

  return (
    <div className={`${color} ${gradient} p-4 relative `}>
      <div className="w-full flex items-center justify-start gap-4 p-4">
        {data?.team?.image ? (
          <img src={data?.team?.image} alt={'Team Logo'} />
        ) : (
          <TeamLogoDefault tailwind={`fill-white w-[100px] h-[100px] pl-2 z-10`} />
        )}
        <h1 className="text-white font-black text-5xl z-10">{data?.team.name}</h1>
        <TeamLogoDefault
          tailwind={`${fill} absolute w-screen h-screen top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] `}
        />
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-16 mt-16">
        {data?.team.players?.map(player => (
          <Player key={crypto.randomUUID()} player={player} />
        ))}
      </div>
    </div>
  )
}

export default PlayersLayout
