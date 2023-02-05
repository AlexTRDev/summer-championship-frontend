import React from 'react'
import { NavLink } from 'react-router-dom'
export interface StatsNavInterface {}

const StatsNav: React.FC<StatsNavInterface> = () => {
  return (
    <>
      <nav className="hidden text-white bg-blueDegradado  sm:w-64  sm:flex flex-col justify-start items-start gap-10 sm:min-h-[516px] p-2 pt-10">
        <NavLink
          to="clasificacion"
          className={({ isActive }) => (isActive !== true ? ' hover:text-white ' : 'text-white font-bold')}
        >
          Clasificación
        </NavLink>
        <NavLink
          to="mvp"
          className={({ isActive }) => (isActive !== true ? ' hover:text-white ' : 'text-white font-bold')}
        >
          MVP
        </NavLink>
        <NavLink
          to="goleadores"
          className={({ isActive }) => (isActive !== true ? ' hover:text-white ' : 'text-white font-bold')}
        >
          Goleadores
        </NavLink>
        <NavLink
          to="asistencias"
          className={({ isActive }) => (isActive !== true ? ' hover:text-white ' : 'text-white font-bold')}
        >
          Asistencias
        </NavLink>
      </nav>
      {/* bg-gradient-to-bl from-blue-600 to-blue */}
      <nav className="grid grid-cols-2 sm:hidden gap-4 p-2 ">
        <NavLink
          to={'clasificacion'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue  '
              : 'text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          Clasificación
        </NavLink>
        <NavLink
          to={'mvp'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue '
              : 'text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          MVP
        </NavLink>
        <NavLink
          to={'goleadores'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue  '
              : 'text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          Goleadores
        </NavLink>
        <NavLink
          to={'asistencias'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue '
              : 'text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          Asistencias
        </NavLink>
      </nav>
    </>
  )
}

export default StatsNav
