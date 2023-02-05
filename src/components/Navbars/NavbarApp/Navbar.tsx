import React from 'react'
import { GoThreeBars } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import { ChampionshipLogoDefault } from '../../../assets'
import { Social } from '../../Social'

export interface NavbarInterface {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarInterface> = ({ toggle, setToggle }) => {
  const handleToggle = () => {
    if (window.screen.width < 640) setToggle(!toggle)
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
        </ul>
        <Social />
      </div>
    </nav>
  )
}

export default Navbar
