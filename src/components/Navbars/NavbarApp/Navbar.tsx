import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'
import { Social } from '../../Social'
import { ChampionshipLogoDefault } from '../../../assets'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <nav className="sm:h-16 bg-myBlue bg-blueDegradado text-[rgba(255,255,255,.5)]">
      <div className="sm:hidden flex flex-row flex-wrap justify-between items-center align-middle">
        <NavLink to="/" className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}>
          <ChampionshipLogoDefault />
        </NavLink>

        <GoThreeBars className="h-12 w-16 hover:cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)} />
      </div>

      <div
        className={`${toggleMenu ? 'flex ' : 'hidden'} flex-col sm:flex sm:flex-row sm:flex-wrap justify-evenly gap-4`}
      >
        <ul className={`${toggleMenu ? 'flex flex-col' : 'hidden'}  sm:flex sm:flex-row flex-wrap  gap-4`}>
          <li className="p-2">
            <NavLink
              to="Equipos"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Equipos
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="Calendario"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Calendario
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="Estadisticas"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Estadisticas
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="Contacto"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Contacto
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="Reglamento"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              Reglamento
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="LaPolla"
              className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}
            >
              La Polla
            </NavLink>
          </li>
        </ul>
        <Social />
      </div>
    </nav>
  )
}

export default Navbar
