import React from 'react'
import welcomeImg from '../../assets/images/games.svg'

const Welcome = () => {
  return (
    <section className='welcome section'>
      <div className='welcome__container container'>
        <div className='welcome__wrapper grid'>
          <div className='welcome__content'>
            <h1 className='welcome__title'>
              Buy and Sell NFTs In <span className='degraded'>1 Second</span>
            </h1>
            <p className='welcome__description'>
              On the largest NFT marketplace. All NFT Games launches in the same
              place.
            </p>
            <div className='welcome__buttons flex'>
              <a href='/' className='button'>
                Explore
              </a>
              <a href='/' className='button button--bor'>
                Create NFTs
              </a>
            </div>
          </div>

          <div className='welcome__img'>
            <img src={welcomeImg} alt='' className='welcome__blob-img' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome
