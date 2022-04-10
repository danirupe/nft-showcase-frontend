import React, { useState, useEffect } from 'react'
import { api } from '../../utility/services/api.service'
import NftGame from '../../components/ui/NftGame'
import game1 from '../../assets/images/game-1.jpeg'
import game2 from '../../assets/images/game-2.jpeg'
import game3 from '../../assets/images/game-3.jpeg'

const Launches = () => {
  const [launches, setLaunches] = useState()

  useEffect(() => {
    api.find('nftgames/find', { tag: 'today_launches' }).then((res) => {
      console.log(res)
      if (res.ok) {
        setLaunches(res.games)
      }
    })
  }, [])

  return (
    <section className='section launches' id='launches'>
      <div className='launches__container container'>
        <h2 className='launches__title title'>Today's Launches</h2>
        <div className='launches__wrapper grid'>
          <NftGame img={game1} />
          <NftGame img={game2} />
          <NftGame img={game3} />
        </div>
        <a href='/' className='launches__button button button-bor'>
          View all
        </a>
      </div>
    </section>
  )
}

export default Launches
