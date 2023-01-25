import { Outlet } from 'react-router'
import { useFindAllTeamsQuery } from '../app'
import { Navbar } from '../components'
import { Logos } from '../components/Logos'

function LayaoutApp() {
  const { data: teams, error, isLoading } = useFindAllTeamsQuery()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error en la petición</h1>
  return (
    <>
      <div>
        <Logos teams={teams ?? []} />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default LayaoutApp
