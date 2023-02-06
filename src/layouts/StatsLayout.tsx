import { Outlet } from 'react-router'
import { StatsNav } from '../components/Navbars/StatsNav'

function StatsLayout() {
  return (
    <>
      <h1 className="text-2xl font-medium pt-2 pl-2 sm:hidden text-gray-500">Estadisticas</h1>
      <div className="flex sm:flex-row flex-col w-full">
        <StatsNav />
        <Outlet />
      </div>
    </>
  )
}

export default StatsLayout
