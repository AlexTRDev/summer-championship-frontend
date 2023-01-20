import { Outlet } from 'react-router'
import App from '../App'
import { Navbar } from '../components'

function Layaout() {
  return (
    <div>
      <App />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layaout
