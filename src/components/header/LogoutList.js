import React from 'react'
import { Link } from 'react-router-dom'

const LogoutList = () => {
  return (
    <ul className='nav__list flex'>
      <li className='nav__item'>
        <Link to='/'>Inicio</Link>
      </li>
      <li className='nav__item'>
        <Link to='/#launches'>Today</Link>
      </li>
      <li className='nav__item'>
        <Link
          to={{
            pathname: '/',
            hash: '#upcoming'
          }}
        >
          Upcoming
        </Link>
      </li>
      <li className='nav__item'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  )
}

export default LogoutList
