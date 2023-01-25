import { Outlet } from 'react-router'
import { StatsNav } from '../components/Navbars/StatsNav'

function StatsLayout() {
  return (
    <div>
      <h1>Estadísticas</h1>
      <div className="flex flex-row ">
        <StatsNav />
        <Outlet />
      </div>
    </div>
  )
}

export default StatsLayout
