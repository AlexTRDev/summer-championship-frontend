import { Outlet } from 'react-router'
import { Navbar } from '../components'
import { Logos } from '../components/Logos'

function LayaoutApp() {
  return (
    <>
      <div>
        <Logos />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default LayaoutApp
