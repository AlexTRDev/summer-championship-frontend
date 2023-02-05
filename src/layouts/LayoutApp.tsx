import { useState } from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components'
import { Logos } from '../components/Logos'

function LayaoutApp() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div>
        <Logos />
        <Navbar toggle={toggleMenu} setToggle={setToggleMenu} />
      </div>
      <div className={`${toggleMenu ? 'hidden' : ''}`}>
        <Outlet />
      </div>
    </>
  )
}

export default LayaoutApp
