import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import {
  Asistaints,
  Calendars,
  Classification,
  MVP,
  Player,
  Scorers,
  ShowVoucher,
  SignIn,
  TeamStats,
} from '../components'
import { LaPolla } from '../components/Polla/LaPolla'
import { Profile } from '../components/Profile'
import { Wallet } from '../components/Wallet'
import { Yape } from '../components/Yape'
import {
  CalendarLayout,
  EquiposLayout,
  LaPollaLayout,
  LayoutApp,
  PlayersLayout,
  ReglamentoLayout,
  StatsLayout,
} from '../layouts'
import Contacto from '../layouts/Contacto'
import HomeLayout from '../layouts/HomeLayout'

import ProtectedRoutes from './ProtectedRoutes.routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route index element={<HomeLayout />} />
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
      <Route path="admin/clasificacion" element={<TeamStats />} />
      <Route path="admin/calendars" element={<Calendars />} />
      <Route path="admin/la-polla" element={<LaPolla />} />
      <Route path="admin/wallet" element={<Wallet />} />
      <Route path="LaPolla" element={<LaPollaLayout />} />
      <Route path="register" element={<SignIn />} />
      <Route path="login" element={<SignIn />} />
      <Route path="perfil" element={<Profile />} />
      <Route path="yape" element={<Yape />} />
      {/* <Route path="admin" element={<PollaResults />} /> */}
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<h1>profile</h1>} />
      </Route>
      <Route path="ver-boleto/:codigo" element={<ShowVoucher />} />
    </Route>
  )
)
