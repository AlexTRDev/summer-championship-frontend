import React from 'react'
import { NavLink } from 'react-router-dom'
export interface StatsNavInterface {}

const StatsNav: React.FC<StatsNavInterface> = () => {
  return (
    <nav className="w-64 bg-rose-500 flex flex-col justify-start items-start  gap-4">
      <NavLink to={'clasificacion'}>Clasificación</NavLink>
      <NavLink to={'mvp'}>MVP</NavLink>
      <NavLink to={'goleadores'}>Goleadores</NavLink>
      <NavLink to={'asistencias'}>Asistencias</NavLink>
    </nav>
  )
}

export default StatsNav
