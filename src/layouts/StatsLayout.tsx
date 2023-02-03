import { Outlet } from 'react-router'
import { StatsNav } from '../components/Navbars/StatsNav'

function StatsLayout() {
  return (
    <div>
      <h1 className="sm:hidden">ESTADISTICAS</h1>
      <div className="flex sm:flex-row flex-col">
        <StatsNav />
        <Outlet />
      </div>
    </div>
  )
}

export default StatsLayout
