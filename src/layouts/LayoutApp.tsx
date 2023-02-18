import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { getUser } from '../app/actions'
import { useAppDispatch } from '../app/hooks'
import { Footer, Navbar } from '../components'
import { Logos } from '../components/Logos'
import { auth } from '../firebase'

function LayaoutApp() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [token, setToken] = useState('')

  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const tokenUser = await user.getIdToken()
        if (token !== tokenUser) setToken(tokenUser)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [token])

  useEffect(() => {
    if (token) {
      // Aquí llamas a la API usando el token
      dispatch(getUser(token))
    }
  }, [token])

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
