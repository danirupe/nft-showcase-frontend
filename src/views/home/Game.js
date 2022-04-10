import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosGitNetwork } from 'react-icons/io'
import { IoNewspaperOutline } from 'react-icons/io5'
import { BiBitcoin, BiDevices } from 'react-icons/bi'
import { BsCalendarDate } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'
import { api } from '../../utility/services/apiCRUD.service'
import parse from 'html-react-parser'

const initialState = {
  name: '',
  web: '',
  description: '',
  home_img: '',
  release_date: '',
  platforms: '',
  whitepaper: '',
  token: '',
  network: '',
  instagram: '',
  twitter: '',
  telegram: '',
  content: '',
  activated: false
}

const Game = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [gameData, setGameData] = useState(initialState)

  useEffect(() => {
    setLoading(true)
    api
      .getOne('nftgames/', id)
      .then((res) => {
        if (res.ok) {
          setGameData(res.game)
        }
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading)
    return (
      <div className='container__loader container'>
        <div className='loader'></div>
      </div>
    )

  return (
    <section className='viewNftGame section'>
      <div className='viewNftGame__container container'>
        <div className='viewNftGame__wrapper'>
          <h2 className='viewNftGame__title'>{gameData.name}</h2>
          <div className='viewNftGame__description'>{gameData.description}</div>
          <div className='viewNftGame__info'>
            <div className='viewNftGame__img'>
              <img src={gameData.home_img} alt={gameData.name} />
            </div>

            <div className='viewNftGame__box'>
              <p className='viewNftGame__item'>
                <MdWeb className='viewNftGame__svg' />
                Página web:
                {gameData.web ? (
                  <a
                    href={gameData.web}
                    className='viewNftGame__value--a'
                    target='_blank'
                  >
                    Ver
                  </a>
                ) : (
                  'No disponible'
                )}
              </p>
              <p className='viewNftGame__item'>
                <BsCalendarDate className='viewNftGame__svg' />
                Fecha de lanzamiento:{' '}
                <span className='viewNftGame__value'>
                  {new Date(gameData.release_date).toLocaleDateString()}
                </span>
              </p>
              <p className='viewNftGame__item'>
                <BiDevices className='viewNftGame__svg' />
                Plataformas:{' '}
                <span className='viewNftGame__value'>{gameData.platforms}</span>
              </p>
            </div>

            <div className='viewNftGame__box'>
              <p className='viewNftGame__item'>
                <IoNewspaperOutline className='viewNftGame__svg' />
                Whitepapaer:
                {gameData.whitepaper ? (
                  <a
                    href={gameData.whitepaper}
                    className='viewNftGame__value--a'
                    target='_blank'
                  >
                    Ver
                  </a>
                ) : (
                  'No disponible'
                )}
              </p>
              <p className='viewNftGame__item'>
                <BiBitcoin className='viewNftGame__svg' size={20} />
                Token:
                <span className='viewNftGame__value'>
                  {gameData.token ? gameData.token : ' No dispnible'}
                </span>
              </p>
              <p className='viewNftGame__item'>
                <IoIosGitNetwork className='viewNftGame__svg' />
                Network:
                <span className='viewNftGame__value'>
                  {gameData.network ? gameData.network : ' No disponible'}
                </span>
              </p>
            </div>
          </div>

          <div className='viewNftGame__content'>{parse(gameData.content)}</div>
        </div>
        <div className='viewNftGame__buttons'>
          <Link to='/' className='button'>
            Atras
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Game
