import React, { useContext, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Logo from '../ui/Logo'
import { AuthContext } from '../../utility/context/auth/AuthContext'
import LoginList from './LoginList'
import LogoutList from './LogoutList'

const Header = () => {
  const { state } = useContext(AuthContext)

  const addClassHeader = () => {
    let header = document.getElementById('header')

    window.scrollY > 20
      ? header.classList.add('header--scroll')
      : header.classList.remove('header--scroll')
  }

  window.addEventListener('scroll', addClassHeader)

  return (
    <header className='header' id='header'>
      <nav className='nav container grid'>
        <Logo clase='nav__logo' />

        <div className='nav__menu'>
          {state.logged ? <LoginList /> : <LogoutList />}
        </div>
      </nav>
    </header>
  )
}

export default Header
