import React from 'react'
import { NavLink } from 'react-router-dom'
export interface StatsNavInterface {}

const StatsNav: React.FC<StatsNavInterface> = () => {
  return (
    <>
      <nav className="hidden bg-rose-500 sm:w-64  sm:flex flex-col justify-start items-start gap-4 ">
        <NavLink to={'clasificacion'}>Clasificación</NavLink>
        <NavLink to={'mvp'}>MVP</NavLink>
        <NavLink to={'goleadores'}>Goleadores</NavLink>
        <NavLink to={'asistencias'}>Asistencias</NavLink>
      </nav>
      {/* bg-gradient-to-bl from-blue-600 to-blue-400 */}
      <nav className="grid grid-cols-2 sm:hidden gap-4 p-2">
        <NavLink
          to={'clasificacion'}
          className={'p-2 bg-cornflower-blue-500 shadow-lg shadow-cornflower-blue-400/50 drop-shadow-lg'}
        >
          Clasificación
        </NavLink>
        <NavLink
          to={'mvp'}
          className={'p-2 bg-cornflower-blue-500 shadow-lg shadow-cornflower-blue-400/50 drop-shadow-lg'}
        >
          MVP
        </NavLink>
        <NavLink
          to={'goleadores'}
          className={'p-2 bg-cornflower-blue-500 shadow-lg shadow-cornflower-blue-400/50 drop-shadow-lg'}
        >
          Goleadores
        </NavLink>
        <NavLink
          to={'asistencias'}
          className={'p-2 bg-cornflower-blue-500 shadow-lg shadow-cornflower-blue-400/50 drop-shadow-lg'}
        >
          Asistencias
        </NavLink>
      </nav>
    </>
  )
}

export default StatsNav
