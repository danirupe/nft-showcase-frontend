import React from 'react'
import Countdown from 'react-countdown'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Timer from './Timer'

const NextnextNftGame = (props) => {
  const { game } = props
  let date = moment(game.release_date)

  return (
    <div className='nextNftGame'>
      <div className='nextNftGame__img'>
        <img src={game.home_img} alt={game.name} />
      </div>

      <div className='nextNftGame__content'>
        <h4 className='nextNftGame__title'>{game.name}</h4>
        <Countdown date={date._i} renderer={Timer} />
        <p>
          <span className='nextNftGame__description'>Release date: </span>
          {new Date(game.release_date).toLocaleDateString()}
        </p>
        <p>
          <span className='nextNftGame__description'>Token:</span>{' '}
          {game.token ? game.token : 'No disponible'}
        </p>
        <p>
          <span className='nextNftGame__description'>Platform:</span>{' '}
          {game.platforms ? game.platforms : 'No disponible'}
        </p>
        <div className='nextNftGame__button flex'>
          <Link to={`nftgames/${game.id}`} className='button'>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NextnextNftGame
