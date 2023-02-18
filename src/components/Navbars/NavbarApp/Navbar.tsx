import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import { setUser } from '../../../app/actions'
import { useGetWalletQuery } from '../../../app/actions/wallet'
import { selectToken, selectUser } from '../../../app/api/userSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { ChampionshipLogoDefault } from '../../../assets'
import { Loader } from '../../Loader'
import { Social } from '../../Social'

export interface NavbarInterface {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarInterface> = ({ toggle, setToggle }) => {
  const user = useAppSelector(selectUser)
  const token = useAppSelector(selectToken)
  const dispatch = useAppDispatch()
  const { data, isLoading, error, isSuccess } = useGetWalletQuery(token)

  const handleToggle = () => {
    if (window.screen.width < 640) setToggle(!toggle)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogout = async () => {
    dispatch(setUser())
  }

  return (
    <nav className="sm:h-16 bg-myBlue bg-blueDegradado text-white/50 ">
      <div className=" sm:hidden flex flex-row flex-wrap justify-between items-center align-middle">
        <NavLink to="/" className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}>
          <ChampionshipLogoDefault tailwind="h-16 fill-white p-1" />
        </NavLink>
        <GoThreeBars className="fill-white h-10 w-16 hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
      </div>

      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } h-full-cell sm:h-full flex-col sm:flex sm:flex-row sm:flex-wrap justify-evenly gap-4`}
      >
        <ul className={`${toggle ? 'flex flex-col' : 'hidden'}  sm:flex sm:flex-row flex-wrap  gap-4`}>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Equipos"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Equipos
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Calendario"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Calendario
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Estadisticas"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Estadisticas
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Contacto"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Contacto
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Reglamento"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Reglamento
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="LaPolla"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              La Polla
            </NavLink>
          </li>
          <li className="p-2" onClick={handleToggle}>
            <NavLink
              to="Sobre-mi"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Sobre mi
            </NavLink>
          </li>

          {user ? (
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-white bg-black/50 px-2 text-sm">
              {user.photo ? (
                <img className="w-10 rounded-full" src={user.photo ?? ''} alt="photo" />
              ) : (
                <p className="uppercase">{user.email?.[0] ?? ''}</p>
              )}
              <div>
                <p className="uppercase text-sm">{user.email?.split('@')[0]}</p>

                {isLoading && <Loader />}
                {isSuccess && (
                  <p>
                    Saldo: <span>{data.wallet.balance}</span>
                  </p>
                )}
                {error && <p>{'Upss!! Ocurrio un error.'}</p>}
                <button className="text-sm hover:scale-105 hover:font-bold" onClick={handleLogout}>
                  Salir
                </button>
              </div>
            </div>
          ) : (
            <li className="p-2 grid place-content-center" onClick={handleToggle}>
              <NavLink
                to="register"
                className={({ isActive }) =>
                  isActive !== true
                    ? ' hover:bg-green-500 text-white p-2 border'
                    : ' bg-green-500 text-white p-2 text-lg font-medium border hover:shadow-white  hover:shadow-lg  hover:drop-shadow-2xl'
                }
              >
                Ingresar
              </NavLink>
            </li>
          )}
        </ul>

        <Social />
      </div>
    </nav>
  )
}

export default Navbar
