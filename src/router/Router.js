import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../utility/context/auth/AuthContext'
import Login from '../views/login/Login'
import AdminRoutes from './AdminRoutes'
import HomeRoutes from './HomeRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Router = () => {
  const { state } = useContext(AuthContext)

  if (!state.isTokenValidated) return <h3>Cargando...</h3>

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <PublicRoute>
              <HomeRoutes />
            </PublicRoute>
          }
        />
        <Route
          path='login'
          element={
            <PublicRoute isAuth={state.logged}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/admin/*'
          element={
            <PrivateRoute isAuth={state.logged}>
              <AdminRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
