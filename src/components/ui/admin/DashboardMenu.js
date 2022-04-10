import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <div className='dashboard__menu'>
      <ul className='dashboard__list'>
        <li className='dashboard__item'>
          <Link to='/admin/myaccount'>Datos personales</Link>
        </li>
        <li className='dashboard__item'>
          <Link to='/admin/nftgames'>Juegos</Link>
        </li>
        <li className='dashboard__item'>
          <Link to='/admin/nftgames/new'>Añadir juego</Link>
        </li>
      </ul>
    </div>
  )
}

export default DashboardMenu
