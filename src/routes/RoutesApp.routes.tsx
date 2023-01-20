import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from '../layouts'
import ProtectedRoutes from './ProtectedRoutes.routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Equipos" element={<h1>Equipos</h1>} />
      <Route path="Calendario" element={<h1>Calendario</h1>} />
      <Route path="Estadisticas" element={<h1>Estadisticas</h1>} />
      <Route path="Contacto" element={<h1>Contacto</h1>} />
      <Route path="Reglamento" element={<h1>Reglamento</h1>} />
      <Route path="LaPolla" element={<h1>LaPolla</h1>} />
      <Route path="register" element={<h1>register</h1>} />
      <Route element={<ProtectedRoutes />}>
        <Route path="profile" element={<h1>profile</h1>} />
      </Route>
    </Route>
  )
)
