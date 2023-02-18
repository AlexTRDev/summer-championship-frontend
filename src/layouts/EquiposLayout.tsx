import { Outlet } from 'react-router'
import { useGetTeamsQuery } from '../app/actions'
import { Loader } from '../components'
import TeamCard from '../components/Cards/TeamCard'

function EquiposLayout() {
  const { data, error, isLoading } = useGetTeamsQuery()

  if (isLoading) return <Loader />
  if (error) return <h1 className="text-gray-500 text-xl font-medium">... Error en la petición ...</h1>

  return (
    <>
      <Outlet />
      <h1 className="text-2xl font-medium pt-2 pl-2 sm:hidden text-gray-500">Equipos</h1>
      <div className="flex flex-row flex-wrap justify-center items-center content-center gap-8 py-10 w-full px-4">
        {data?.teams.map((team, i) => (
          <TeamCard key={crypto.randomUUID()} team={team} linear={i % 6} />
        ))}
      </div>
    </>
  )
}

export default EquiposLayout
