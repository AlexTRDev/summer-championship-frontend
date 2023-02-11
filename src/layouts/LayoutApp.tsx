import { useState } from 'react'
import { Outlet } from 'react-router'
import { Footer, Navbar } from '../components'
import { Logos } from '../components/Logos'

function LayaoutApp() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <header className="">
        <Logos />
        <Navbar toggle={toggleMenu} setToggle={setToggleMenu} />
      </header>
      <div className={`${toggleMenu ? 'hidden' : 'grow '}`}>
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default LayaoutApp
