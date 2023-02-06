import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Asistaints, Classification, Loader, MVP, Player, Scorers } from '../components'
import { CalendarLayout, EquiposLayout, LayoutApp, PlayersLayout, ReglamentoLayout, StatsLayout } from '../layouts'
import Contacto from '../layouts/Contacto'

import ProtectedRoutes from './ProtectedRoutes.routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route path="Equipos" element={<EquiposLayout />}>
        <Route path=":teamId" element={<PlayersLayout />} />
      </Route>
      <Route path="Calendario" element={<CalendarLayout />} />
      <Route path="Estadisticas" element={<StatsLayout />}>
        <Route path="clasificacion" element={<Classification />} />
        <Route path="mvp" element={<MVP />} />
        <Route path="goleadores" element={<Scorers />} />
        <Route path="asistencias" element={<Asistaints />} />
      </Route>
      <Route path="Contacto" element={<Contacto />} />
      <Route path="Sobre-mi" element={<Player />} />
      <Route path="Reglamento" element={<ReglamentoLayout />} />
      <Route
        path="LaPolla"
        element={
          <h1 className="grid place-content-center place-items-center h-56 text-gray-500 text-xl">
            <span className="font-bold sm:hidden">LA POLLA</span>
            ... Muy pronto ...
          </h1>
        }
      />
      <Route path="register" element={<Loader />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<h1>profile</h1>} />
      </Route>
    </Route>
  )
)
