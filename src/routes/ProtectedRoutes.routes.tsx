import { Navigate, Outlet } from 'react-router'

function ProtectedRoutes({ redirectPath = '/', children }: any) {
  // Missing Implement user session logic
  const isAuthenticated = true
  if (isAuthenticated) {
    return children ?? <Outlet />
  } else {
    return <Navigate to={redirectPath} replace />
  }
}

export default ProtectedRoutes
