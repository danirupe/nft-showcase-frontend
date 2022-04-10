import React from 'react'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__content grid'>
          <div className='footer__column'>
            <Logo clase={'nav__logo footer__logo'} />
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/'>Today's launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Next launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Search games</a>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
            <h4 className='footer__title'>EXPLORE</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/'>Today's launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Next launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Search games</a>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
            <h4 className='footer__title'>EXPLORE</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/'>Today's launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Next launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Search games</a>
              </li>
            </ul>
          </div>

          <div className='footer__column'>
            <h4 className='footer__title'>EXPLORE</h4>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/'>Today's launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Next launches</a>
              </li>
              <li className='footer__item'>
                <a href='/'>Search games</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__copy'>2022 NFT Games</div>
      </div>
    </footer>
  )
}

export default Footer
