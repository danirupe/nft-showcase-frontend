import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'
import 'animate.css'

const NftGame = ({ data }) => {
  const { home_img, name, release_date, platforms, id } = data

  return (
    <div className='nftgame'>
      <img src={home_img} className='nftgame__img' alt={name} />

      <div>
        <p className='nftgame__time flex'>
          <AiOutlineClockCircle
            size='17'
            className='animate__animated animate__pulse animate__infinite'
          />
          <span>25/04/2022 - 21:00 GTM+1</span>
        </p>
      </div>

      <div className='nftgame__content'>
        <h4 className='nftgame__title'>{name}</h4>
        <p>
          <span className='nftgame__description'>Release date:</span> 20-03-2022
        </p>
        <p>
          <span className='nftgame__description'>Token:</span> $JRSC
        </p>
        <p>
          <span className='nftgame__description'>Platform:</span> Android / IOS
        </p>
      </div>

      <div className='nftgame__button flex'>
        <Link to={`nftgames/${id}`} className='hero__button button'>
          View game
        </Link>
      </div>
    </div>
  )
}

export default NftGame
