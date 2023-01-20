import React from 'react'
import { NavLink } from 'react-router-dom'
export interface NavbarInterface {}
// background-color: #FBAB7E;
// background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav className=" h-16 bg-myBlue bg-blueDegradado text-[rgba(255,255,255,.5)]">
      <ul className="flex">
        <li className="p-2">
          <NavLink to="Equipos" className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}>
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
          <NavLink to="Contacto" className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}>
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
          <NavLink to="LaPolla" className={({ isActive }) => (isActive !== true ? ' hover:text-white' : 'text-white')}>
            La Polla
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
