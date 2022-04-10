import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import '../assets/css/admin.css'
import { AuthContext } from '../utility/context/auth/AuthContext'

const PrivateRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default PrivateRoute
