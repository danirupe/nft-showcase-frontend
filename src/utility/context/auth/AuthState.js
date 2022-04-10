import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'
import { api } from '../../services/apiCRUD.service'

const initialState = {
  isTokenValidated: false,
  logged: false
}

const AuthState = (props) => {
  // Dispatch es la funcion que llamará a la funciona AuthReducer
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const handleLogin = (item) => {
    dispatch({
      type: '[auth] login',
      payload: {
        name: item.name,
        uid: item.uid,
        token: item.token,
        role: item.role
      }
    })
  }

  const handleLogout = () => {
    localStorage.clear()
    dispatch({
      type: '[auth] logout'
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      api
        .startChecking('auth/renew', { 'x-token': token })
        .then((res) => {
          if (!res.ok) {
            dispatch({
              type: '[auth] logout'
            })
          } else {
            localStorage.setItem('token', res.token)
            handleLogin(res)
          }
        })
        .catch((err) => {
          dispatch({
            type: '[auth] logout'
          })
          //console.log('Error: ', err)
        })
    } else {
      dispatch({
        type: '[auth] logout'
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        handleLogin,
        handleLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
