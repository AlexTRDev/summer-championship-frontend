import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Asistaints, Classification, MVP, Player, Scorers } from '../components'
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
        element={<h1 className="grid h-96 place-content-center text-gray-500 text-xl">... Muy pronto ...</h1>}
      />
      <Route path="register" element={<h1>register</h1>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<h1>profile</h1>} />
      </Route>
    </Route>
  )
)
