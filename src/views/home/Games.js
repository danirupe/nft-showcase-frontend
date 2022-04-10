import React, { useState, useEffect } from 'react'
import NftGame from '../../components/ui/NftGame'
import SearchBar from '../../components/ui/SearchBar'
import { api } from '../../utility/services/apiCRUD.service'

const fetchGames = (skip) => {
  return api.getAllPag('nftgames/', { skip: skip })
}

const initial_page = 0

const Games = () => {
  const [skip, setSkip] = useState(initial_page)
  const [games, setGames] = useState()
  const [loading, setLoading] = useState(true)
  const [loadingPage, setLoadingPage] = useState(false)
  const [totalGames, setTotalGames] = useState(0)

  const handleClick = () => {
    setSkip(skip + 6)
    setLoadingPage(true)
  }

  useEffect(() => {
    fetchGames(skip)
      .then((res) => {
        if (res.ok) {
          setGames(res.games)
          setTotalGames(res.totalGames)
        }
      })
      .then(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (skip === initial_page) return
    fetchGames(skip)
      .then((res) => {
        if (res.ok) {
          setGames((prevGames) => prevGames.concat(res.games))
        }
      })
      .then(() => {
        setLoadingPage(false)
      })
  }, [skip])

  if (loading)
    return (
      <div className='container__loader container'>
        <div className='loader'></div>
      </div>
    )

  return (
    <section className='games section'>
      <div className='games__container container'>
        <SearchBar />
        <div className='games__content grid'>
          {games && games.map((game) => <NftGame key={game.id} data={game} />)}
        </div>
        {loadingPage ? (
          <div className='container__loader container'>
            <div className='loader'></div>
          </div>
        ) : (
          ''
        )}
        {games.length === totalGames - 1 ? (
          ''
        ) : (
          <p className='button games__button' onClick={handleClick}>
            Cargar más
          </p>
        )}
      </div>
    </section>
  )
}

export default Games
