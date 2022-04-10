import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown'
import moment from 'moment'
import { api } from '../../utility/services/apiCRUD.service'
import Timer from '../../components/ui/Timer'

const TodayGame = () => {
  const [todayGame, setTodayGame] = useState()

  useEffect(() => {
    api.find('nftgames/find', { tag: 'today_launches' }).then((res) => {
      if (res.ok) {
        setTodayGame(res.games[0])
      }
    })
  }, [])

  if (!todayGame) {
    return <div className='container'>Hoy no hay lanzamientos</div>
  }

  return (
    <section
      className='hero section'
      style={{ backgroundImage: `url(${todayGame.home_img})` }}
    >
      <div className='hero__container container grid'>
        <div className='hero__content'>
          <h2 className='hero__title'>{todayGame.name}</h2>
          <p className='hero__description'>{todayGame.description}</p>
          <Countdown
            date={moment(todayGame.release_date).endOf('day').format()}
            renderer={Timer}
          />
          <Link to={`nftgames/${todayGame.id}`} className='hero__button button'>
            View game
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TodayGame
