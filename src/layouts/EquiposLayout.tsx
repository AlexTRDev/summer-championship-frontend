import { useFindAllTeamsQuery } from '../app'
import TeamCard from '../components/Cards/TeamCard'

function EquiposLayout() {
  const { data: teams, error, isLoading } = useFindAllTeamsQuery()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error en la petición</h1>
  return (
    <div className="flex flex-row flex-wrap justify-center items-center content-center">
      {teams?.map(team => (
        <TeamCard key={crypto.randomUUID()} team={team} />
      ))}
    </div>
  )
}

export default EquiposLayout
