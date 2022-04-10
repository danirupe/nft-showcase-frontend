import React, { useState, useEffect } from 'react'
import NextnextNftGame from '../../components/ui/NextNftGame'
import { api } from '../../utility/services/apiCRUD.service'

const NextLaunches = () => {
  const [nextLaunches, setNextLaunches] = useState()

  useEffect(() => {
    api.find('nftgames/find', { tag: 'next_launches' }).then((res) => {
      if (res.ok) {
        setNextLaunches(res.games)
      }
    })
  }, [])

  return (
    <section className='section nextLaunches' id='upcoming'>
      <div className='nextLaunches__container container'>
        <h2 className='nextLaunches__title title'>Coming soon</h2>
        <div className='nextLaunches__wrapper grid'>
          {nextLaunches && nextLaunches.length ? (
            nextLaunches.map((game) => (
              <NextnextNftGame key={game.id} game={game} />
            ))
          ) : (
            <p>No hay lanzamientos próximamente</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default NextLaunches
