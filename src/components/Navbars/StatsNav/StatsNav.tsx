import { NavLink, useLocation } from 'react-router-dom'
export interface StatsNavInterface {}

const StatsNav: React.FC<StatsNavInterface> = () => {
  const location = useLocation()

  console.log(location.pathname.split('/')[2])

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
              : 'relative text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          Clasificación
          {location.pathname.split('/')[2] === 'clasificacion' && (
            <span className="absolute h-4 w-4 -top-2 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-radical-red-400/90 opacity-75"></span>
              <span className=" inline-flex rounded-full h-4 w-4 bg-radical-red-400/90"></span>
            </span>
          )}
        </NavLink>
        <NavLink
          to={'mvp'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue '
              : 'relative text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          {location.pathname.split('/')[2] === 'mvp' && (
            <span className="absolute h-4 w-4 -top-2 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-radical-red-400/90 opacity-75"></span>
              <span className=" inline-flex rounded-full h-4 w-4 bg-radical-red-400/90"></span>
            </span>
          )}
          MVP
        </NavLink>
        <NavLink
          to={'goleadores'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue  '
              : 'relative text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          {location.pathname.split('/')[2] === 'goleadores' && (
            <span className="absolute h-4 w-4 -top-2 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-radical-red-400/90 opacity-75"></span>
              <span className=" inline-flex rounded-full h-4 w-4 bg-radical-red-400/90"></span>
            </span>
          )}
          Goleadores
        </NavLink>
        <NavLink
          to={'asistencias'}
          className={({ isActive }) =>
            isActive !== true
              ? 'text-white opacity-80 p-2 bg-cornflower-blue '
              : 'relative text-white opacity-100 font-medium p-2 bg-cornflower-blue shadow-lg shadow-cornflower-blue '
          }
        >
          {location.pathname.split('/')[2] === 'asistencias' && (
            <span className="absolute h-4 w-4 -top-2 -right-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-radical-red-400/90 opacity-75"></span>
              <span className=" inline-flex rounded-full h-4 w-4 bg-radical-red-400/90"></span>
            </span>
          )}
          Asistencias
        </NavLink>
      </nav>
    </>
  )
}

export default StatsNav
