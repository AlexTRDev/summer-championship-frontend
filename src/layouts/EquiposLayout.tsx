import { Outlet } from 'react-router'
import { useGetTeamsQuery } from '../app'
import TeamCard from '../components/Cards/TeamCard'

function EquiposLayout() {
  const { data, error, isLoading } = useGetTeamsQuery()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error en la petición</h1>
  return (
    <>
      <Outlet />
      <div className="flex flex-row flex-wrap justify-center items-center content-center gap-8 py-10">
        {data?.teams.map((team, i) => (
          <TeamCard key={crypto.randomUUID()} team={team} linear={i % 6} />
        ))}
      </div>
    </>
  )
}

export default EquiposLayout
