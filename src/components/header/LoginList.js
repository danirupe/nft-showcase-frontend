import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../utility/context/auth/AuthContext'

const LoginList = () => {
  const { state, handleLogout } = useContext(AuthContext)

  return (
    <ul className='nav__list flex'>
      <li className='nav__item'>
        <Link to='/'>Inicio</Link>
      </li>
      <li className='nav__item'>
        <Link to='/admin' className='nav__item--admin'>
          Admin
        </Link>
      </li>
      <li className='nav__item'>
        <a className='nav__item--admin' href='/' onClick={handleLogout}>
          Cerrar sesion
        </a>
      </li>
    </ul>
  )
}

export default LoginList
